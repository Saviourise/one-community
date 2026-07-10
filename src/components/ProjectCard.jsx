import { Link } from 'react-router-dom'
import { artwork, imgFallback } from '../lib/placeholder.js'
import styles from './ProjectCard.module.css'

const ArrowSm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 12h15m0 0-6-6m6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Whole-card link (no button clutter, per notes, cards lead to detail pages
 * "via other means"). Pass `spotlight` for the large side-by-side treatment.
 */
export default function ProjectCard({ project, spotlight = false, showStats = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`${styles.card} ${spotlight ? styles['card--spotlight'] : ''}`}
    >
      <div className={styles.media}>
        <img
          className={styles.mediaImg}
          src={
            project.img ||
            artwork({ seed: project.slug, w: spotlight ? 900 : 640, h: spotlight ? 760 : 480 })
          }
          alt={project.title}
          loading="lazy"
          onError={imgFallback(project.slug, spotlight ? 900 : 640, spotlight ? 760 : 480)}
        />
        <span className={styles.kicker}>{project.kicker}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.short}</p>

        {showStats && project.stats?.length > 0 && (
          <div className={styles.miniStats}>
            {project.stats.slice(0, 2).map((s) => (
              <span key={s.label} className={styles.miniStat}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </span>
            ))}
          </div>
        )}

        <div className={styles.footRow}>
          <span className={styles.explore}>
            Explore project <ArrowSm />
          </span>
        </div>
      </div>
    </Link>
  )
}
