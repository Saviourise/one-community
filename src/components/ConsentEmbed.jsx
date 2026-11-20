import { useState } from 'react'
import { useT } from '../i18n/LanguageContext.jsx'

/*
 * Privacy-friendly video embed. Nothing from YouTube or Google Drive loads
 * until the visitor clicks. YouTube URLs are switched to the
 * youtube-nocookie.com domain. Drop-in replacement for a bare <iframe>
 * inside the existing absolutely-positioned video containers.
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

export default function ConsentEmbed({ src, title }) {
  const t = useT()
  const [on, setOn] = useState(false)
  const provider = providerOf(src)

  if (on) {
    return (
      <iframe
        src={withAutoplay(toNoCookie(src))}
        title={title}
        style={fill}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setOn(true)}
      aria-label={t('embed.loadAria', { title, provider })}
      style={{
        ...fill,
        display: 'grid',
        placeItems: 'center',
        alignContent: 'center',
        gap: '0.6rem',
        padding: '1rem',
        cursor: 'pointer',
        color: '#fff',
        background: 'rgba(26, 25, 15, 0.55)',
        font: 'inherit',
        textAlign: 'center',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--cta, #e6e84c)',
          color: 'var(--primary-deep, #2f2e1d)',
          fontSize: 26,
        }}
      >
        ▶
      </span>
      <span style={{ fontWeight: 600 }}>{t('embed.load')}</span>
      <span style={{ fontSize: '0.8rem', maxWidth: '34ch', opacity: 0.9 }}>
        {t('embed.note', { provider })}
      </span>
    </button>
  )
}
