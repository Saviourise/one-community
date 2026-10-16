/*
 * Central subtitle-language config for the full documentary ("Noch einmal Walzer").
 *
 * To add a CONFIRMED language: uncomment (or add) its entry below AND drop the
 * synced WebVTT at /public/subtitles/walzer-doc.<srclang>.vtt. Nothing else.
 *
 *   label   = the language's own name, in its own script (shown in the menu)
 *   dir     = caption/label text direction: 'ltr' or 'rtl'
 *   default = the track shown on load (German is the source of truth)
 *
 * Only list a language here once its file is checked and approved — the menu
 * and tracks are built straight from this array.
 */

export const docSubtitles = [
  { srclang: 'de', label: 'Deutsch', dir: 'ltr', default: true },
  { srclang: 'en', label: 'English', dir: 'ltr' },
  { srclang: 'uk', label: 'Українська', dir: 'ltr' },

  // --- Planned (enable each only after the synced, native-checked file is in) ---
  // { srclang: 'ar', label: 'العربية', dir: 'rtl' },
  // { srclang: 'tr', label: 'Türkçe', dir: 'ltr' },
  // { srclang: 'fa', label: 'فارسی', dir: 'rtl' },
  // { srclang: 'fr', label: 'Français', dir: 'ltr' },
  // { srclang: 'es', label: 'Español', dir: 'ltr' },
  // { srclang: 'pl', label: 'Polski', dir: 'ltr' },
  // { srclang: 'da', label: 'Dansk', dir: 'ltr' },
  // { srclang: 'ru', label: 'Русский', dir: 'ltr' },
]

// VideoPlayer `tracks` prop, derived from the config above.
export const docTracks = docSubtitles.map((s) => ({
  src: `/subtitles/walzer-doc.${s.srclang}.vtt`,
  srclang: s.srclang,
  label: s.label,
  dir: s.dir,
  ...(s.default ? { default: true } : {}),
}))
