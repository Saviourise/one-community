/*
 * All projects — mapped to the real OCG (One Community) archive timeline in
 * Google Drive. Images are public Drive files referenced by id via drive().
 * Swap any id, or point `img` at a /public/assets path, to change a photo.
 *
 * Image sources: TEDx Pictures, One Community Concert, Homies & Omies,
 * OCG Tanz Gala (Fotografin), Noch einmal Walzer — all from the shared Drive.
 * A few 2020s/2026 OCG folders are video-only or empty, so those cards reuse a
 * real OCG community/gala photo as a stand-in (noted inline) until stills exist.
 *
 * Flags: featuredHome → homepage preview · spotlight → large card on Projects.
 */

import { drive, driveVideo } from '../lib/placeholder.js'

export const projects = [
  {
    slug: 'tedx-talk',
    title: 'TEDx Talk',
    kicker: 'TEDx',
    palette: 'coral',
    img: drive('1CtYZynaNNnuXcWl5NDlJWByYzUEKDFRo', 1200),
    driveFolderId: '1GUHahUQmqSK_4eAR0rmZaOB4JGiLZ-mr',
    short:
      'Our story on the TEDx stage, an idea worth spreading about how community and belonging are built between people.',
    tagline: 'Ideas worth spreading start with people worth knowing.',
    featuredHome: false,
    spotlight: true,
    video: '',
    videoLabel: 'Watch the TEDx Talk',
    stats: [
      { value: 'TEDx', label: 'featured stage' },
      { value: '1', label: 'idea: come closer' },
    ],
    body: [
      'Being invited to the TEDx stage gave One Community a platform to share what we have learned: that belonging is not a nice-to-have, it is the foundation everything else is built on.',
      'The talk distils years of community work into a simple, shareable idea, and gives partners, funders and neighbours a way to understand what we do in under twenty minutes.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'one-community-concert',
    title: 'One Community Concert',
    kicker: 'Flagship event',
    palette: 'meadow',
    img: drive('1AX2V69JzWj260ZQbw9XqzskM9OILV6Jz', 1200),
    driveFolderId: '1DaupJ4iTPjfyuHlMKsgA5pGzmSjat6DP',
    short:
      'A night where the whole community shows up: music, colour and hundreds of neighbours in one room.',
    tagline: 'When a community sings together, it stays together.',
    featuredHome: true,
    spotlight: true,
    video: '',
    videoLabel: 'Watch the concert film',
    stats: [
      { value: '2', label: 'editions and counting' },
      { value: '100s', label: 'of neighbours together' },
    ],
    body: [
      'The One Community Concert is our flagship gathering, a celebration of the many cultures that share our streets, told through music, dance and performance.',
      'It began in 2019 and quickly became the one night a year when the whole community is unmistakably in the same room.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'tanz-gala',
    title: 'Tanz Gala',
    kicker: 'Dance gala',
    palette: 'dusk',
    img: drive('1UX47UeWL-DV3GVa0bp9S6IdDyU0H0N3N', 1200),
    driveFolderId: '16FTs8r5pnw_wv2XU_zF2HtTdiL22qbmW',
    short:
      'An evening of dance where every generation and background shares the same floor.',
    tagline: 'Different steps, one rhythm.',
    featuredHome: true,
    spotlight: true,
    video: driveVideo('1csY0DN8BLd-xR_8TrIdL4D9iWFFXKShO'),
    videoLabel: 'Watch the gala film',
    stats: [
      { value: '2022', label: 'first held' },
      { value: '1', label: 'shared dance floor' },
    ],
    body: [
      'The Tanz Gala turns a ballroom into a meeting place. Professional dancers and first-timers, neighbours old and new, all take to the same floor.',
      'It is proof that you do not need a shared language to move together, you just need to show up and offer your hand.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'noch-einmal-walzer',
    title: 'Noch einmal Walzer',
    kicker: 'Documentary',
    palette: 'forest',
    img: drive('1FpFSeJzG9YBvFMukTsgLQLcEBTT1PQXN', 1200),
    driveFolderId: '1j7xKeqV5pLvQqW1jNNySmn3MMhIqh14D',
    short:
      'A documentary following a community production: the rehearsals, the nerves and the moment it all comes together.',
    tagline: 'One more dance, and a whole community on its feet.',
    featuredHome: false,
    spotlight: true,
    video: '',
    videoLabel: 'Watch the documentary',
    stats: [{ value: '2023', label: 'film premiere' }],
    body: [
      '“Noch einmal Walzer” (One More Waltz) is a documentary that follows a community production from first rehearsal to final bow.',
      'It is an intimate look at what happens when people who might never otherwise meet commit to creating something beautiful together, and what they carry with them long after the curtain falls.',
    ],
    links: [{ label: 'Host a screening', to: '/contact' }],
  },
  {
    slug: 'homies-and-omies',
    title: 'Homies & Omies',
    kicker: 'Ongoing project',
    palette: 'amber',
    img: drive('1HBWVMpiDgcnBrFdawRmbPSzEvYAwNBFV', 1200),
    driveFolderId: '1T-_jJbAdvyX3OkPDlESQRKsAf-hNMP41',
    short:
      'Bringing generations together: younger and older neighbours meeting, mentoring and simply spending time.',
    tagline: 'Nobody has to grow up, or grow old, alone.',
    featuredHome: true,
    spotlight: false,
    video: '',
    stats: [
      { value: 'Since', label: '2018' },
      { value: 'All', label: 'ages welcome' },
    ],
    body: [
      'Homies & Omies pairs younger and older members of the community, turning a divide that usually keeps people apart into a bridge that brings them together.',
      'Shared afternoons, mentoring and small ceremonies of recognition remind everyone involved that they belong to something bigger than their own generation.',
    ],
    links: [],
  },
  {
    slug: 'shoot-for-the-moon',
    title: 'Shoot for the Moon',
    kicker: 'Music video',
    palette: 'coral',
    img: drive('1S-hF-LW8oMhtXeK4xZO5fcMrp9NIQg-x', 1200), // concert performance still
    driveFolderId: '1moFe2gjhIbXD6amG5ua0ovdtJX0MAwgB',
    short:
      'Our community anthem, made with and for the neighbourhood: one song, many voices.',
    tagline: 'One song. Many voices. One community.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('1vNZpf362i0UHKjnwehmrJvNJOZLQ3EKA'),
    videoLabel: 'Watch the music video',
    stats: [{ value: '2019', label: 'released' }],
    body: [
      '“Shoot for the Moon” turned our message into something you can hum, recorded and filmed with community members in front of and behind the camera.',
    ],
    links: [],
  },
  {
    slug: 'ocg-documentary',
    title: 'OCG Documentary',
    kicker: 'Documentary',
    palette: 'meadow',
    img: drive('1M2ggpcv30oTIXADy_bv-395vG4izxQfr', 1200), // OCG gala still (stand-in)
    driveFolderId: '1j7xKeqV5pLvQqW1jNNySmn3MMhIqh14D',
    short:
      'Our first film, capturing the early years of One Community and the people who built it.',
    tagline: 'Where it all began, in their own words.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('1l6peAswVOktCD1_Ounl5fQLLgSZF5rQo'),
    videoLabel: 'Watch the film',
    stats: [{ value: '2020', label: 'released' }],
    body: [
      'The first One Community documentary looks back at how a handful of gatherings grew into a movement, told by the neighbours who were there from the start.',
    ],
    links: [{ label: 'Host a screening', to: '/contact' }],
  },
  {
    slug: 'we-are-the-world',
    title: 'We Are the World',
    kicker: 'Community film',
    palette: 'forest',
    img: drive('1Il9rpZUVB4qdtZcPZG7JRWd4cg17AdqZ', 1200), // OCG gala still (stand-in)
    driveFolderId: '1t6WNoj-rihdb58A-RkCKwFrzUYI_EWdd',
    short:
      'When the world locked down, we stayed connected: our community’s take on a song about togetherness.',
    tagline: 'Apart, but never alone.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('11bSdDYbl5RsxjYFxT2nMvUlDD1_uppl4'),
    videoLabel: 'Watch the film',
    stats: [{ value: '2021', label: 'lockdown project' }],
    body: [
      'During the pandemic, when gathering was impossible, the community came together the only way it could, remotely, to record its own version of “We Are the World.”',
    ],
    links: [],
  },
  {
    slug: 'watch-parties',
    title: 'Watch Parties',
    kicker: 'Community screenings',
    palette: 'coral',
    img: drive('10g2OPSWRnEaJlreYRgX6l9F5hSClxSMi', 1200), // OCG gala still (stand-in)
    driveFolderId: '1TOlkjQdZB5AbOXWDFkqrPWmIxnN3Ge1n',
    short:
      'Screenings that turn a film into a conversation, hosted by communities around the world.',
    tagline: 'Press play, then really talk.',
    featuredHome: false,
    spotlight: false,
    video: '',
    stats: [{ value: '2026', label: 'launched' }],
    body: [
      'Our films are made to be watched together. Watch Parties give any community, from Lagos to Cape Town to Sydney, a simple way to host a screening and start the conversation that follows.',
    ],
    links: [{ label: 'Host a watch party', to: '/contact' }],
  },
  {
    slug: 'integrationspreis',
    title: 'Integrationspreis',
    kicker: 'Recognition',
    palette: 'forest',
    img: drive('1jLDOyNTnN_kKblSKjuGf_pf90wI1VIk4', 1200),
    driveFolderId: '1xePynvZQMAviyPEeqcGDyZ42i_iKwIFh',
    short:
      'Awarded the Integration Prize of Saxony-Anhalt for bringing neighbours of every background together.',
    tagline: 'Recognised for the quiet work of belonging.',
    featuredHome: false,
    spotlight: false,
    video: '',
    stats: [{ value: '2019', label: 'Sachsen-Anhalt' }],
    body: [
      'In 2019 One Community received the Integrationspreis (Integration Prize) of Saxony-Anhalt, recognising years of work bringing neighbours of every background together.',
      'The award opened doors, to partners, to funding, and to more people who wanted to be part of what we were building.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'back-to-school',
    title: 'Back to School',
    kicker: 'Seasonal initiative',
    palette: 'amber',
    // Community stand-in (per instruction, not from the Back2school folder).
    img: drive('1s6Qo8RgoJRWXv6idM6WiKF5X_8sSFD4n', 1200),
    driveFolderId: '1suoE9O2-eT9xCl5PyI-V14P1tOJhACXW',
    short:
      'A cooperation making sure no child starts the school year feeling left out, with supplies and a warm welcome.',
    tagline: 'Every child deserves to start the year feeling ready and seen.',
    featuredHome: false,
    spotlight: false,
    video: '',
    stats: [{ value: '2026', label: 'cooperation' }],
    body: [
      'Back to School turns the anxious first weeks of term into a moment of belonging: the essentials a child needs, plus mentors who stay in touch through the year.',
      'A small welcome at the right moment can change how a child sees a whole year ahead.',
    ],
    links: [{ label: 'Support Back to School', to: '/contact' }],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const featuredHomeProjects = projects.filter((p) => p.featuredHome)
export const spotlightProjects = projects.filter((p) => p.spotlight)
