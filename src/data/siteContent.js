/*
 * Global, cross-page content. Edit copy here, components stay untouched.
 *
 * Facts and figures are from the One Community Project Impact Dossier
 * (current to 2 September 2026, corrected October 2026, from the attendance record kept with the
 * Integrationsbüro of the City of Dessau-Roßlau). Keep them in sync with it.
 */

export const brand = {
  name: 'One Community Project',
  short: 'One Community',
  tagline: 'Repeated encounters between people who would otherwise stay strangers.',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects', hasMenu: true },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Since 2019',
  title: ['Belonging is built', 'through repetition.'],
  body: 'The One Community Project brings people of different generations and backgrounds together through music, dance and film. It grew from encounters between students and care-home residents in Dessau-Roßlau.',
  primary: { label: 'See the projects', to: '/projects' },
  secondary: { label: 'About the documentary', to: '/projects/noch-einmal-walzer' },
  image: {
    src: '/assets/hero-laughing-resident.jpg',
    position: '42% 35%',
    alt: 'A care-home resident in a pink scarf laughing during a Homies & Omies music session',
  },
}

export const closingCta = {
  eyebrow: 'Bring it to your city',
  title: 'Host a watch party or a screening.',
  body: 'Anyone can host a watch party: the TEDxLinz talk, a room, a conversation after. Institutions can book Noch einmal Walzer as a facilitated screening, with a conversation or a workshop around it.',
  primary: { label: 'Get in touch', to: '/contact' },
  secondary: { label: 'Explore projects', to: '/projects' },
}

// Brand-level statement (the dual-colour homepage card).
export const impactCard = {
  years: '2018',
  yearsLabel: 'first music sessions',
  kicker: 'It began when a newly arrived international student started visiting the Marienheim care home each week to make music with residents. Everything else grew from there.',
  eyebrow: 'How it began',
  tagline: 'Prejudice survives in silence.',
  body: 'In the spaces where we don’t meet, don’t speak, don’t look at each other long enough, distance gives our fears room to grow. A small encounter can be a beginning. Coming back creates more opportunities to listen, share something and get to know each other.',
  cta: { label: 'Explore our projects', to: '/projects' },
}

export const footer = {
  blurb:
    'The One Community Project brings people together through music, dance and film. Rooted in Dessau-Roßlau, its documented screenings, workshops and staff training have taken place in Germany, Ireland and Austria.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Projects', to: '/projects' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { label: 'Noch einmal Walzer', to: '/projects/noch-einmal-walzer' },
        { label: 'One Community Gala', to: '/projects/tanz-gala' },
        { label: 'TEDx Talk', to: '/projects/tedx-talk' },
        { label: 'Shoot for the Moon', to: '/projects/shoot-for-the-moon' },
      ],
    },
  ],
  legal: [{ label: 'Privacy Policy', to: '/contact' }],
  // Placeholder address until the real inbox is set up.
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/one-community-projekt/' },
    { label: 'Instagram', href: 'https://www.instagram.com/onecommunityprojekt/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1ECL7eBoxn/' },
  ],
  email: 'hello@onecommunityproject.com',
}
