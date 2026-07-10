import { Link } from 'react-router-dom'

const Arrow = () => (
  <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 12h15m0 0-6-6m6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Polymorphic button: renders a router <Link> (to), an <a> (href), or a <button>.
 * variant: 'cta' | 'dark' | 'ghost' | 'on-dark'
 */
export default function Button({
  to,
  href,
  children,
  variant = 'cta',
  arrow = false,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`.trim()
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}
