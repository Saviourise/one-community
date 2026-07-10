import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { brand, footer } from '../data/siteContent.js'
import { driveCssFallback } from '../lib/placeholder.js'
import pages from './pages.module.css'

const empty = { name: '', email: '', message: '', watchParty: false }

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({ ...empty, watchParty: params.get('watch-party') === '1' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = `Contact, ${brand.name}`
  }, [])

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'We need an email to reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email looks off.'
    if (!form.message.trim()) next.message = 'A short message helps us help you.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // Prototype only, nothing is transmitted. Wire a form service/endpoint here later.
      setSent(true)
    }
  }

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">Say hello</span>
          <h1>Let’s start a small encounter.</h1>
          <p className="lede">
            Host a watch party, bring a project to your neighbourhood, or just introduce yourself,            every message is read by a real person.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.contactGrid}>
          <Reveal>
            {sent ? (
              <div className={pages.success} role="status" aria-live="polite">
                <div className={pages.successMark} aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m5 13 4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2>Thank you, {form.name.split(' ')[0] || 'friend'}!</h2>
                <p className="lede">
                  Your message is on its way{form.watchParty ? ', and we’re excited you want to host a watch party' : ''}
                  . We’ll be in touch soon.
                </p>
                <div style={{ marginTop: '1.4rem' }}>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setForm(empty)
                      setSent(false)
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              </div>
            ) : (
              <form className={pages.form} onSubmit={onSubmit} noValidate>
                <div className={pages.formRow}>
                  <div className={`field ${errors.name ? 'field--error' : ''}`}>
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" value={form.name} onChange={update('name')} placeholder="Jordan Rivera" />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`field ${errors.email ? 'field--error' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`field ${errors.message ? 'field--error' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" value={form.message} onChange={update('message')} placeholder="Tell us what you have in mind…" />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <div className={pages.checkline}>
                  <input id="watchParty" type="checkbox" checked={form.watchParty} onChange={update('watchParty')} />
                  <label htmlFor="watchParty">I’d like to host a watch party in my city</label>
                </div>

                <div>
                  <Button type="submit" variant="cta" arrow>
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className={pages.contactAside}>
              <div
                className={pages.asideImg}
                style={{ backgroundImage: driveCssFallback('1FK6gd5l3bVMKOECFpYOSdWNbmnm7UoLv', 'contact', 900) }}
                role="img"
                aria-label="Community members greeting each other"
              />
              <div className={pages.infoCard}>
                <h3>Email us</h3>
                <p>
                  <a href={`mailto:${footer.email}`}>{footer.email}</a>
                </p>
              </div>
              <div className={pages.infoCard}>
                <h3>Host a watch party</h3>
                <p>
                  Screenings run worldwide, from Lagos to Cape Town to Sydney. Tick the box and
                  we’ll send you a host kit.
                </p>
              </div>
              <div className={pages.infoCard}>
                <h3>Response time</h3>
                <p>We usually reply within two working days. Real people, real replies.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
