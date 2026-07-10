import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

import { brand, nav } from '../data/siteContent.js'
import { projects } from '../data/projects.js'
import Button from './Button.jsx'
import styles from './Navbar.module.css'

const DOT_COLORS = {
  meadow: 'var(--primary)',
  amber: 'var(--warm)',
  coral: 'var(--cta)',
  forest: 'var(--primary-deep)',
  dusk: 'var(--primary-deep)',
  green: 'var(--primary)',
}

const Caret = () => (
  <svg className={styles.caret} width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // Projects dropdown
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile drawer + projects dropdown whenever the route changes
  useEffect(() => {
    setOpen(false)
    setMenuOpen(false)
  }, [pathname])

  // Every page now opens with a dark photographic header, so the transparent
  // navbar uses light (white) text at the top of any page. Once scrolled, it
  // switches to the solid cream bar with dark text (handled by `.scrolled`).
  const light = !scrolled && !open

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${light ? styles.light : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${brand.name}, home`}>
          <span className={styles.mark} aria-hidden="true">
            <span className={styles.markDot} />
          </span>
          <span className={styles.brandText}>
            <b>One Community</b>
            <span>Project</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <div
              key={item.to}
              className={styles.navItem}
              onMouseEnter={item.hasMenu ? () => setMenuOpen(true) : undefined}
              onMouseLeave={item.hasMenu ? () => setMenuOpen(false) : undefined}
              onFocus={item.hasMenu ? () => setMenuOpen(true) : undefined}
              onBlur={
                item.hasMenu
                  ? (e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setMenuOpen(false)
                    }
                  : undefined
              }
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {item.label}
                {item.hasMenu && <Caret />}
              </NavLink>

              {item.hasMenu && (
                <div
                  className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
                  role="menu"
                  aria-label="Projects"
                >
                  <p className={styles.menuHead}>Our work</p>
                  <div className={styles.menuGrid}>
                    {projects.slice(0, 6).map((p) => (
                      <Link
                        key={p.slug}
                        to={`/projects/${p.slug}`}
                        className={styles.menuItem}
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span
                          className={styles.menuDot}
                          style={{ background: DOT_COLORS[p.palette] || 'var(--primary)' }}
                        />
                        <span className={styles.menuText}>
                          <span className={styles.menuTitle}>{p.title}</span>
                          <span className={styles.menuKicker}>{p.kicker}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className={styles.menuFoot}>
                    <Link to="/projects" className="link-arrow" onClick={() => setMenuOpen(false)}>
                      See all projects
                    </Link>
                    <span className={styles.menuCount}>{projects.length} initiatives</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button to="/contact" variant="cta" className={styles.cta} arrow>
            Host a watch party
          </Button>
          <button
            className={`${styles.burger} ${open ? styles.open : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.drawer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.drawerInner}>
              {nav.map((item) => (
                <div key={item.to}>
                  <Link to={item.to} className={styles.drawerLink}>
                    {item.label}
                  </Link>
                  {item.hasMenu && (
                    <div className={styles.drawerSub}>
                      {projects.map((p) => (
                        <Link key={p.slug} to={`/projects/${p.slug}`}>
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button to="/contact" variant="cta" className={styles.drawerCta} arrow>
                Host a watch party
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
