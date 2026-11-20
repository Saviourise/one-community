import { useEffect } from 'react'
import { useContent, useT } from '../i18n/LanguageContext.jsx'

/*
 * Impressum and privacy policy. Content lives in src/data/legal.js (English)
 * and the `legal` block of src/i18n/de.js (German, authoritative), like every
 * other page. This component only renders it.
 */

const box = { maxWidth: '68ch', display: 'grid', gap: '1rem', paddingBlock: '3rem 4rem' }
const band = { background: 'var(--primary-deep, #2f2e1d)', color: '#fff', paddingBlock: '8rem 3rem' }
const h2 = { fontSize: '1.25rem', marginTop: '1.25rem' }

function Lines({ text }) {
  const parts = text.split('\n')
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i < parts.length - 1 ? <br /> : null}
    </span>
  ))
}

function LegalPage({ page, docTitle }) {
  const { brand, legal } = useContent()
  const data = legal[page]

  useEffect(() => {
    document.title = `${docTitle}, ${brand.name}`
  }, [docTitle, brand])

  return (
    <div>
      <div style={band}>
        <div className="container" style={{ display: 'grid', gap: '0.75rem' }}>
          {legal.note ? <p style={{ opacity: 0.85, margin: 0 }}>{legal.note}</p> : null}
          <h1 style={{ color: '#fff', margin: 0 }}>{data.title}</h1>
        </div>
      </div>
      <div className="container">
        <div style={box}>
          {data.intro ? <p>{data.intro}</p> : null}
          {data.sections.map((section) => (
            <section key={section.heading} style={{ display: 'grid', gap: '0.75rem' }}>
              <h2 style={h2}>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>
                  <Lines text={p} />
                </p>
              ))}
            </section>
          ))}
          {data.updated ? <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{data.updated}</p> : null}
        </div>
      </div>
    </div>
  )
}

export function Impressum() {
  const t = useT()
  return <LegalPage page="impressum" docTitle={t('legal.impressumDocTitle')} />
}

export function Datenschutz() {
  const t = useT()
  return <LegalPage page="privacy" docTitle={t('legal.privacyDocTitle')} />
}
