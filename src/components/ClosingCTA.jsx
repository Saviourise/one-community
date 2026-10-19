import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { useContent } from '../i18n/LanguageContext.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import styles from './sections.module.css'

export default function ClosingCTA() {
  const { closingCta } = useContent()
  return (
    <section className="section container" aria-labelledby="cc-title">
      <Reveal>
        <div
          className={styles.cc}
          style={{ backgroundImage: driveCssFallback('1S-hF-LW8oMhtXeK4xZO5fcMrp9NIQg-x', 'closing', 1200) }}
        >
          <div className={styles.ccInner}>
            <span className="eyebrow">{closingCta.eyebrow}</span>
            <h2 id="cc-title">{closingCta.title}</h2>
            <p>{closingCta.body}</p>
            <div className={styles.ccActions}>
              <Button to={closingCta.primary.to} variant="cta" arrow>
                {closingCta.primary.label}
              </Button>
              <Button to={closingCta.secondary.to} variant="on-dark">
                {closingCta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
