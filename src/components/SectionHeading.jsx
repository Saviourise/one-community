/**
 * Eyebrow + title (+ optional body). Set `center` for centered headers.
 */
export default function SectionHeading({ eyebrow, title, body, center = false, as = 'h2', id }) {
  const Title = as
  return (
    <header className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Title id={id}>{title}</Title>
      {body && <p className="lede">{body}</p>}
    </header>
  )
}
