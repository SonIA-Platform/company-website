import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import CondicionesServicio from './pages/CondicionesServicio'
import EliminacionDatosUsuarios from './pages/EliminacionDatosUsuarios'
import { CookieConsent } from './components/CookieConsent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/condiciones-servicio" element={<CondicionesServicio />} />
        <Route path="/eliminacion-datos-usuarios" element={<EliminacionDatosUsuarios />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}

export default App
