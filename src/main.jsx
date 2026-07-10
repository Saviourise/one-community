import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Distinctive type pairing (variable fonts): Fraunces (display) + Hanken Grotesk (body).
import '@fontsource-variable/fraunces'
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
