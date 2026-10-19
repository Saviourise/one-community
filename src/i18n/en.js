/*
 * English content tree (canonical). Assembled from the existing src/data/*.js
 * files so there is a single source of truth for the English copy. The German
 * layer (de.js) mirrors this shape and only overrides translated text fields.
 */

import { brand, nav, hero, closingCta, impactCard, footer } from '../data/siteContent.js'
import { projects } from '../data/projects.js'
import { blog } from '../data/blog.js'
import { workshops } from '../data/workshops.js'
import { watchParty } from '../data/watchParty.js'
import { impact } from '../data/stats.js'
import { partners } from '../data/partners.js'

// About-page structured content (the value cards and awards grid). Lives here,
// not inline in About.jsx, so German can override it like any other content.
const about = {
  values: [
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
  ],
  awards: [
    { title: 'Integrationspreis des Landes Sachsen-Anhalt', note: 'First place, 2019' },
    {
      title: 'Aktiv für Demokratie und Toleranz',
      note: 'Prize-winning project, Bundeszentrale für politische Bildung, 2023',
    },
    {
      title: 'Bürgerfest, Schloss Bellevue',
      note: 'Adetayo Manuwa attended as a guest of the Federal President, September 2025',
    },
  ],
}

export const en = {
  brand,
  nav,
  hero,
  closingCta,
  impactCard,
  footer,
  projects,
  blog,
  workshops,
  watchParty,
  impact,
  partners,
  about,
}
