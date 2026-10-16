import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { docTracks } from '../data/docSubtitles.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

// Full film, played through our own player: switchable EN/UK subtitles +
// download protection, no third-party branding or click-out.
// The MP4 is too big for the repo (GitHub caps in-repo files at 100MB), so it's
// hosted as a GitHub Release asset (2GB limit) and streamed by URL. Caption
// files are served from the site itself (same origin), so no CORS needed.
const VIDEO_SRC =
  'https://github.com/Saviourise/one-community/releases/download/walzer-doc/walzer-full.mp4'

export default function Documentary() {
  useEffect(() => {
    document.title = `Documentary, ${brand.name}`
  }, [])

  return (
    <>
      <header
        className={pages.pageHeader}
        style={{ backgroundImage: 'url("/assets/walzer-still-gala.jpg")' }}
      >
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
          <VideoPlayer
            className={pages.docPlayer}
            src={VIDEO_SRC}
            title="Noch einmal Walzer, full documentary"
            tracks={docTracks}
          />
          <Button to="/projects/noch-einmal-walzer" variant="ghost" arrow>
            Back to the project
          </Button>
        </div>
      </section>
    </>
  )
}
