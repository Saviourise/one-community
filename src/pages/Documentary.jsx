import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

// Full film on YouTube (unlisted) with switchable EN/UK caption tracks.
const YT_ID = '4uAoj5X3Be4'

export default function Documentary() {
  useEffect(() => {
    document.title = `Documentary, ${brand.name}`
  }, [])

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">Full documentary</span>
          <h1>Noch einmal Walzer</h1>
          <p className="lede">
            The full film: a community production followed from first rehearsal to final bow.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.docStage}>
          <div className={pages.detailVideo}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YT_ID}?rel=0&modestbranding=1&cc_load_policy=1`}
              title="Noch einmal Walzer, full documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className={pages.docNote}>
            Subtitles in English and Ukrainian — use the <strong>CC</strong> button in the player.
          </p>
          <Button to="/projects/noch-einmal-walzer" variant="ghost" arrow>
            Back to the project
          </Button>
        </div>
      </section>
    </>
  )
}
