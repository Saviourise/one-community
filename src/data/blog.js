/*
 * Homepage press row — real coverage from the Impact Dossier press archive.
 * `img` points at a Drive still; empty falls back to a dummy photo.
 */

import { drive } from '../lib/placeholder.js'

export const blog = {
  eyebrow: 'Press',
  title: 'What has been written about it',
  posts: [
    {
      id: 'aufruhr-dreivierteltakt',
      title: 'Teilhabe im Dreivierteltakt',
      excerpt:
        'AufRuhr Magazin, published by the Stiftung Mercator, on the waltz classes and the film. By Esther Sambale.',
      category: 'AufRuhr Magazin',
      date: 'January 2024',
      palette: 'coral',
      img: drive('1JvnkDs0BdCAvF9cwy_8OGK4I-6OCVt56', 800),
      href: 'https://www.aufruhr-magazin.de/',
    },
    {
      id: 'mz-hetze-und-herzen',
      title: 'Hetze und Herzen',
      excerpt:
        'A page-three feature in the Mitteldeutsche Zeitung — one of five the paper has run since “Tutipsy rockt das Pflegeheim” in 2020.',
      category: 'Mitteldeutsche Zeitung',
      date: 'January 2026',
      palette: 'amber',
      img: drive('1BvZ6ZN71a6oIXpkS4zkHSEho7fPWm-Dw', 800),
      href: '#',
    },
    {
      id: 'bpb-prize',
      title: 'The prize-winning project from Saxony-Anhalt',
      excerpt:
        'The Federal Agency for Civic Education on Noch einmal Walzer, recognised in its national “Aktiv für Demokratie und Toleranz” competition.',
      category: 'bpb.de',
      date: 'November 2023',
      palette: 'forest',
      img: drive('1pLh7EwkYQDJESOWJ80NFdYJ8XoV8cdfE', 800),
      href: 'https://www.bpb.de/',
    },
  ],
}
