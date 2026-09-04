/*
 * "Host a Small Encounters watch party" call-to-action card (homepage).
 * Small Encounters is the short film of the TEDxLinz talk "The Power of Small
 * Encounters", subtitled and made to be watched in a group.
 * Set `active: false` to hide the homepage card; it is built to be swapped
 * without a redesign.
 */

export const watchParty = {
  active: true,
  eyebrow: 'Small Encounters',
  title: 'Host a watch party',
  body: 'Gather a few people, play the short film, and stay for the conversation it starts. It runs about fifteen minutes, carries subtitles, and needs nothing more than a room and a screen. One in Vienna in July 2026; yours next.',
  cta: { label: 'Host a watch party', to: '/contact?watch-party=1' },
  cities: ['Dessau-Roßlau', 'Jena', 'Dublin', 'Vienna', 'Your city'],
  palette: 'coral',
}
