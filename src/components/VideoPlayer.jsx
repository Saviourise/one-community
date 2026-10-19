import { useEffect, useRef, useState } from 'react'
import styles from './VideoPlayer.module.css'
import { useT } from '../i18n/LanguageContext.jsx'

/**
 * Host-agnostic HTML5 video player with:
 *  - a clean, branded subtitle LANGUAGE switcher (CC menu, top-right), and
 *  - casual download protection (Tier 0): no download control, right-click
 *    blocked, no picture-in-picture.
 *
 * Honest limits: this deters the average visitor only. The file URL is still
 * reachable via dev tools, and screen recording always works. For real
 * download resistance, serve the video from a streaming host (Cloudflare
 * Stream / Mux / Bunny) with signed URLs + HLS, and point `sources` at the
 * HLS manifest — the subtitle UI below stays the same.
 *
 * Props:
 *   sources : [{ src, type }]   e.g. [{ src: '/demo/film.mp4', type: 'video/mp4' }]
 *   src     : string            shorthand for a single mp4 source
 *   poster  : string            poster image URL
 *   tracks  : [{ src, srclang, label, dir?, default? }]   WebVTT subtitle files
 *             (dir: 'ltr' | 'rtl' — for the menu/label of RTL scripts like ar/fa)
 *   title   : string            accessible label
 *   className, autoPlay, loop, muted
 */
export default function VideoPlayer({
  sources,
  src,
  poster,
  tracks = [],
  title = 'Video',
  className = '',
  autoPlay = false,
  loop = false,
  muted = false,
}) {
  const t = useT()
  const videoRef = useRef(null)
  const menuRef = useRef(null)
  const resolvedSources = sources?.length ? sources : src ? [{ src, type: 'video/mp4' }] : []

  // 'off' or a track srclang. Start on the track flagged `default`, if any.
  const [activeLang, setActiveLang] = useState(() => tracks.find((t) => t.default)?.srclang || 'off')
  const [menuOpen, setMenuOpen] = useState(false)

  // Drive the native textTracks from React state (single source of truth).
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const apply = () => {
      const tt = v.textTracks
      for (let i = 0; i < tt.length; i += 1) {
        tt[i].mode = tt[i].language === activeLang ? 'showing' : 'disabled'
      }
    }
    apply()
    // Some browsers populate textTracks slightly after mount.
    v.addEventListener('loadedmetadata', apply)
    return () => v.removeEventListener('loadedmetadata', apply)
  }, [activeLang, tracks])

  // Close the CC menu on outside click / Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const choose = (lang) => {
    setActiveLang(lang)
    setMenuOpen(false)
  }

  const activeLabel =
    activeLang === 'off'
      ? t('videoPlayer.off')
      : tracks.find((tr) => tr.srclang === activeLang)?.label || t('videoPlayer.on')

  return (
    <div className={`${styles.wrap} ${className}`.trim()}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={poster}
        controls
        // --- casual download protection ---
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        preload="metadata"
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        aria-label={title}
      >
        {resolvedSources.map((s) => (
          <source key={s.src} src={s.src} type={s.type || 'video/mp4'} />
        ))}
        {tracks.map((t) => (
          <track
            key={t.srclang}
            kind="subtitles"
            src={t.src}
            srcLang={t.srclang}
            label={t.label}
          />
        ))}
        {t('videoPlayer.unsupported')}
      </video>

      {tracks.length > 0 && (
        <div className={styles.cc} ref={menuRef}>
          <button
            type="button"
            className={styles.ccBtn}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M10 10.2a2 2 0 0 0-3.4 1.5v.6A2 2 0 0 0 10 13.8M18 10.2a2 2 0 0 0-3.4 1.5v.6a2 2 0 0 0 3.4 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={styles.ccLabel}>
              {/* prefix via t() with an empty slot, label in <bdi> to isolate RTL track names */}
              {t('videoPlayer.subtitles', { label: '' })}
              <bdi>{activeLabel}</bdi>
            </span>
          </button>

          {menuOpen && (
            <div className={styles.menu} role="menu" aria-label={t('videoPlayer.subtitleAria')}>
              <button
                type="button"
                role="menuitemradio"
                aria-checked={activeLang === 'off'}
                className={`${styles.menuItem} ${activeLang === 'off' ? styles.menuItemActive : ''}`}
                onClick={() => choose('off')}
              >
                {t('videoPlayer.off')}
              </button>
              {tracks.map((t) => (
                <button
                  key={t.srclang}
                  type="button"
                  role="menuitemradio"
                  dir={t.dir || 'ltr'}
                  aria-checked={activeLang === t.srclang}
                  className={`${styles.menuItem} ${activeLang === t.srclang ? styles.menuItemActive : ''}`}
                  onClick={() => choose(t.srclang)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
