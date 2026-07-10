import Reveal from './Reveal.jsx'
import { partners } from '../data/partners.js'
import styles from './sections.module.css'

// Renders a wordmark placeholder per partner. TEDx gets its signature styling.
function PartnerMark({ name }) {
  if (name === 'TEDx') {
    return (
      <span className={`${styles.ptName} ${styles.ptTed}`}>
        TED<sup>x</sup>
      </span>
    )
  }
  return <span className={styles.ptName}>{name}</span>
}

export default function PartnerStrip() {
  return (
    <section className={`section ${styles.ptSection}`} aria-labelledby="partners-title">
      <div className="container">
        <div className={styles.ptHead}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {partners.eyebrow}
          </span>
          <span id="partners-title" className="visually-hidden">
            {partners.title}
          </span>
        </div>
        <Reveal className={styles.ptTrack}>
          {partners.items.map((p) => (
            <div key={p.name} className={styles.ptItem}>
              <PartnerMark name={p.name} />
              <span className={styles.ptNote}>{p.note}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
