import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { docTracks } from '../data/docSubtitles.js'
import { brand } from '../data/siteContent.js'
import { useT } from '../i18n/LanguageContext.jsx'
import pages from './pages.module.css'

// Full film, played through our own player: switchable EN/UK subtitles +
// download protection, no third-party branding or click-out.
// The MP4 is too big for the repo (GitHub caps in-repo files at 100MB), so it's
// hosted as a GitHub Release asset (2GB limit) and streamed by URL. Caption
// files are served from the site itself (same origin), so no CORS needed.
const VIDEO_SRC =
  'https://github.com/Saviourise/one-community/releases/download/walzer-doc/walzer-full.mp4'

export default function Documentary() {
  const t = useT()

  useEffect(() => {
    document.title = `${t('documentary.docTitle')}, ${brand.name}`
  }, [t])

  return (
    <>
      <header
        className={pages.pageHeader}
        style={{ backgroundImage: 'url("/assets/walzer-still-gala.jpg")' }}
      >
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">{t('documentary.eyebrow')}</span>
          <h1>Noch einmal Walzer</h1>
          <p className="lede">{t('documentary.lede')}</p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.docStage}>
          <VideoPlayer
            className={pages.docPlayer}
            src={VIDEO_SRC}
            title={t('documentary.playerTitle')}
            tracks={docTracks}
          />
          <Button to="/projects/noch-einmal-walzer" variant="ghost" arrow>
            {t('documentary.back')}
          </Button>
        </div>
      </section>
    </>
  )
}
