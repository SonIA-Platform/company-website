import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-bold text-foreground">ROVIJ ASOCIADOS SL</h3>
            <p className="text-sm text-muted-foreground">
              CALLE SANT MARIAN 145<br />
              TERRASSA 08221<br />
              España
            </p>
            <p className="mt-2 text-sm text-muted-foreground">CIF: B59200550</p>
          </div>
          
          <div>
            <h3 className="mb-3 font-bold text-foreground">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:hola@sonia-hr.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" />
                hola@sonia-hr.com
              </a>
              <a href="tel:+34931175575" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                +34 931 175 575
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <a href="https://sonia-hr.com" className="hover:underline">https://sonia-hr.com</a>
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 font-bold text-foreground">Legal</h3>
            <div className="space-y-2">
              <Link to="/aviso-legal" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Aviso Legal
              </Link>
              <Link to="/politica-privacidad" className="block text-sm text-muted-foreground hover:text-primary hover:underline">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ROVIJ ASOCIADOS SL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
