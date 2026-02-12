import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initGA4 } from './utils/analytics'

// Initialize Google Analytics 4
initGA4()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
