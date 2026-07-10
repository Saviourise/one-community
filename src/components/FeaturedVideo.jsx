import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { getProject } from '../data/projects.js'
import { artworkCss } from '../lib/placeholder.js'
import styles from './sections.module.css'

const PlayIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
)

/**
 * Prominent TEDx Talk feature (kept out of the hero, per notes).
 * If the project has a `video` embed URL it plays inline; otherwise the poster
 * links through to the project detail page. Deliberately a single action.
 */
export default function FeaturedVideo() {
  const project = getProject('tedx-talk')
  if (!project) return null
  const to = `/projects/${project.slug}`
  const fallback = artworkCss({ seed: 'tedx', w: 1200, h: 750 })
  const poster = project.img ? `url("${project.img}"), ${fallback}` : fallback

  return (
    <section className="section container" aria-labelledby="fv-title">
      <div className={styles.fvGrid}>
        <Reveal>
          {project.video ? (
            <div className={styles.fvMedia} style={{ backgroundImage: poster }}>
              <iframe
                src={project.video}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <Link
              to={to}
              className={styles.fvMedia}
              style={{ display: 'block', backgroundImage: poster }}
              aria-label={`${project.videoLabel || 'Watch'}, ${project.title}`}
            >
              <span className={styles.fvPlay}>
                <PlayIcon />
              </span>
              <span className={styles.fvPosterOverlay}>
                <span className={styles.fvCaption}>{project.videoLabel || 'Watch the film'}</span>
              </span>
            </Link>
          )}
        </Reveal>

        <Reveal className={styles.fvBody} delay={0.1}>
          <span className="badge">{project.kicker}</span>
          <h2 id="fv-title">Our story, on the TEDx stage</h2>
          <p className="lede">
            {project.short} An idea worth spreading, and a way of being with one another.
          </p>
          <Button to={to} variant="dark" arrow>
            Learn more about the talk
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
