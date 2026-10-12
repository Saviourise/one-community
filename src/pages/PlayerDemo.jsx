import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { brand } from '../data/siteContent.js'

/**
 * DEMO PAGE — not linked in the nav. Delete this file, its route in App.jsx,
 * and /public/demo/* once you've seen the player working and chosen a host.
 */
export default function PlayerDemo() {
  useEffect(() => {
    document.title = `Player demo, ${brand.name}`
  }, [])

  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Component demo"
        title="Video player with subtitle switching"
        body="Press play, then use the “Subtitles” button (top-right) to switch between English and Deutsch, or turn them off. Try to download it: the right-click menu and the download control are blocked."
      />
      <VideoPlayer
        src="/demo/sample.mp4"
        title="One Community Project player demo"
        tracks={[
          { src: '/demo/sample.en.vtt', srclang: 'en', label: 'English', default: true },
          { src: '/demo/sample.de.vtt', srclang: 'de', label: 'Deutsch' },
        ]}
      />
      <p className="lede" style={{ marginTop: '1.5rem', maxWidth: '60ch' }}>
        This is Tier-0 (casual) protection, all a static site can do on its own. For real
        download resistance, point <code>sources</code> at a streaming host’s HLS manifest
        (Cloudflare Stream / Mux / Bunny) with signed URLs — the subtitle UI stays identical.
      </p>
    </section>
  )
}
