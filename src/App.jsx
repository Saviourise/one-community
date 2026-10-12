import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Contact from './pages/Contact.jsx'
import PlayerDemo from './pages/PlayerDemo.jsx' // DEMO — remove with its route below
import NotFound from './pages/NotFound.jsx'

// Reset scroll on every route change so pages open at the top.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="player-demo" element={<PlayerDemo />} /> {/* DEMO — safe to remove */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
