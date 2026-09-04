/*
 * Global, cross-page content. Edit copy here, components stay untouched.
 *
 * Facts and figures are from the One Community Project Impact Dossier
 * (compiled 24 August 2026 from the attendance record kept with the
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
  eyebrow: 'Dessau-Roßlau, since 2019',
  title: ['Belonging is built', 'through repetition.'],
  body: 'The One Community Project brings care-home residents, schoolchildren, international students, refugees and long-time locals into the same room, again and again. The methods are music, dance, storytelling and shared meals.',
  primary: { label: 'See the projects', to: '/projects' },
  secondary: { label: 'Watch the film', to: '/projects/noch-einmal-walzer' },
}

export const closingCta = {
  eyebrow: 'Bring it to your city',
  title: 'Host a screening or a workshop.',
  body: 'Institutions across Germany, Ireland and Austria use Noch einmal Walzer with their own staff and the people they serve. Screenings come with a method handbook and a session plan.',
  primary: { label: 'Get in touch', to: '/contact' },
  secondary: { label: 'Explore projects', to: '/projects' },
}

// Brand-level statement (the dual-colour homepage card).
export const impactCard = {
  years: '2018',
  yearsLabel: 'running since',
  kicker: 'It began when a newly arrived international student started visiting the Marienheim care home each week to make music with residents. It has not stopped since.',
  eyebrow: 'Why it works',
  tagline: 'Prejudice survives in silence.',
  body: 'In the spaces where we don’t meet, don’t speak, don’t look at each other long enough, distance gives our fears room to grow. Trust needs the opposite: the same people, the same room, again.',
  cta: { label: 'Explore our projects', to: '/projects' },
}

export const footer = {
  blurb:
    'The One Community Project brings strangers into repeated contact through music, dance, storytelling and shared meals. Based in Dessau-Roßlau, active across Germany, Ireland and Austria.',
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
