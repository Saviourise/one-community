import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero.jsx'
import WatchPartyCard from '../components/WatchPartyCard.jsx'
import FeaturedVideo from '../components/FeaturedVideo.jsx'
import ImpactCard from '../components/ImpactCard.jsx'
import StatBand from '../components/StatBand.jsx'
import PartnerStrip from '../components/PartnerStrip.jsx'
import BlogRow from '../components/BlogRow.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import Button from '../components/Button.jsx'

import { projects } from '../data/projects.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

export default function Home() {
  useEffect(() => {
    document.title = `${brand.name}, ${brand.tagline}`
  }, [])

  // Homepage preview: the projects flagged featuredHome (Concert, Homies & Omies,
  // Back to School). The TEDx Talk already has its own video section above.
  const preview = projects.filter((p) => p.featuredHome).slice(0, 3)

  return (
    <>
      <Hero />
      <WatchPartyCard />
      <FeaturedVideo />
      <ImpactCard />

      <section className="section container" aria-labelledby="proj-title">
        <div className={pages.previewHead}>
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 id="proj-title">Projects turning moments into belonging</h2>
          </div>
          <Button to="/projects" variant="ghost" arrow>
            See all projects
          </Button>
        </div>
        <ProjectGrid projects={preview} enableSpotlight={false} showStats />
      </section>

      <StatBand />
      <PartnerStrip />
      <BlogRow />
      <ClosingCTA />
    </>
  )
}
