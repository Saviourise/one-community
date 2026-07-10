import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { watchParty } from '../data/watchParty.js'
import { driveCssFallback } from '../lib/placeholder.js'
import styles from './sections.module.css'

/**
 * Swappable / seasonal "Host a Watch Party" card.
 * Returns null when watchParty.active is false (hidden without a redesign).
 */
export default function WatchPartyCard() {
  if (!watchParty.active) return null

  return (
    <div className={`container ${styles.wpWrap}`}>
      <Reveal>
        <div className={styles.wpCard}>
          <div className={styles.wpBody}>
            <span className="eyebrow">{watchParty.eyebrow}</span>
            <h2>{watchParty.title}</h2>
            <p className="lede">{watchParty.body}</p>
            <div className={styles.wpCities}>
              {watchParty.cities.map((c) => (
                <span key={c} className={styles.wpCity}>
                  {c}
                </span>
              ))}
            </div>
            <Button to={watchParty.cta.to} variant="cta" arrow>
              {watchParty.cta.label}
            </Button>
          </div>
          <div
            className={styles.wpMedia}
            style={{ backgroundImage: driveCssFallback('1ioSFbHpSx8_qcrR6tL7XELYRU0vo1T_J', 'watchparty', 1000) }}
            role="img"
            aria-label="Neighbours gathered together at a community event"
          />
        </div>
      </Reveal>
    </div>
  )
}
