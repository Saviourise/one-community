import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { useContent } from '../i18n/LanguageContext.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import styles from './sections.module.css'

/**
 * The single "merged" impact card with dual background colours
 * (deep green + coral tint), per the planning notes: one impact metric,
 * a tagline, and a single button. Content comes from siteContent.impactCard.
 */
export default function ImpactCard() {
  const { impactCard } = useContent()
  return (
    <section className="section container" aria-labelledby="ic-title">
      <Reveal>
        <div className={styles.ic}>
          <div
            className={styles.icLeft}
            style={{ backgroundImage: driveCssFallback('1axnHItmS9Hto0jPTsQewFyhWLoZsZvdW', 'impact', 1000) }}
          >
            <span className={styles.icYears}>{impactCard.years}</span>
            <span className={styles.icYearsLabel}>{impactCard.yearsLabel}</span>
            <p className={styles.icKicker}>{impactCard.kicker}</p>
          </div>
          <div className={styles.icRight}>
            <span className="eyebrow">{impactCard.eyebrow}</span>
            <p id="ic-title" className={styles.icTagline}>
              “{impactCard.tagline}”
            </p>
            <p>{impactCard.body}</p>
            <Button to={impactCard.cta.to} variant="cta" arrow>
              {impactCard.cta.label}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
