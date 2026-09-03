/*
 * The swappable / seasonal "Host a Watch Party" call-to-action.
 * Set `active: false` to hide the homepage card entirely when no watch party
 * cycle is running (per the planning notes, the card is designed to be removed
 * or replaced without a redesign).
 */

export const watchParty = {
  active: true,
  eyebrow: 'Happening now',
  title: 'Host a watch party in your city',
  body: 'Gather your people, press play on our community documentary, and let the conversation do the rest. From Lagos to Cape Town to Sydney, belonging is a local thing that travels.',
  // Deep-links to Contact with the "host a watch party" box pre-ticked.
  cta: { label: 'Register to host a watch party', to: '/contact?watch-party=1' },
  cities: ['Lagos', 'Cape Town', 'Sydney', 'Berlin', 'Your city'],
  palette: 'coral',
}
