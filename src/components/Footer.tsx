import { Mail, Phone } from 'lucide-react'

import { trackEmailClick } from '@/utils/analytics'

const Footer = () => {
  const handleEmailClick = () => {
    trackEmailClick('hola@sonia-hr.com')
  }

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto w-full max-w-[960px] px-5">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-bold text-foreground">ROVIJ ASOCIADOS SL</h3>
            <p className="text-sm text-muted-foreground">
              CALLE SANT MARIAN 145<br />
              TERRASSA 08221<br />
              Espana
            </p>
            <p className="mt-2 text-sm text-muted-foreground">CIF: B59200550</p>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-foreground">Contacto</h3>
            <div className="space-y-2">
              <a
                href="mailto:hola@sonia-hr.com"
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                hola@sonia-hr.com
              </a>
              <a
                href="tel:+34931175575"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                +34 931 175 575
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <a href="https://sonia-hr.com" className="hover:underline">
                https://sonia-hr.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-foreground">Legal</h3>
            <div className="space-y-2">
              <a href="/aviso-legal.html" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Aviso Legal
              </a>
              <a href="/politica-privacidad.html" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Politica de Privacidad
              </a>
              <a href="/condiciones-servicio.html" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Condiciones de Servicio
              </a>
              <a href="/eliminacion-datos-usuarios.html" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Eliminacion de Datos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ROVIJ ASOCIADOS SL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
