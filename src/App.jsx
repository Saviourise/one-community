import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Contact from './pages/Contact.jsx'
import Documentary from './pages/Documentary.jsx'
import NotFound from './pages/NotFound.jsx'
import { Impressum, Datenschutz } from './pages/Legal.jsx'

// Reset scroll on every route change so pages open at the top.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

// Each route declares its own canonical URL and og:url (not the homepage).
// Note: link-preview crawlers do not run JavaScript, so per-route share tags
// in the delivered HTML still need prerendering (see review, for Saviour).
const SITE = 'https://onecommunityproject.org'
function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const url = SITE + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
    let og = document.querySelector('meta[property="og:url"]')
    if (!og) {
      og = document.createElement('meta')
      og.setAttribute('property', 'og:url')
      document.head.appendChild(og)
    }
    og.setAttribute('content', url)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="documentary" element={<Documentary />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="privacy" element={<Navigate to="/datenschutz" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
