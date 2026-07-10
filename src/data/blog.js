/*
 * Homepage blog row, kept to ~3 summarised cards per the planning notes.
 * Set `img` per post to a real URL/local path; empty falls back to a dummy photo.
 */

import { drive } from '../lib/placeholder.js'

export const blog = {
  eyebrow: 'From the community',
  title: 'Stories worth passing on',
  posts: [
    {
      id: 'the-night-we-sang',
      title: 'The night the whole city sang',
      excerpt:
        'Behind the scenes of the One Community Concert, where hundreds of neighbours became one audience, and then one community.',
      category: 'One Community Concert',
      date: 'June 2026',
      palette: 'coral',
      img: drive('1JvnkDs0BdCAvF9cwy_8OGK4I-6OCVt56', 800),
      href: '#',
    },
    {
      id: 'first-day-feeling',
      title: 'What a first day should feel like',
      excerpt:
        'Why a single welcoming face changes how a child sees the whole school year ahead.',
      category: 'Back to School',
      date: 'May 2026',
      palette: 'amber',
      img: drive('1BvZ6ZN71a6oIXpkS4zkHSEho7fPWm-Dw', 800),
      href: '#',
    },
    {
      id: 'one-more-waltz',
      title: 'One more waltz, one more chance to meet',
      excerpt:
        'The making of “Noch einmal Walzer”, and the strangers who became a cast, and then friends.',
      category: 'Documentary',
      date: 'April 2026',
      palette: 'forest',
      img: drive('1pLh7EwkYQDJESOWJ80NFdYJ8XoV8cdfE', 800),
      href: '#',
    },
  ],
}
