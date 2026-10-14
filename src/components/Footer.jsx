import { Link } from 'react-router-dom'
import { brand, footer } from '../data/siteContent.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = 2026 // static build; update or wire to a real date at deploy time

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <span className={styles.brand}>
            <span className={styles.mark}>
              <span />
            </span>
            {brand.name}
          </span>
          <p className={styles.blurb}>{footer.blurb}</p>
          <div className={styles.social}>
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <p className={styles.colTitle}>{col.title}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.wordmarkWrap}`}>
        <p className={styles.wordmark} aria-hidden="true">
          <span>one</span>
          <span>community</span>
        </p>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {brand.name}. Made with care by the community.
        </span>
        <nav className={styles.legal} aria-label="Legal">
          {footer.legal.map((l) => (
            <Link key={l.label} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
