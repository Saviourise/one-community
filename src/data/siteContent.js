/*
 * Global, cross-page content. Edit copy here, components stay untouched.
 */

export const brand = {
  name: 'One Community Project',
  short: 'One Community',
  tagline: 'A stronger community, one encounter at a time.',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects', hasMenu: true },
  { label: 'Documentary', to: '/documentary' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'One Community Project',
  // Emotional brand message confirmed in planning, leads the hero.
  title: ['Building one stronger community', 'with a sense of belonging.'],
  body: 'We believe change happens in the space between people, one small encounter at a time. Explore the projects turning everyday moments into lifelong transformation.',
  primary: { label: 'See our projects', to: '/projects' },
  secondary: { label: 'Our story', to: '/about' },
}

export const closingCta = {
  eyebrow: 'Come closer',
  title: 'Belonging starts with one encounter.',
  body: 'Whether you host a watch party, join a project, or simply say hello, every small step widens the circle.',
  primary: { label: 'Get in touch', to: '/contact' },
  secondary: { label: 'Explore projects', to: '/projects' },
}

// Brand-level impact statement (the dual-colour homepage card). Editable placeholder.
export const impactCard = {
  years: '2018',
  yearsLabel: 'growing community since',
  kicker: 'Not a campaign with an end date, but a way of being with one another that keeps rippling outward.',
  eyebrow: 'Why it matters',
  tagline: 'Belonging is built, not found, one encounter at a time.',
  body: 'Every concert, class and conversation is a small proof that a stronger community is something we make together. That is the work, and it is only getting started.',
  cta: { label: 'Explore our projects', to: '/projects' },
}

export const footer = {
  blurb:
    'One Community Project brings people together through small, human encounters, building belonging across neighbourhoods and borders.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Projects', to: '/projects' },
        { label: 'About us', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { label: 'TEDx Talk', to: '/projects/tedx-talk' },
        { label: 'One Community Concert', to: '/projects/one-community-concert' },
        { label: 'Tanz Gala', to: '/projects/tanz-gala' },
      ],
    },
  ],
  // Compliance links called out in the planning notes (footer).
  legal: [
    { label: 'Privacy Policy', to: '/contact' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/one-community-projekt/' },
    { label: 'Instagram', href: 'https://www.instagram.com/onecommunityprojekt/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1ECL7eBoxn/' },
  ],
  email: 'hello@onecommunityproject.org',
}
