/*
 * "Host a watch party" call-to-action card (homepage).
 * A watch party means watching the TEDxLinz talk "The Power of Small
 * Encounters" (18 minutes, on YouTube) together, then talking about it.
 * The documentary Noch einmal Walzer is a separate offer: facilitated screenings.
 * Set `active: false` to hide the homepage card; it is built to be swapped
 * without a redesign.
 */

export const watchParty = {
  active: true,
  eyebrow: 'The Power of Small Encounters',
  title: 'Host a watch party',
  body: 'Gather a few people, play the TEDxLinz talk, and stay for the conversation it starts. It runs eighteen minutes and needs nothing more than a room and a screen. Yours could be the next one.',
  cta: { label: 'Host a watch party', to: '/contact?watch-party=1' },
  cities: ['Dessau-Roßlau', 'Your city'],
  palette: 'coral',
}
