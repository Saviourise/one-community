import Reveal from './Reveal.jsx'
import styles from './sections.module.css'

/*
 * Photo pair between the documentary and the TEDx talk: young and old
 * together, without the founder in frame. Left: a selfie still from Noch einmal
 * Walzer. Right: the Gala photo booth (25 June 2022).
 */
export default function Together() {
  return (
    <section className="section container" aria-labelledby="together-title">
      <div className={styles.together}>
        <Reveal className={styles.togetherSelfie}>
          <img
            src="/assets/together-selfie.jpg"
            alt="A young woman in a hijab taking a selfie with a smiling care-home resident and a young man, from the film Noch einmal Walzer"
            loading="lazy"
          />
          <p className={styles.togetherCaption}>From the documentary Noch einmal Walzer</p>
        </Reveal>
        <Reveal className={styles.togetherSide} delay={0.1}>
          <img
            src="/assets/together-photobooth.jpg"
            alt="A young woman in a bright wig and a care-home resident in a carnival mask laughing at the Gala photo booth"
            loading="lazy"
          />
          <p className={styles.togetherCaption}>Photo booth at the One Community Gala, 25 June 2022</p>
        </Reveal>
        <div className={styles.togetherText}>
          <span className="eyebrow">Young and old</span>
          <h2 id="together-title">Young and old, side by side.</h2>
          <p>
            Both moments come from 2022, when five months of waltz classes brought together
            refugees, migrants, international students and residents of three care homes in
            Dessau-Roßlau. The classes ended in the One Community Gala, with performers aged 9
            to 96.
          </p>
        </div>
      </div>
    </section>
  )
}
