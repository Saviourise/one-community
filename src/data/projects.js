/*
 * All projects, mapped to the real One Community archive in Google Drive.
 * Images are public Drive files referenced by id via drive().
 * Swap any id, or point `img` at a /public/assets path, to change a photo.
 *
 * Copy and figures follow the Impact Dossier (compiled 24 August 2026 from the
 * attendance record kept with the Integrationsbüro of the City of Dessau-Roßlau).
 *
 * Flags: featuredHome → homepage preview · spotlight → large card on Projects.
 */

import { drive, driveVideo } from '../lib/placeholder.js'

export const projects = [
  {
    slug: 'noch-einmal-walzer',
    title: 'Noch einmal Walzer',
    kicker: 'Documentary, 2023',
    palette: 'forest',
    img: drive('1FpFSeJzG9YBvFMukTsgLQLcEBTT1PQXN', 1200),
    driveFolderId: '1j7xKeqV5pLvQqW1jNNySmn3MMhIqh14D',
    short:
      'A 50-minute documentary that follows five months of waltz classes between refugees, migrants, international students and care-home residents.',
    tagline: 'One more waltz, and a room full of people who had never met.',
    featuredHome: false,
    spotlight: true,
    video: 'https://www.youtube.com/embed/DzW-w96L9jo',
    videoLabel: 'Watch the documentary',
    stats: [
      { value: '2023', label: 'Germany, 50 min, directed by Robert Boehnèl' },
      { value: '300', label: 'at the sold-out premiere, Bauhaus Museum Dessau' },
      { value: '3', label: 'language versions: German, English and Ukrainian' },
    ],
    body: [
      'In 2022 the project ran five months of waltz classes, bringing together thirty dancers, among them refugees, migrants and international students, and twelve residents of the Marienheim care home. The classes ended in a gala and in this film.',
      'Noch einmal Walzer premiered at the Bauhaus Museum Dessau on 18 June 2023 to a sold-out room of 300. It exists in German, English and Ukrainian, with subtitles, and travels with a method handbook and a session plan for facilitated screenings.',
      'Since June 2023 it has been shown at 38 documented bookings across Germany, Ireland and Austria: cinemas and festivals, but mostly institutions using it with their own staff and service users.',
    ],
    links: [{ label: 'Host a screening', to: '/contact' }],
  },
  {
    slug: 'tanz-gala',
    title: 'One Community Gala',
    kicker: 'Dance gala, 2022',
    palette: 'dusk',
    img: drive('1UX47UeWL-DV3GVa0bp9S6IdDyU0H0N3N', 1200),
    driveFolderId: '16FTs8r5pnw_wv2XU_zF2HtTdiL22qbmW',
    short:
      'The evening the waltz classes led to: thirty dancers and twelve care-home residents on the same floor.',
    tagline: 'Different steps, one rhythm.',
    featuredHome: true,
    spotlight: true,
    video: driveVideo('1csY0DN8BLd-xR_8TrIdL4D9iWFFXKShO'),
    videoLabel: 'Watch the gala film',
    stats: [
      { value: '2022', label: 'five months of classes' },
      { value: '42', label: 'on the floor: 30 dancers and 12 care-home residents' },
    ],
    body: [
      'The Gala closed five months of weekly waltz classes. The people who danced had spent those months learning the same steps in the same room: refugees, migrants, international students and residents of the Marienheim.',
      'You do not need a shared language to move together in three-four time. You need to show up, week after week, and offer your hand.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'homies-and-omies',
    title: 'Homies & Omies',
    kicker: 'Where it began, 2018',
    palette: 'amber',
    img: drive('1HBWVMpiDgcnBrFdawRmbPSzEvYAwNBFV', 1200),
    driveFolderId: '1T-_jJbAdvyX3OkPDlESQRKsAf-hNMP41',
    short:
      'The weekly care-home music sessions the whole project grew out of, started by a newly arrived international student in 2018.',
    tagline: 'Nobody has to grow up, or grow old, alone.',
    featuredHome: true,
    spotlight: false,
    video: '',
    stats: [
      { value: '2018', label: 'first weekly visits to the Marienheim' },
      { value: '2019', label: 'formalised as the One Community Project' },
    ],
    body: [
      'Homies & Omies started as a student initiative: someone new to the city turning up at the Marienheim care home each week to make music with residents.',
      'In 2019 it was formalised as the One Community Project, in cooperation with Hochschule Anhalt and the city’s integration office. The weekly sessions never stopped.',
    ],
    links: [],
  },
  {
    slug: 'tedx-talk',
    title: 'The Power of Small Encounters',
    kicker: 'TEDxLinz',
    palette: 'coral',
    img: drive('1CtYZynaNNnuXcWl5NDlJWByYzUEKDFRo', 1200),
    driveFolderId: '1GUHahUQmqSK_4eAR0rmZaOB4JGiLZ-mr',
    short:
      'The TEDxLinz talk that lays out the premise: prejudice survives in silence, and contact has to repeat before it counts.',
    tagline: 'Not one encounter. The same one, again.',
    featuredHome: false,
    spotlight: true,
    video: 'https://www.youtube.com/embed/5Fbdq4iLK88',
    videoLabel: 'Watch the TEDx Talk',
    stats: [
      { value: 'TEDx', label: 'Linz' },
      { value: '1', label: 'idea: repetition builds trust' },
    ],
    body: [
      'The talk distils the project’s method into one argument: a single good encounter changes little; the same encounter repeated changes how people see each other.',
      'It gives partners, funders and hosts a way to understand the work in under twenty minutes. The short film cut, subtitled, is the one people screen at watch parties.',
    ],
    links: [{ label: 'Host a watch party', to: '/contact?watch-party=1' }],
  },
  {
    slug: 'one-community-concert',
    title: 'One Community Concert',
    kicker: 'Since 2019',
    palette: 'meadow',
    img: drive('1AX2V69JzWj260ZQbw9XqzskM9OILV6Jz', 1200),
    driveFolderId: '1DaupJ4iTPjfyuHlMKsgA5pGzmSjat6DP',
    short:
      'The concert that marks the year: the cultures that share the city’s streets, on one stage.',
    tagline: 'When a community sings together, it stays together.',
    featuredHome: true,
    spotlight: true,
    video: '',
    videoLabel: 'Watch the concert film',
    stats: [
      { value: '2019', label: 'first held' },
      { value: '2', label: 'editions and counting' },
    ],
    body: [
      'The One Community Concert began in 2019 as a celebration of the many cultures that share the city’s streets, told through music, dance and performance.',
      'It became the one night a year when the whole community is unmistakably in the same room.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'integrationspreis',
    title: 'Integrationspreis',
    kicker: 'Recognition, 2019',
    palette: 'forest',
    img: drive('1jLDOyNTnN_kKblSKjuGf_pf90wI1VIk4', 1200),
    driveFolderId: '1xePynvZQMAviyPEeqcGDyZ42i_iKwIFh',
    short:
      'First place in the Integration Prize of Saxony-Anhalt, in the category “Miteinander statt gegeneinander”.',
    tagline: 'Recognised for the quiet work of belonging.',
    featuredHome: false,
    spotlight: false,
    video: '',
    stats: [
      { value: '2019', label: 'first place, presented in Magdeburg on 4 December' },
      { value: '2023', label: 'bpb “Aktiv für Demokratie und Toleranz”, prize-winning project' },
    ],
    body: [
      'In December 2019 the project won first place in the Integrationspreis des Landes Sachsen-Anhalt, in the category “Miteinander statt gegeneinander: Interkulturelles Zusammenleben gemeinsam gestalten”.',
      'In 2023 the Federal Agency for Civic Education (bpb) recognised Noch einmal Walzer in its national “Aktiv für Demokratie und Toleranz” competition, as the prize-winning project for Saxony-Anhalt.',
    ],
    links: [{ label: 'Get involved', to: '/contact' }],
  },
  {
    slug: 'shoot-for-the-moon',
    title: 'Shoot for the Moon',
    kicker: 'Music video, 2019',
    palette: 'coral',
    img: drive('1S-hF-LW8oMhtXeK4xZO5fcMrp9NIQg-x', 1200),
    driveFolderId: '1moFe2gjhIbXD6amG5ua0ovdtJX0MAwgB',
    short:
      'The project’s song, recorded and filmed with community members. It fed into the 2019 state prize.',
    tagline: 'One song, many voices.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('1vNZpf362i0UHKjnwehmrJvNJOZLQ3EKA'),
    videoLabel: 'Watch the music video',
    stats: [{ value: '2019', label: 'released; contributed to the state prize' }],
    body: [
      '“Shoot for the Moon” turned the project’s message into something you can hum, made with community members in front of and behind the camera. It was reported to have contributed to a rise in applications to Hochschule Anhalt.',
    ],
    links: [],
  },
  {
    slug: 'ocg-documentary',
    title: 'Einblick',
    kicker: 'Early film, 2020',
    palette: 'meadow',
    img: drive('1M2ggpcv30oTIXADy_bv-395vG4izxQfr', 1200),
    driveFolderId: '1j7xKeqV5pLvQqW1jNNySmn3MMhIqh14D',
    short:
      'An early look back at how a handful of gatherings became a project, told by the neighbours who were there.',
    tagline: 'Where it started, in their own words.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('1l6peAswVOktCD1_Ounl5fQLLgSZF5rQo'),
    videoLabel: 'Watch the film',
    stats: [{ value: '2020', label: 'released' }],
    body: [
      'A short film from the early years, made with Hochschule Anhalt, looking at how the weekly care-home visits grew into something with a name.',
    ],
    links: [],
  },
  {
    slug: 'we-are-the-world',
    title: 'Omies during Corona',
    kicker: 'Lockdown project, 2021',
    palette: 'forest',
    img: drive('1Il9rpZUVB4qdtZcPZG7JRWd4cg17AdqZ', 1200),
    driveFolderId: '1t6WNoj-rihdb58A-RkCKwFrzUYI_EWdd',
    short:
      'When visits to the care home were not possible, the sessions carried on the only way they could, remotely.',
    tagline: 'Apart, but not out of contact.',
    featuredHome: false,
    spotlight: false,
    video: driveVideo('11bSdDYbl5RsxjYFxT2nMvUlDD1_uppl4'),
    videoLabel: 'Watch the film',
    stats: [{ value: '2021', label: 'through the pandemic' }],
    body: [
      'During the pandemic, when residents could not have visitors, the project kept the encounters going through screens and recordings, so the thread of contact held until people could be in a room again.',
    ],
    links: [],
  },
  {
    slug: 'watch-parties',
    title: 'Screenings & watch parties',
    kicker: 'Two ways to press play',
    palette: 'coral',
    img: drive('10g2OPSWRnEaJlreYRgX6l9F5hSClxSMi', 1200),
    driveFolderId: '1TOlkjQdZB5AbOXWDFkqrPWmIxnN3Ge1n',
    short:
      'A short film anyone can screen at a watch party, and a 50-minute documentary institutions can run with a method handbook. Both films exist to be watched together, then talked about.',
    tagline: 'The film is the easy part. The conversation after is the point.',
    featuredHome: false,
    spotlight: true,
    video: 'https://www.youtube.com/embed/5Fbdq4iLK88',
    videoLabel: 'Watch The Power of Small Encounters',
    stats: [
      { value: '~15 min', label: 'Small Encounters, the short film for watch parties' },
      { value: '50 min', label: 'Noch einmal Walzer, the documentary for facilitated screenings' },
    ],
    body: [
      'Small Encounters is the short film of the TEDxLinz talk “The Power of Small Encounters”. It carries subtitles, runs about fifteen minutes, and asks for nothing more than a room, a screen and a few people willing to talk afterwards. Host one wherever you are: a living room, a classroom, a staff room. There was one in Vienna in July 2026.',
      'Noch einmal Walzer is the 50-minute documentary. It travels with three documents for facilitators: a method handbook for facilitated screenings (Arbeitsgrundlage Schulung und Methodenheft), a guide to film-based group work (Methoden der Filmarbeit), and a session plan for half-day and full-day workshops.',
      'Hosts of the documentary so far include a Jobcenter, a dementia network, a psychiatric clinic, a youth welfare office, a migration museum, universities, and three NGO trainings in Dublin.',
    ],
    links: [{ label: 'Host a watch party', to: '/contact?watch-party=1' }],
  },
  {
    slug: 'back-to-school',
    title: 'Back to School',
    kicker: 'Seasonal cooperation',
    palette: 'amber',
    img: drive('1s6Qo8RgoJRWXv6idM6WiKF5X_8sSFD4n', 1200),
    driveFolderId: '1suoE9O2-eT9xCl5PyI-V14P1tOJhACXW',
    short:
      'A cooperation making sure no child starts the school year without the basics and a familiar face.',
    tagline: 'The first weeks of term, made less lonely.',
    featuredHome: false,
    spotlight: false,
    video: '',
    stats: [{ value: '2026', label: 'cooperation' }],
    body: [
      'Back to School puts the essentials a child needs into their hands before term starts, and pairs them with people who stay in touch through the year.',
      'A small welcome at the right moment changes how a child reads the year ahead.',
    ],
    links: [{ label: 'Support Back to School', to: '/contact' }],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const featuredHomeProjects = projects.filter((p) => p.featuredHome)
export const spotlightProjects = projects.filter((p) => p.spotlight)
