import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

const values = [
  {
    title: 'People before programmes',
    body: 'We start with the person in front of us. Structures exist to serve encounters, never the other way around.',
  },
  {
    title: 'Small is the strategy',
    body: 'We don’t wait for grand gestures. A shared meal, a first hello, a door held open, small is where belonging is built.',
  },
  {
    title: 'Everyone belongs',
    body: 'No age, postcode or background is a prerequisite. The circle is only ever drawn to include one more.',
  },
]

const awards = [
  { title: 'Integrationspreis', note: 'Sachsen-Anhalt, 2019' },
  { title: 'Aktiv Preis', note: 'Bundeszentrale für politische Bildung, 2023' },
  { title: 'TEDx', note: 'Featured talk' },
  { title: 'Since 2018', note: 'Bringing neighbours together' },
]

export default function About() {
  useEffect(() => {
    document.title = `About, ${brand.name}`
  }, [])

  return (
    <>
      <header className={pages.pageHeader}>
        <div className={`container ${pages.pageHeaderInner}`}>
          <span className="eyebrow">Our story</span>
          <h1>Belonging isn’t found. It’s built, together.</h1>
          <p className="lede">
            One Community Project began with a hunch: that the distance between neighbours is
            smaller than it feels, and that closing it changes everything.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.aboutIntro}>
          <Reveal>
            <div>
              <p className="lede">
                We are a community of people who believe that connection is the most renewable
                resource we have. Over the years we’ve turned ordinary moments into
                lasting relationships, across streets, generations and borders.
              </p>
              <p>
                What started as a handful of small encounters has grown into a movement of shared
                tables, mentorships, screenings and welcomes. We measure success not in events run,
                but in people who now have someone to call.
              </p>
              <p>
                We’re intentionally broad. Belonging is for everyone, the new arrival and the
                lifelong local, the student and the retiree, the shy and the sure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div
              className={pages.aboutImg}
              style={{ backgroundImage: driveCssFallback('1ix_kN_eIHUDfLBy0--6K_xzW-hdYO-1i', 'about-intro', 1000) }}
              role="img"
              aria-label="Community members of different ages together"
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
            <span className="eyebrow">Our mission</span>
            <p className={pages.missionQuote}>
              To build one stronger community with a sense of belonging, one small encounter at a
              time.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="What we believe" title="The values behind every encounter" center />
        <div className={pages.values}>
          {values.map((v, i) => (
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
          eyebrow="Recognitions"
          title="Trusted, and glad to prove it"
          body="Recognition helps us open doors, for grants, for partners, and for the people we serve."
        />
        <div className={pages.awards}>
          {awards.map((a, i) => (
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
