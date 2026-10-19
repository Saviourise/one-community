import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import Gallery from '../components/Gallery.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { getGallery, getGalleryCredit } from '../data/galleries.js'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import { artworkCss, drive } from '../lib/placeholder.js'
import pages from './pages.module.css'

export default function ProjectDetail() {
  const { getProject, projects, brand } = useContent()
  const t = useT()
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    document.title = project
      ? `${project.title}, ${brand.name}`
      : `${t('projectDetail.notFoundDocTitle')}, ${brand.name}`
  }, [project, brand.name, t])

  if (!project) {
    return (
      <div className={`container ${pages.notFound}`}>
        <h1>{t('projectDetail.notFoundTitle')}</h1>
        <p className="lede">{t('projectDetail.notFoundLede')}</p>
        <Button to="/projects" variant="cta" arrow>
          {t('projectDetail.backToAll')}
        </Button>
      </div>
    )
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)
  const gallery = getGallery(project.slug)
  // Banner = this project's own photo (not a generic one). The big hero image
  // below uses a *different* project photo where one exists, to avoid repetition.
  const bannerFallback = artworkCss({ seed: `${project.slug}-banner`, w: 1200, h: 700 })
  const banner = project.img ? `url("${project.img}"), ${bannerFallback}` : bannerFallback
  const heroMedia = gallery.map(drive).find((u) => u !== project.img)

  return (
    <>
      <header className={pages.pageHeader} style={{ backgroundImage: banner }}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className={pages.crumbs}>
            <Link to="/projects">{t('projectDetail.breadcrumbProjects')}</Link>{' '}
            <span aria-hidden="true">/</span> {project.title}
          </span>
          <span className="badge" style={{ justifySelf: 'start' }}>
            {project.kicker}
          </span>
          <h1>{project.title}</h1>
          <p className="lede">{project.tagline}</p>
        </div>
      </header>

      <section className="section container">
        {heroMedia && (
          <Reveal>
            <div
              className={pages.detailHeroMedia}
              style={{
                backgroundImage: `url("${heroMedia}"), ${artworkCss({ seed: `${project.slug}-hero`, w: 1200, h: 750 })}`,
              }}
              role="img"
              aria-label={t('projectDetail.inAction', { title: project.title })}
            />
          </Reveal>
        )}

        <div className={pages.detailLayout}>
          <Reveal className={pages.detailProse}>
            <p className="lede">{project.short}</p>
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className={pages.detailAside}>
              {project.stats?.length > 0 && (
                <div className={pages.detailStats}>
                  {project.stats.map((s) => (
                    <div key={s.label} className={pages.detailStat}>
                      <b>{s.value}</b>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {project.links?.length > 0 ? (
                <Button to={project.links[0].to} variant="cta" arrow>
                  {project.links[0].label}
                </Button>
              ) : (
                <Button to="/contact" variant="cta" arrow>
                  {t('common.getInvolved')}
                </Button>
              )}
              <Button to="/projects" variant="ghost">
                {t('common.allProjects')}
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      {(project.player || project.video) && (
        <section className="section container">
          {project.player ? (
            <VideoPlayer
              src={project.player.src}
              poster={project.player.poster}
              title={t('projectDetail.videoSuffix', { title: project.title })}
              tracks={project.player.tracks}
            />
          ) : (
            <div className={pages.detailVideo}>
              <iframe
                src={project.video}
                title={t('projectDetail.videoSuffix', { title: project.title })}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {project.fullDoc && (
            <div className={pages.fullDocCta}>
              <Button to={project.fullDoc.to} variant="cta" arrow>
                {project.fullDoc.label}
              </Button>
            </div>
          )}
        </section>
      )}

      {gallery.length > 0 && (
        <section className="section container">
          <SectionHeading
            eyebrow={t('projectDetail.galleryEyebrow')}
            title={t('projectDetail.insideTitle', { title: project.title })}
          />
          <Gallery images={gallery} label={project.title} credit={getGalleryCredit(project.slug)} />
        </section>
      )}

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow={t('projectDetail.keepExploring')}
            title={t('projectDetail.moreFrom')}
          />
          <ProjectGrid projects={related} enableSpotlight={false} />
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
