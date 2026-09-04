import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

const values = [
  {
    title: 'Contact, repeated',
    body: 'One good encounter proves little; the same one, repeated, changes how people see each other. Everything is built around coming back.',
  },
  {
    title: 'The person in front of you',
    body: 'A care-home resident, a schoolchild, an international student, a refugee, a neighbour of forty years. The work starts with who is actually in the room, not a target group.',
  },
  {
    title: 'Count what you can verify',
    body: 'Figures come from the attendance record kept with the city’s integration office. Where a screening cannot be verified, it is left out — a documented floor, not a claim.',
  },
]

const awards = [
  { title: 'Integrationspreis Sachsen-Anhalt', note: 'First place, 2019' },
  { title: 'bpb, Aktiv für Demokratie und Toleranz', note: 'Prize-winning project, 2023' },
  { title: 'DAAD STIBET I', note: 'For exceptionally engaged students, 2019' },
  { title: 'Bürgerfest, Schloss Bellevue', note: 'Invited by the Federal President, 2025' },
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
          <h1>A project about repetition.</h1>
          <p className="lede">
            The One Community Project has run in Dessau-Roßlau since 2019, in partnership with the
            city’s integration office and Hochschule Anhalt. Its premise is simple and its method
            is patient.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className={pages.aboutIntro}>
          <Reveal>
            <div>
              <p className="lede">
                It began in 2018, when a newly arrived international student started visiting the
                Marienheim care home each week to make music with residents. That student
                initiative — “Homies &amp; Omies” — was formalised in 2019 as the One Community
                Project.
              </p>
              <p>
                The project creates repeated encounters between people who would otherwise remain
                strangers: care-home residents, schoolchildren, international students, refugees
                and long-standing residents of the city. The methods are music, dance,
                storytelling and shared meals.
              </p>
              <p>
                In 2022 it ran five months of waltz classes bringing together thirty dancers —
                among them refugees, migrants and international students — and twelve residents of
                the Marienheim. The classes led to the One Community Gala and to the documentary
                Noch einmal Walzer, released in 2023 and now shown across Germany, Ireland and
                Austria.
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
            <span className="eyebrow">The premise</span>
            <p className={pages.missionQuote}>
              Prejudice survives in silence — in the spaces where we don’t meet, don’t speak,
              don’t look at each other long enough.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="How we work" title="Three things that hold true" center />
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
          eyebrow="Recognition"
          title="On the record"
          body="Recognition is useful mainly because it opens doors — to partners, to funding, and to the institutions that then use the film with their own people."
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
