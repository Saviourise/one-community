import { LANGS, useI18n } from '../i18n/LanguageContext.jsx'
import styles from './LanguageSwitch.module.css'

/*
 * Flag SVGs drawn on the flag's own aspect ratio. The outer <svg> clips to its
 * viewBox (default overflow:hidden), so the diagonals of the Union Jack are
 * trimmed to the rectangle without needing a clipPath (which would collide
 * across the several instances rendered on a page).
 */
function Flag({ code }) {
  if (code === 'de') {
    return (
      <svg className={styles.flag} viewBox="0 0 5 3" aria-hidden="true" focusable="false">
        <rect width="5" height="3" fill="#000" />
        <rect y="1" width="5" height="1" fill="#DD0000" />
        <rect y="2" width="5" height="1" fill="#FFCE00" />
      </svg>
    )
  }
  // English → Union Jack (simplified; the St Patrick counter-change is dropped,
  // which is imperceptible at this size).
  return (
    <svg className={styles.flag} viewBox="0 0 60 30" aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <rect x="25" width="10" height="30" fill="#fff" />
      <rect y="10" width="60" height="10" fill="#fff" />
      <rect x="27" width="6" height="30" fill="#C8102E" />
      <rect y="12" width="60" height="6" fill="#C8102E" />
    </svg>
  )
}

export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div className={`${styles.switch} ${className}`} role="group" aria-label={t('lang.aria')}>
      {LANGS.map((l) => {
        const active = lang === l.code
        return (
          <button
            key={l.code}
            type="button"
            className={`${styles.opt} ${active ? styles.active : ''}`}
            aria-pressed={active}
            aria-label={t('lang.switchTo', { lang: l.label })}
            title={l.label}
            onClick={() => setLang(l.code)}
          >
            <span className={styles.flagWrap}>
              <Flag code={l.code} />
            </span>
            <span className={styles.code}>{l.short}</span>
          </button>
        )
      })}
    </div>
  )
}
