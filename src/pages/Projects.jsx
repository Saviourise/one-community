import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import pages from './pages.module.css'

export default function Projects() {
  const t = useT()
  const { projects, brand } = useContent()

  useEffect(() => {
    document.title = `${t('projectsPage.docTitle')}, ${brand.name}`
  }, [t, brand])

  const spotlight = projects.filter((p) => p.spotlight)
  const rest = projects.filter((p) => !p.spotlight)

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">{t('projectsPage.eyebrow')}</span>
          <h1>{t('projectsPage.title')}</h1>
          <p className="lede">{t('projectsPage.lede')}</p>
        </div>
      </header>

      {/* Featured / spotlight projects, the documentary + the movement lead the page */}
      <section className="section container">
        <div style={{ display: 'grid', gap: 'clamp(1.4rem, 1rem + 2vw, 2.2rem)' }}>
          {spotlight.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} spotlight showStats />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Everything else */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow={t('projectsPage.moreEyebrow')} title={t('projectsPage.moreTitle')} />
          <ProjectGrid projects={rest} enableSpotlight={false} showStats />
        </div>
      </section>

      {/* Events deliberately deprioritised, kept off the nav, noted lightly here. */}
      <section className="section container">
        <Reveal>
          <p className="lede" style={{ maxWidth: '58ch' }}>
            {t('projectsPage.moreLede')}{' '}
            <a className="link-arrow" href="/contact">
              {t('projectsPage.askUpcoming')}
            </a>
          </p>
        </Reveal>
      </section>

      <ClosingCTA />
    </>
  )
}
