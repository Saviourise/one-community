import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import { driveCssFallback } from '../lib/placeholder.js'
import { brand } from '../data/siteContent.js'
import pages from './pages.module.css'

const values = [
  {
    title: 'Coming back',
    body: 'We make room for people to meet again, share experiences and get to know one another over time.',
  },
  {
    title: 'The person in front of you',
    body: 'A care-home resident, a schoolchild, an international student, a refugee, a neighbour of forty years. The work starts with who is actually in the room, not a target group.',
  },
  {
    title: 'Count what we can verify',
    body: 'We publish recorded attendances and documented bookings, with the period they cover. These figures describe participation, not a measured reduction in loneliness or prejudice.',
  },
]

const awards = [
  { title: 'Integrationspreis des Landes Sachsen-Anhalt', note: 'First place, 2019' },
  { title: 'Aktiv für Demokratie und Toleranz', note: 'Prize-winning project, Bundeszentrale für politische Bildung, 2023' },
  { title: 'Bürgerfest, Schloss Bellevue', note: 'Adetayo Manuwa attended as a guest of the Federal President, September 2025' },
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
          <h1>Music, dance and encounters between generations.</h1>
          <p className="lede">
            Founded in 2019 with Hochschule Anhalt and the Integrationsbüro of the City of
            Dessau-Roßlau, the One Community Project grew from weekly music sessions at the
            Marienheim care home.
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
                initiative, “Homies &amp; Omies”, was formalised in 2019 as the One Community
                Project.
              </p>
              <p>
                The project brings care-home residents, international students, refugees, migrants
                and local residents together through music, dance and film.
              </p>
              <p>
                In 2022 it ran five months of waltz classes bringing together residents of three
                care homes with refugees, migrants and international students. The classes led to
                the One Community Gala and to the documentary Noch einmal Walzer, released in 2023.
                Records document 38 bookings involving screenings, workshops and staff training in
                Germany, Ireland and Austria from June 2023 to 2 September 2026.
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
              Prejudice survives in silence. In the spaces where we don’t meet, don’t speak,
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
          body="Recognition for bringing people of different generations and backgrounds together."
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
