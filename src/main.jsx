import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Type pairing (variable fonts): Fraunces (editorial display / logo + headings)
// + Hanken Grotesk (body / UI). Urbanist kept as a UI fallback.
import '@fontsource-variable/fraunces'
import '@fontsource-variable/urbanist'
import '@fontsource-variable/hanken-grotesk'
// Arabic/Persian caption glyphs (only the arabic subset downloads on demand via
// unicode-range) — used by the documentary's ar/fa subtitle tracks.
import '@fontsource-variable/vazirmatn'

import './styles/global.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
