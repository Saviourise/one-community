# Project instructions for AI assistants

## Translations (always)

This site is bilingual (English and German). Every new page or piece of content must
be translated in the project's format. Never hardcode visible text in a component.

1. English content goes in `src/data/<topic>.js` (canonical shape) and is added to
   the tree in `src/i18n/en.js`.
2. The German version goes under the same key in `src/i18n/de.js`, with exactly the
   same shape (same keys, same array lengths and order); it is deep-merged onto the
   English base.
3. Components read content with `useContent()`.
4. Short UI labels (buttons, aria-labels, document titles) go in `src/i18n/ui.js`
   under both `en` and `de`, read with `useT()`.

Example: `src/data/legal.js` + the `legal` block in `src/i18n/de.js`, rendered by
`src/pages/Legal.jsx`. See README.md, section "Translations".

## Privacy

- No third-party requests before consent: embed external video only through
  `src/components/ConsentEmbed.jsx`; do not add external fonts, analytics or
  placeholder-image services.
- Language choice is stored only in sessionStorage after an explicit choice.
