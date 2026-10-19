import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import { useContent, useT } from '../i18n/LanguageContext.jsx'
import pages from './pages.module.css'

export default function NotFound() {
  const t = useT()
  const { brand } = useContent()

  useEffect(() => {
    document.title = `${t('notFound.docTitle')}, ${brand.name}`
  }, [t, brand])

  return (
    <div className={`container ${pages.notFound}`}>
      <span className="eyebrow" style={{ justifySelf: 'center' }}>
        {t('notFound.eyebrow')}
      </span>
      <span className={pages.big}>404</span>
      <p className="lede">{t('notFound.lede')}</p>
      <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button to="/" variant="cta" arrow>
          {t('notFound.backHome')}
        </Button>
        <Button to="/projects" variant="ghost">
          {t('notFound.seeProjects')}
        </Button>
      </div>
    </div>
  )
}
