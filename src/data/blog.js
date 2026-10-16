/*
 * Homepage press row. Real coverage from the Impact Dossier press archive.
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
      // Photo: Reinaldo Coddou, from the AufRuhr reportage (Dessau, November 2023).
      img: '/assets/press-aufruhr.jpg',
      credit: 'Photo: Reinaldo Coddou',
      href: 'https://www.aufruhr-magazin.de/',
    },
    {
      id: 'radio-corax',
      title: 'On air in Halle',
      excerpt:
        'A broadcast feature on the project by Radio Corax, the community radio station in Halle (Saale).',
      category: 'Radio Corax',
      date: 'November 2025',
      palette: 'amber',
      img: drive('1HBWVMpiDgcnBrFdawRmbPSzEvYAwNBFV', 800),
      href: 'https://radiocorax.de/',
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
