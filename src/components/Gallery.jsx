import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { drive, imgFallback } from '../lib/placeholder.js'
import styles from './Gallery.module.css'

const Icon = ({ d }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={d} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const EXPAND = 'M9 4H5a1 1 0 0 0-1 1v4m11-5h4a1 1 0 0 1 1 1v4M9 20H5a1 1 0 0 1-1-1v-4m11 5h4a1 1 0 0 0 1-1v-4'

/**
 * Justified-rows photo gallery with an accessible lightbox.
 * Rows are equal height; each photo's width follows its measured aspect ratio,
 * so mixed portrait/landscape sit together cleanly with no cropping.
 * `images` is an array of Drive/asset ids; `label` names the set.
 */
export default function Gallery({ images = [], label = 'Photos' }) {
  const [open, setOpen] = useState(null) // index | null
  const count = images.length
  const reduce = useReducedMotion()

  const triggerRef = useRef(null)
  const overlayRef = useRef(null)

  const openAt = (i, e) => {
    triggerRef.current = e.currentTarget
    setOpen(i)
  }
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  )

  // keyboard: Esc / arrows / Tab focus-trap; lock scroll; restore focus on close
  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'Tab') {
        const nodes = overlayRef.current?.querySelectorAll('button')
        if (!nodes || nodes.length === 0) return
        const list = [...nodes]
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    // move focus into the dialog
    const t = requestAnimationFrame(() => {
      overlayRef.current?.querySelector('button')?.focus()
    })
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(t)
      triggerRef.current?.focus?.() // restore focus to the trigger
    }
  }, [open, close, step])

  if (count === 0) return null

  return (
    <>
      <div className={styles.gallery}>
        {images.map((id, i) => (
          <button
            key={id}
            className={styles.item}
            onClick={(e) => openAt(i, e)}
            aria-label={`Open photo ${i + 1} of ${count}`}
          >
            <img
              className={styles.img}
              src={drive(id)}
              alt={`${label} — photo ${i + 1}`}
              loading="lazy"
              onError={imgFallback(`${label}-${i}`, 800, 560)}
            />
            <span className={styles.expand} aria-hidden="true">
              <Icon d={EXPAND} />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            ref={overlayRef}
            className={styles.overlay}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${label} gallery, photo ${open + 1} of ${count}`}
          >
            <button className={`${styles.ctrl} ${styles.close}`} onClick={close} aria-label="Close gallery">
              <Icon d="M6 6l12 12M18 6L6 18" />
            </button>
            {count > 1 && (
              <>
                <button
                  className={`${styles.ctrl} ${styles.prev}`}
                  onClick={(e) => { e.stopPropagation(); step(-1) }}
                  aria-label="Previous photo"
                >
                  <Icon d="M15 6l-6 6 6 6" />
                </button>
                <button
                  className={`${styles.ctrl} ${styles.next}`}
                  onClick={(e) => { e.stopPropagation(); step(1) }}
                  aria-label="Next photo"
                >
                  <Icon d="M9 6l6 6-6 6" />
                </button>
              </>
            )}
            <motion.div
              className={styles.stage}
              onClick={(e) => e.stopPropagation()}
              key={open}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                className={styles.stageImg}
                src={drive(images[open])}
                alt={`${label} — photo ${open + 1}`}
                onError={imgFallback(`${label}-lg-${open}`, 1200, 800)}
              />
              <span className={styles.caption}>
                <b>{label}</b> · {open + 1} / {count}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
