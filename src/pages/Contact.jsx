import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import pages from './pages.module.css'

const empty = { name: '', email: '', message: '', watchParty: false }

export default function Contact() {
  const { brand, footer } = useContent()
  const t = useT()
  const [params] = useSearchParams()
  const [form, setForm] = useState({ ...empty, watchParty: params.get('watch-party') === '1' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = `${t('contact.docTitle')}, ${brand.name}`
  }, [t, brand.name])

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.errName')
    if (!form.email.trim()) next.email = t('contact.errEmail')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('contact.errEmailBad')
    if (!form.message.trim()) next.message = t('contact.errMsg')
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

  const firstName = form.name.trim().split(' ')[0]

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h1>{t('contact.title')}</h1>
          <p className="lede">{t('contact.lede')}</p>
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
                <h2>
                  {firstName ? t('contact.thankYou', { name: firstName }) : t('contact.thankYouNoName')}
                </h2>
                <p className="lede">
                  {t('contact.sentLede')}
                  {form.watchParty ? t('contact.sentWatch') : ''}
                  {t('contact.sentEnd')}
                </p>
                <div style={{ marginTop: '1.4rem' }}>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setForm(empty)
                      setSent(false)
                    }}
                  >
                    {t('contact.sendAnother')}
                  </Button>
                </div>
              </div>
            ) : (
              <form className={pages.form} onSubmit={onSubmit} noValidate>
                <div className={pages.formRow}>
                  <div className={`field ${errors.name ? 'field--error' : ''}`}>
                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                    <input id="name" type="text" value={form.name} onChange={update('name')} placeholder={t('contact.namePlaceholder')} />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`field ${errors.email ? 'field--error' : ''}`}>
                    <label htmlFor="email">{t('contact.emailLabel')}</label>
                    <input id="email" type="email" value={form.email} onChange={update('email')} placeholder={t('contact.emailPlaceholder')} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`field ${errors.message ? 'field--error' : ''}`}>
                  <label htmlFor="message">{t('contact.msgLabel')}</label>
                  <textarea id="message" value={form.message} onChange={update('message')} placeholder={t('contact.msgPlaceholder')} />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <div className={pages.checkline}>
                  <input id="watchParty" type="checkbox" checked={form.watchParty} onChange={update('watchParty')} />
                  <label htmlFor="watchParty">{t('contact.watchCheckbox')}</label>
                </div>

                <div>
                  <Button type="submit" variant="cta" arrow>
                    {t('contact.send')}
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
                aria-label={t('contact.asideAria')}
              />
              <div className={pages.infoCard}>
                <h3>{t('contact.emailUs')}</h3>
                <p>
                  <a href={`mailto:${footer.email}`}>{footer.email}</a>
                </p>
              </div>
              <div className={pages.infoCard}>
                <h3>{t('contact.hostTitle')}</h3>
                <p>{t('contact.hostBody')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
