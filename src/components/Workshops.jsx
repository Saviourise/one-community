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
        eyebrow="The method"
        title="Music, dance and film"
        body="Different ways to take part, share experiences and start a conversation."
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
          Bring the method to your city
        </Button>
      </div>
    </section>
  )
}
