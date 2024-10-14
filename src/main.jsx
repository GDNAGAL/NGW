import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/">
      <HelmetProvider>
        <ScrollToTop/>
        <App />
      </HelmetProvider>
    </Router>
  </StrictMode>,
)
