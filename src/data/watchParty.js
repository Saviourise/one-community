/*
 * The "Host a screening" call-to-action card.
 * Set `active: false` to hide the homepage card when nothing is running;
 * it is designed to be removed or swapped without a redesign.
 */

export const watchParty = {
  active: true,
  eyebrow: 'For institutions',
  title: 'Use the film with your team',
  body: 'Fewer than a quarter of our bookings are public cinema screenings. Most are institutions using Noch einmal Walzer with their own staff and service users: a Jobcenter, a dementia network, a psychiatric clinic, a youth welfare office, a migration museum, NGO trainings in Dublin. Each screening comes with a method handbook and a session plan for half-day or full-day work.',
  cta: { label: 'Request a screening', to: '/contact?watch-party=1' },
  cities: ['Dessau-Roßlau', 'Jena', 'Dublin', 'Vienna', 'Your city'],
  palette: 'coral',
}
