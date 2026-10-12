#!/usr/bin/env node
/*
 * make-subtitles.mjs — generate WebVTT subtitle files for the VideoPlayer.
 *
 * Pipeline:  audio/video  --Whisper-->  <name>.<from>.vtt  --DeepL-->  <name>.<to>.vtt
 *
 * 1. Transcribes the source-language audio with OpenAI Whisper (WebVTT output).
 * 2. Translates each cue's text into the target language(s) with DeepL,
 *    keeping the timestamps intact.
 *
 * Requirements (no npm install needed — uses Node 18+ built-in fetch/FormData):
 *   - ffmpeg on PATH (only if the input is a video, to pull the audio out)
 *   - OPENAI_API_KEY   (transcription)   https://platform.openai.com/api-keys
 *   - DEEPL_API_KEY    (translation)     https://www.deepl.com/pro-api
 *
 * Usage:
 *   node scripts/make-subtitles.mjs <input.mp4|.mp3|.wav> --from en --to de,fr \
 *        [--name film] [--out public/subs]
 *
 * Example (produces public/subs/walzer.en.vtt + walzer.de.vtt):
 *   node scripts/make-subtitles.mjs trailer.mp4 --from de --to en --name walzer
 *
 * IMPORTANT: machine output is a first draft. Always have a fluent speaker review
 * the .vtt files before publishing — names, idioms and German↔English nuance.
 */

import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import { tmpdir } from 'node:os'

const run = promisify(execFile)

// ---- args ----------------------------------------------------------------
const [, , input, ...rest] = process.argv
const opt = (flag, def) => {
  const i = rest.indexOf(flag)
  return i === -1 ? def : rest[i + 1]
}
if (!input) {
  console.error('Usage: node scripts/make-subtitles.mjs <input> --from en --to de,fr [--name x] [--out dir]')
  process.exit(1)
}
const from = (opt('--from', 'en') || 'en').toLowerCase()
const targets = (opt('--to', '') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
const name = opt('--name', basename(input, extname(input)))
const outDir = opt('--out', 'public/subs')

const OPENAI_KEY = process.env.OPENAI_API_KEY
const DEEPL_KEY = process.env.DEEPL_API_KEY
if (!OPENAI_KEY) throw new Error('Set OPENAI_API_KEY for transcription.')

// DeepL needs a region suffix for English targets.
const deeplTarget = (lang) => ({ en: 'EN-GB', pt: 'PT-PT' }[lang] || lang.toUpperCase())

// ---- 1. get audio --------------------------------------------------------
async function ensureAudio(file) {
  const ext = extname(file).toLowerCase()
  if (['.mp3', '.m4a', '.wav', '.flac', '.ogg'].includes(ext)) return { path: file, temp: false }
  const out = join(tmpdir(), `${name}-${Date.now()}.mp3`)
  console.log('• extracting audio with ffmpeg…')
  await run('ffmpeg', ['-y', '-i', file, '-vn', '-ac', '1', '-ar', '16000', '-b:a', '96k', out])
  return { path: out, temp: true }
}

// ---- 2. transcribe (Whisper → VTT) --------------------------------------
async function transcribe(audioPath) {
  console.log(`• transcribing (${from}) with Whisper…`)
  const fd = new FormData()
  const buf = await readFile(audioPath)
  fd.append('file', new Blob([buf]), basename(audioPath))
  fd.append('model', 'whisper-1')
  fd.append('language', from)
  fd.append('response_format', 'vtt')
  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${OPENAI_KEY}` },
    body: fd,
  })
  if (!res.ok) throw new Error(`Whisper ${res.status}: ${await res.text()}`)
  return res.text()
}

// ---- VTT parse / serialize ----------------------------------------------
function parseVtt(vtt) {
  const blocks = vtt.replace(/^﻿/, '').split(/\r?\n\r?\n/)
  const cues = []
  for (const block of blocks) {
    const lines = block.split(/\r?\n/)
    const tIdx = lines.findIndex((l) => l.includes('-->'))
    if (tIdx === -1) continue // WEBVTT header / NOTE
    cues.push({ head: lines.slice(0, tIdx + 1).join('\n'), text: lines.slice(tIdx + 1).join('\n') })
  }
  return cues
}
function serializeVtt(cues) {
  return 'WEBVTT\n\n' + cues.map((c) => `${c.head}\n${c.text}`).join('\n\n') + '\n'
}

// ---- 3. translate via DeepL (preserves timing) --------------------------
async function translate(cues, lang) {
  if (!DEEPL_KEY) throw new Error('Set DEEPL_API_KEY to translate.')
  const endpoint = DEEPL_KEY.endsWith(':fx')
    ? 'https://api-free.deepl.com/v2/translate'
    : 'https://api.deepl.com/v2/translate'
  const out = []
  const CHUNK = 45 // DeepL allows up to 50 text params per request
  for (let i = 0; i < cues.length; i += CHUNK) {
    const slice = cues.slice(i, i + CHUNK)
    const body = new URLSearchParams()
    body.set('source_lang', from.toUpperCase())
    body.set('target_lang', deeplTarget(lang))
    slice.forEach((c) => body.append('text', c.text))
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `DeepL-Auth-Key ${DEEPL_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${await res.text()}`)
    const { translations } = await res.json()
    translations.forEach((t, j) => out.push({ head: slice[j].head, text: t.text }))
  }
  return out
}

// ---- main ----------------------------------------------------------------
const { path: audio, temp } = await ensureAudio(input)
try {
  await mkdir(outDir, { recursive: true })
  const srcVtt = await transcribe(audio)
  const srcPath = join(outDir, `${name}.${from}.vtt`)
  await writeFile(srcPath, srcVtt)
  console.log(`  ↳ ${srcPath}`)

  const cues = parseVtt(srcVtt)
  for (const lang of targets) {
    console.log(`• translating → ${lang}…`)
    const translated = await translate(cues, lang)
    const p = join(outDir, `${name}.${lang}.vtt`)
    await writeFile(p, serializeVtt(translated))
    console.log(`  ↳ ${p}`)
  }
  console.log('\nDone. Review every .vtt by a fluent speaker before publishing.')
} finally {
  if (temp) await unlink(audio).catch(() => {})
}
