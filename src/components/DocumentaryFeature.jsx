import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import styles from './sections.module.css'

/**
 * Single documentary video section, shown just after the hero.
 * Plays the "Noch einmal Walzer" trailer inline; renders nothing if the project
 * has no video. Copy is pulled from the project so it stays in sync.
 */
export default function DocumentaryFeature() {
  const { getProject } = useContent()
  const t = useT()
  const project = getProject('noch-einmal-walzer')
  if (!project?.video) return null

  return (
    <section className="section container" aria-labelledby="doc-title">
      <SectionHeading
        id="doc-title"
        eyebrow={t('documentaryFeature.eyebrow')}
        title={project.title}
        body={project.short}
        center
      />
      <Reveal>
        {project.player ? (
          <VideoPlayer
            src={project.player.src}
            poster={project.player.poster}
            title={t('documentaryFeature.trailerSuffix', { title: project.title })}
            tracks={project.player.tracks}
          />
        ) : (
          <div className={styles.docVideo}>
            <iframe
              src={project.video}
              title={t('documentaryFeature.trailerSuffix', { title: project.title })}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Reveal>
    </section>
  )
}
