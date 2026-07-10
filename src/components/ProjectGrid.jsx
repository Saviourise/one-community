import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import styles from './ProjectCard.module.css'

/**
 * Presentational grid of project cards with a staggered reveal.
 * - `two`             → 2-column layout
 * - `showStats`       → surface mini impact numbers on each card
 * - `enableSpotlight` → let projects flagged `spotlight` span the full row
 */
export default function ProjectGrid({
  projects,
  two = false,
  showStats = false,
  enableSpotlight = true,
}) {
  return (
    <div className={`${styles.grid} ${two ? styles['grid--two'] : ''}`}>
      {projects.map((p, i) => {
        const spotlight = enableSpotlight && p.spotlight && !two
        return (
          <Reveal
            key={p.slug}
            delay={(i % 3) * 0.08}
            className={spotlight ? styles.spanFull : undefined}
          >
            <ProjectCard project={p} spotlight={spotlight} showStats={showStats} />
          </Reveal>
        )
      })}
    </div>
  )
}
