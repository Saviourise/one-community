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
| `legal.js` | Impressum and privacy policy (English; German in `src/i18n/de.js`) |

- **Real photos:** drop files into `public/assets/` and reference them as `/assets/your-file.jpg`.
  `src/lib/placeholder.js` returns a local solid-colour fallback, so no external
  placeholder service is called.
- **TED Talk / documentary video:** paste an embed URL into a project's `video` field in
  `projects.js`. It renders through `ConsentEmbed`, which only loads YouTube/Google Drive
  after the visitor clicks "Load video" (YouTube via youtube-nocookie.com) and offers
  "Disable video" afterwards.
- **Logo:** currently a typographic wordmark in `src/components/Navbar.jsx` / `Footer.jsx`.

## Contact form

`src/pages/Contact.jsx` validates in the browser but **does not transmit data**. It
says so honestly ("The contact form is not active yet"). Connect a form service or
backend endpoint before launch and update the privacy policy.

## Translations (English and German)

The site is bilingual. **Every new page or piece of content must be translated in
the project's format; never hardcode text in a component.**

1. Put the English content in `src/data/<topic>.js` (canonical shape).
2. Add it to the English tree in `src/i18n/en.js`.
3. Add the German version under the same key in `src/i18n/de.js`, with exactly the
   same shape (same keys, same array lengths and order). German overrides are
   deep-merged onto the English base element by element.
4. Read it in the component with `useContent()`.
5. Short UI labels (buttons, aria-labels, document titles) go in `src/i18n/ui.js`
   under both `en` and `de`, and are read with `useT()`.

Example: the legal pages use `src/data/legal.js` + the `legal` block in
`src/i18n/de.js`, rendered by `src/pages/Legal.jsx`.

## Legal pages and SEO

- `/impressum` and `/datenschutz` (`/privacy` redirects). Items in [square brackets]
  must be confirmed before launch.
- `public/sitemap.xml`, `public/robots.txt`, `public/og-image.jpg`; Open Graph and
  Organization metadata in `index.html`; per-route canonical set in `src/App.jsx`.

## Structure

```
src/
  components/   layout, nav, footer, reusable UI + homepage sections
  pages/        Home, About, Projects, ProjectDetail, Documentary, Contact, Legal, NotFound
  data/         all editable content (English)
  i18n/         en.js / de.js content trees, ui.js labels, LanguageContext
  lib/          placeholder art engine
  styles/       global.css (design tokens + base)
```
