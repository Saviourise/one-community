import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found, ${brand.name}`
  }, [])

  return (
    <div className={`container ${pages.notFound}`}>
      <span className="eyebrow" style={{ justifySelf: 'center' }}>
        Lost the thread
      </span>
      <span className={pages.big}>404</span>
      <p className="lede">
        This page wandered off, but there’s plenty of belonging to find elsewhere.
      </p>
      <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button to="/" variant="cta" arrow>
          Back home
        </Button>
        <Button to="/projects" variant="ghost">
          See our projects
        </Button>
      </div>
    </div>
  )
}
