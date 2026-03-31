import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import { CookieConsent } from './components/CookieConsent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aviso-legal" element={<Navigate to="/aviso-legal.html" replace />} />
        <Route path="/politica-privacidad" element={<Navigate to="/politica-privacidad.html" replace />} />
        <Route path="/condiciones-servicio" element={<Navigate to="/condiciones-servicio.html" replace />} />
        <Route path="/eliminacion-datos-usuarios" element={<Navigate to="/eliminacion-datos-usuarios.html" replace />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}

export default App
