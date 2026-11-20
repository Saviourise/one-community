import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/LanguageContext.jsx'

/*
 * Privacy-friendly video embed. Nothing from YouTube or Google Drive loads
 * until the visitor clicks "Load video". YouTube uses youtube-nocookie.com.
 * After loading, a visible "Disable video" control removes the iframe again
 * (withdrawal for this video). The choice resets when the source changes.
 * Drop-in replacement for a bare <iframe> inside the existing
 * absolutely-positioned video containers.
 */
function providerOf(src = '') {
  if (src.includes('youtube')) return 'YouTube'
  if (src.includes('drive.google')) return 'Google Drive'
  return 'external'
}

function toNoCookie(src = '') {
  return src.replace('https://www.youtube.com/embed/', 'https://www.youtube-nocookie.com/embed/')
}

function withAutoplay(src) {
  if (!src.includes('youtube')) return src
  return src + (src.includes('?') ? '&' : '?') + 'autoplay=1'
}

const fill = { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }
const pill = {
  font: 'inherit',
  fontWeight: 600,
  fontSize: '0.85rem',
  border: 0,
  borderRadius: 999,
  padding: '0.45rem 0.9rem',
  cursor: 'pointer',
}

export default function ConsentEmbed({ src, title }) {
  const t = useT()
  const [on, setOn] = useState(false)
  const provider = providerOf(src)

  // A different video needs a fresh decision.
  useEffect(() => {
    setOn(false)
  }, [src])

  if (on) {
    return (
      <>
        <iframe
          src={withAutoplay(toNoCookie(src))}
          title={title}
          style={fill}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          type="button"
          onClick={() => setOn(false)}
          style={{
            ...pill,
            position: 'absolute',
            top: '3.6rem',
            right: '0.6rem',
            background: 'rgba(26, 25, 15, 0.8)',
            color: '#fff',
          }}
        >
          {t('embed.disable')}
        </button>
      </>
    )
  }

  return (
    <div
      style={{
        ...fill,
        display: 'grid',
        placeItems: 'center',
        alignContent: 'center',
        gap: '0.7rem',
        padding: '1rem',
        color: '#fff',
        background: 'rgba(26, 25, 15, 0.6)',
        textAlign: 'center',
      }}
    >
      <button
        type="button"
        onClick={() => setOn(true)}
        aria-label={t('embed.loadAria', { title, provider })}
        style={{ ...pill, display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--cta, #e6e84c)', color: 'var(--primary-deep, #2f2e1d)', fontSize: '1rem', padding: '0.7rem 1.2rem' }}
      >
        <span aria-hidden="true">▶</span>
        {t('embed.load')}
      </button>
      <p style={{ fontSize: '0.8rem', maxWidth: '52ch', margin: 0, opacity: 0.92 }}>
        {t('embed.note', { provider })}{' '}
        <Link to="/datenschutz" style={{ color: '#fff', textDecoration: 'underline' }}>
          {t('embed.policyLink')}
        </Link>
      </p>
    </div>
  )
}
