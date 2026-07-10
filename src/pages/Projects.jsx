import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { projects } from '../data/projects.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

export default function Projects() {
  useEffect(() => {
    document.title = `Projects, ${brand.name}`
  }, [])

  const spotlight = projects.filter((p) => p.spotlight)
  const rest = projects.filter((p) => !p.spotlight)

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">Our work</span>
          <h1>Every project is a way to come closer.</h1>
          <p className="lede">
            One place, all our initiatives. From a movement that reached the TED stage to a
            documentary you can screen on your street, here’s what belonging looks like in
            practice.
          </p>
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
          <SectionHeading eyebrow="More initiatives" title="Ongoing & seasonal projects" />
          <ProjectGrid projects={rest} enableSpotlight={false} showStats />
        </div>
      </section>

      {/* Events deliberately deprioritised, kept off the nav, noted lightly here. */}
      <section className="section container">
        <Reveal>
          <p className="lede" style={{ maxWidth: '58ch' }}>
            We run occasional events too, screenings, community tables and watch parties. They’re
            moments within the movement rather than the headline.{' '}
            <a className="link-arrow" href="/contact">
              Ask what’s coming up
            </a>
          </p>
        </Reveal>
      </section>

      <ClosingCTA />
    </>
  )
}
