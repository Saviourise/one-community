import Reveal from './Reveal.jsx'
import { useT } from '../i18n/LanguageContext.jsx'
import styles from './sections.module.css'

/*
 * Photo pair between the documentary and the TEDx talk: young and old
 * together, without the founder in frame. Left: a selfie still from Noch einmal
 * Walzer. Right: the Gala photo booth (25 June 2022).
 */
export default function Together() {
  const t = useT()
  return (
    <section className="section container" aria-labelledby="together-title">
      <div className={styles.together}>
        <Reveal className={styles.togetherSelfie}>
          <img
            src="/assets/together-selfie.jpg"
            alt={t('together.img1Alt')}
            loading="lazy"
          />
          <p className={styles.togetherCaption}>{t('together.caption1')}</p>
        </Reveal>
        <Reveal className={styles.togetherSide} delay={0.1}>
          <img
            src="/assets/together-photobooth.jpg"
            alt={t('together.img2Alt')}
            loading="lazy"
          />
          <p className={styles.togetherCaption}>{t('together.caption2')}</p>
        </Reveal>
        <div className={styles.togetherText}>
          <span className="eyebrow">{t('together.eyebrow')}</span>
          <h2 id="together-title">{t('together.title')}</h2>
          <p>{t('together.body')}</p>
        </div>
      </div>
    </section>
  )
}
