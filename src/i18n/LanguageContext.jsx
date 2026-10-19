/*
 * Lightweight bilingual (EN/DE) layer — no external i18n dependency.
 *
 * How it works:
 *  - English is the canonical content, assembled from src/data/*.js in en.js.
 *  - German lives entirely in de.js (page/data copy) and ui.js (chrome), as
 *    translation overrides. Anything German omits falls back to English.
 *  - The active content tree is `en` deep-merged with `de`, selected by `lang`.
 *  - `useContent()` gives the merged data tree; `useT()` gives chrome strings.
 *
 * The preference is stored in localStorage and reflected on <html lang>, so the
 * whole site switches reactively (no reload) and remembers the choice.
 */

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { en } from './en.js'
import { de } from './de.js'
import { ui } from './ui.js'

const STORAGE_KEY = 'ocp-lang'

// The languages offered by the header switch. `short` labels the flag button.
export const LANGS = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
]

const isLang = (v) => v === 'en' || v === 'de'

function readInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    /* storage blocked (private window) — fall through */
  }
  // First visit: honour a German browser since the project is German-based.
  try {
    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('de')) {
      return 'de'
    }
  } catch {
    /* ignore */
  }
  return 'en'
}

// Deep-merge German overrides onto the English base. Arrays merge element by
// element (German provides the same length/order, only translated fields), so
// untranslated fields — slugs, image ids, video URLs — keep their English value.
const isPlainObject = (v) => v != null && typeof v === 'object' && !Array.isArray(v)
function merge(base, over) {
  if (over === undefined || over === null) return base
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return over
    return base.map((el, i) => merge(el, over[i]))
  }
  if (isPlainObject(base)) {
    const out = { ...base }
    if (isPlainObject(over)) {
      for (const k of Object.keys(over)) out[k] = merge(base[k], over[k])
    }
    return out
  }
  return over
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const content = useMemo(() => {
    const tree = lang === 'de' ? merge(en, de) : en
    return {
      ...tree,
      getProject: (slug) => tree.projects.find((p) => p.slug === slug),
    }
  }, [lang])

  const value = useMemo(() => {
    const dict = ui[lang] || ui.en
    // `t('a.b.c', { count: 3 })` reads a dotted path, falls back to English,
    // then to the raw path, and fills {placeholders}. Returns strings or, for
    // structured chrome (e.g. About's value cards), arrays/objects.
    const t = (path, vars) => {
      const read = (obj) =>
        path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
      let out = read(dict)
      if (out === undefined) out = read(ui.en)
      if (out === undefined) return path
      if (typeof out === 'string' && vars) {
        out = out.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m))
      }
      return out
    }
    return { lang, setLang, content, t }
  }, [lang, content])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}

export const useContent = () => useI18n().content
export const useT = () => useI18n().t
export function useLang() {
  const { lang, setLang } = useI18n()
  return [lang, setLang]
}
