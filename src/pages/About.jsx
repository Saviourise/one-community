import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import pages from './pages.module.css'

export default function About() {
  const { brand, about } = useContent()
  const t = useT()

  useEffect(() => {
    document.title = `${t('about.docTitle')}, ${brand.name}`
  }, [t, brand.name])

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">{t('about.eyebrowStory')}</span>
          <h1>{t('about.title')}</h1>
          <p className="lede">{t('about.lede')}</p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.aboutIntro}>
          <Reveal>
            <div>
              <p className="lede">{t('about.intro1')}</p>
              <p>{t('about.intro2')}</p>
              <p>{t('about.intro3')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div
              className={pages.aboutImg}
              style={{ backgroundImage: driveCssFallback('1ix_kN_eIHUDfLBy0--6K_xzW-hdYO-1i', 'about-intro', 1000) }}
              role="img"
              aria-label={t('about.introAlt')}
            />
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <div
            className={pages.missionCard}
            style={{ backgroundImage: driveCssFallback('15J-a28iKPTp_nQ3oegy0UypJXJbUxoas', 'mission', 1200) }}
          >
            <span className="eyebrow">{t('about.premiseEyebrow')}</span>
            <p className={pages.missionQuote}>{t('about.premiseQuote')}</p>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading eyebrow={t('about.howEyebrow')} title={t('about.howTitle')} center />
        <div className={pages.values}>
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className={pages.valueCard}>
                <span className={pages.valueNum}>0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow={t('about.recognitionEyebrow')}
          title={t('about.recognitionTitle')}
          body={t('about.recognitionBody')}
        />
        <div className={pages.awards}>
          {about.awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className={pages.awardCard}>
                <b>{a.title}</b>
                <span>{a.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
