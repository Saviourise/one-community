/*
 * Image engine, DUMMY PHOTOS (no gradients in the UI treatment).
 *
 * Returns deterministic placeholder PHOTO URLs (Lorem Picsum) keyed by `seed`,
 * so every image slot across the site shows a real photograph for now. Swap for
 * final assets later: drop files into public/assets and change the `img` values
 * in src/data/* (or replace the call sites), the API here stays the same.
 *
 *   artwork({ w, h, seed })      -> "https://picsum.photos/seed/<seed>/<w>/<h>"
 *   artworkCss({ ... })          -> 'url("...")'  for CSS background-image
 *
 * The `palette`/`label` args are accepted (and ignored) for backwards
 * compatibility with existing call sites.
 */

const BASE = 'https://picsum.photos/seed'

export function artwork({ w = 1200, h = 800, seed = 'oc', grayscale = false, blur = 0 } = {}) {
  const s = encodeURIComponent(String(seed))
  const params = []
  if (grayscale) params.push('grayscale')
  if (blur > 0) params.push(`blur=${Math.min(10, Math.max(1, Math.round(blur)))}`)
  const query = params.length ? `?${params.join('&')}` : ''
  return `${BASE}/${s}/${Math.round(w)}/${Math.round(h)}${query}`
}

// Convenience for CSS `background-image` usage.
export function artworkCss(opts) {
  return `url("${artwork(opts)}")`
}

/*
 * Real Google Drive image (public "Anyone with link" files only).
 * `drive(id, w)` returns a resized, CDN-served URL suitable for <img src>.
 * `driveCss(id, w)` wraps it for CSS background-image.
 * Swap these for /public/assets paths if you later self-host.
 */
export function drive(id) {
  // Self-hosted: images were downloaded from Drive into /public/assets/<id>.jpg
  // (see scripts/download). Serving locally avoids Drive's thumbnail throttling.
  // To re-point at Drive, return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`.
  return `/assets/${id}.jpg`
}
export function driveCss(id, w = 1600) {
  return `url("${drive(id, w)}")`
}

// Embeddable Drive video player URL (public files) for <iframe src>.
export function driveVideo(id) {
  return `https://drive.google.com/file/d/${id}/preview`
}

/*
 * CSS background with a graceful fallback layer: the Drive image sits on top of a
 * dummy photo, so if Drive throttles/fails the fallback shows instead of a blank.
 */
export function driveCssFallback(id, seed, w = 1200) {
  return `${driveCss(id, w)}, ${artworkCss({ seed, w, h: Math.round(w * 0.66) })}`
}

// onError handler for <img>: swap a failed Drive image to a dummy photo once.
export function imgFallback(seed, w = 900, h = 600) {
  return (e) => {
    if (e.currentTarget.dataset.fb) return
    e.currentTarget.dataset.fb = '1'
    e.currentTarget.src = artwork({ seed, w, h })
  }
}
