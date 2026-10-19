import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero.jsx'
import DocumentaryFeature from '../components/DocumentaryFeature.jsx'
import WatchPartyCard from '../components/WatchPartyCard.jsx'
import FeaturedVideo from '../components/FeaturedVideo.jsx'
import ImpactCard from '../components/ImpactCard.jsx'
import StatBand from '../components/StatBand.jsx'
import PartnerStrip from '../components/PartnerStrip.jsx'
import BlogRow from '../components/BlogRow.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import Workshops from '../components/Workshops.jsx'
import Together from '../components/Together.jsx'
import Button from '../components/Button.jsx'

import { useContent, useT } from '../i18n/LanguageContext.jsx'
import pages from './pages.module.css'

export default function Home() {
  const t = useT()
  const { projects, brand } = useContent()

  useEffect(() => {
    document.title = `${brand.name}, ${brand.tagline}`
  }, [brand])

  // Homepage preview: the projects flagged featuredHome (Concert, Homies & Omies,
  // Back to School). The TEDx Talk already has its own video section above.
  const preview = projects.filter((p) => p.featuredHome).slice(0, 3)

  return (
    <>
      <Hero />
      {/* Documentary video sits directly under the hero. */}
      <DocumentaryFeature />
      {/* Young and old together, before the TEDx talk. */}
      <Together />
      {/* TEDx video comes before the watch party section. */}
      <FeaturedVideo />
      <WatchPartyCard />
      <ImpactCard />

      <section className="section container" aria-labelledby="proj-title">
        <div className={pages.previewHead}>
          <div className="section-head">
            <span className="eyebrow">{t('home.whatWeDo')}</span>
            <h2 id="proj-title">{t('home.workStrand')}</h2>
          </div>
          <Button to="/projects" variant="ghost" arrow>
            {t('home.seeAllProjects')}
          </Button>
        </div>
        <ProjectGrid projects={preview} enableSpotlight={false} showStats />
      </section>

      <Workshops />

      <StatBand />
      <PartnerStrip />
      <BlogRow />
      <ClosingCTA />
    </>
  )
}
