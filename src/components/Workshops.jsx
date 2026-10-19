import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Button from './Button.jsx'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import styles from './sections.module.css'

/**
 * Community workshops grid, shown on the homepage after the projects preview.
 */
export default function Workshops() {
  const { workshops } = useContent()
  const t = useT()
  return (
    <section className="section container" aria-labelledby="ws-title">
      <SectionHeading
        id="ws-title"
        eyebrow={t('workshops.eyebrow')}
        title={t('workshops.title')}
        body={t('workshops.body')}
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
          {t('workshops.cta')}
        </Button>
      </div>
    </section>
  )
}
