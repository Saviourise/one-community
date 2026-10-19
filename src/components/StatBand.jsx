import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import SectionHeading from './SectionHeading.jsx'
import { useContent, useLang } from '../i18n/LanguageContext.jsx'
import styles from './sections.module.css'

// Count up from 0 → target once the band scrolls into view. The source values
// stay English-formatted ("1,644"); only the displayed number is localised, so
// German renders "1.644".
function CountUp({ value, suffix = '', locale = 'en-US' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const [display, setDisplay] = useState('0')
  const target = Number(String(value).replace(/,/g, '')) || 0

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(target * eased).toLocaleString(locale))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, locale])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function StatBand() {
  const { impact } = useContent()
  const [lang] = useLang()
  const locale = lang === 'de' ? 'de-DE' : 'en-US'
  return (
    <section className="section container" aria-labelledby="impact-title">
      <SectionHeading
        eyebrow={impact.eyebrow}
        title={impact.title}
        body={impact.body}
        id="impact-title"
      />
      <div className={styles.sbGrid}>
        {impact.stats.map((s) => (
          <div key={s.label} className={styles.sbItem}>
            <div className={styles.sbValue}>
              <CountUp value={s.value} suffix={s.suffix} locale={locale} />
            </div>
            <p className={styles.sbLabel}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
