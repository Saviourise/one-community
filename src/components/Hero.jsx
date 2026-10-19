import { motion } from 'motion/react'
import Button from './Button.jsx'
import { useContent } from '../i18n/LanguageContext.jsx'
import styles from './sections.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { hero } = useContent()
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <motion.div className={styles.heroContent} variants={container} initial="hidden" animate="show">
        <motion.span className={`eyebrow ${styles.heroEyebrow}`} variants={item}>
          {hero.eyebrow}
        </motion.span>
        <motion.h1 id="hero-title" className={styles.heroTitle} variants={item}>
          {hero.title.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </motion.h1>
        <motion.p className={styles.heroBody} variants={item}>
          {hero.body}
        </motion.p>
        <motion.div className={styles.heroActions} variants={item}>
          <Button to={hero.primary.to} variant="cta" arrow>
            {hero.primary.label}
          </Button>
          <Button to={hero.secondary.to} variant="on-dark">
            {hero.secondary.label}
          </Button>
        </motion.div>
      </motion.div>

      {/* Photo sits beside the text, never under it, so no face is covered. */}
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url("${hero.image.src}")`, backgroundPosition: hero.image.position }}
        role="img"
        aria-label={hero.image.alt}
      />
    </section>
  )
}
