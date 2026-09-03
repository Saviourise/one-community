import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Type pairing (variable fonts): Urbanist (display / logo + headings) + Hanken Grotesk (body).
import '@fontsource-variable/urbanist'
import '@fontsource-variable/hanken-grotesk'

import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
