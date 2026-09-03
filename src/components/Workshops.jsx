import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Button from './Button.jsx'
import { workshops } from '../data/workshops.js'
import styles from './sections.module.css'

/**
 * Community workshops grid, shown on the homepage after the projects preview.
 */
export default function Workshops() {
  return (
    <section className="section container" aria-labelledby="ws-title">
      <SectionHeading
        id="ws-title"
        eyebrow="Get hands-on"
        title="Workshops that turn strangers into neighbours"
        body="Small, recurring gatherings anyone can join, no experience needed, just an open evening and an open mind."
      />
      <div className={styles.wsGrid}>
        {workshops.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className={styles.wsCard}>
              <span className={styles.wsTag}>{w.tag}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className={styles.wsFoot}>
        <Button to="/contact" variant="cta" arrow>
          Join a workshop
        </Button>
      </div>
    </section>
  )
}
