import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useT } from '../i18n/LanguageContext.jsx'

export default function Layout() {
  const t = useT()
  return (
    <>
      <a href="#main" className="visually-hidden">
        {t('layout.skip')}
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
