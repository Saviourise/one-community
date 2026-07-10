# One Community Project Website

A React front-end for **One Community Project**, a community focused on building
belonging through small, human encounters. Built with Vite + React Router, a bespoke
green-and-coral design system, and Motion for animation.

> Prototype: content and imagery are placeholders designed to be swapped for real
> assets. No backend is wired (see the contact form note below).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Design system

- **Palette (lighter Back-to-School green + coral):** see `:root` in `src/styles/global.css`.
  - `--canvas #F4F7EE` · `--primary #5AA84F` · `--primary-deep #234A28` · `--cta #FF6B4A` · `--warm #F4A259`
- **Type:** Fraunces (display) + Hanken Grotesk (body), self-hosted via `@fontsource-variable`.
- Inspiration: urban-future.org + kamillasultanova.com (full-bleed photographic hero,
  warm accent CTAs, card grids, partner strip, impact stats, blog row).

## Where to change things (no component edits needed)

All content lives in `src/data/`:

| File | Controls |
| --- | --- |
| `siteContent.js` | Brand name, nav, hero copy, closing CTA, footer + legal links, email |
| `projects.js` | Every project (title, blurb, palette, stats, body, `video` embed URL, flags) |
| `watchParty.js` | The swappable watch-party card, set `active: false` to hide it |
| `stats.js` | Homepage impact band numbers |
| `partners.js` | Partner / TEDx recognition strip |
| `blog.js` | Homepage blog cards |

- **Real photos:** the image engine in `src/lib/placeholder.js` returns deterministic
  dummy photos from Lorem Picsum (`picsum.photos`), keyed by a `seed`. To use final
  assets, drop files into `public/assets/` and reference them as `/assets/your-file.jpg`
  in the `artwork(...)` call sites / `img` values. (Picsum requires a network connection
  while the placeholders are in use.)
- **TED Talk / documentary video:** paste an embed URL into a project's `video` field in
  `projects.js` and it renders inline (homepage featured video + detail page).
- **Logo:** currently a typographic wordmark in `src/components/Navbar.jsx` / `Footer.jsx`.

## Contact form

`src/pages/Contact.jsx` validates in the browser and shows a success state, but **does not
transmit data**, connect a form service or backend endpoint where marked before launch.
The Privacy Policy / Imprint footer links are placeholders pointing at `/contact`.

## Structure

```
src/
  components/   layout, nav, footer, reusable UI + homepage sections
  pages/        Home, About, Projects, ProjectDetail, Contact, NotFound
  data/         all editable content
  lib/          placeholder art engine
  styles/       global.css (design tokens + base)
```
