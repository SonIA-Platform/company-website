import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Footer from '@/components/Footer'

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary">
            SonIA<span className="font-light text-muted-foreground"> HR</span>
          </Link>
          <a
            href="mailto:hola@sonia-hr.com"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:flex"
          >
            <Mail className="h-4 w-4" /> Contactar
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del tratamiento</h2>
            <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), informamos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Responsable:</strong> ROVIJ ASOCIADOS SL</li>
              <li><strong>CIF:</strong> B59200550</li>
              <li><strong>Domicilio:</strong> CALLE SANT MARIAN 145, TERRASSA 08221, España</li>
              <li><strong>Email:</strong> hola@sonia-hr.com</li>
              <li><strong>Teléfono:</strong> +34 931 175 575</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos que recopilamos</h2>
            <p>A través de este sitio web podemos recopilar los siguientes datos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de contacto:</strong> nombre, apellidos, email, teléfono (cuando nos contacta voluntariamente)</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de navegación</li>
            </ul>
            <p>No recopilamos datos personales de forma automatizada sin su consentimiento expreso.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidad del tratamiento</h2>
            <p>Los datos personales que nos proporciona serán tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Gestionar el servicio solicitado</li>
              <li>Enviar comunicaciones comerciales (solo con su consentimiento previo)</li>
              <li>Mejorar la experiencia de usuario en el sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Base legal del tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El consentimiento del interesado</li>
              <li>La ejecución de un contrato o medidas precontractuales</li>
              <li>El interés legítimo del responsable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Plazo de conservación</h2>
            <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades derivadas de dicha finalidad y del tratamiento de los datos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Destinatarios de los datos</h2>
            <p>Sus datos no serán cedidos a terceros, salvo obligación legal. Los datos podrán ser tratados por proveedores de servicios necesarios para la prestación del servicio (hosting, servicios de correo electrónico), que actuarán como encargados del tratamiento.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Derechos del interesado</h2>
            <p>Como titular de los datos, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted</li>
              <li><strong>Rectificación:</strong> modificar los datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado</li>
              <li><strong>Revocación del consentimiento:</strong> en cualquier momento</li>
            </ul>
            <p>Para ejercer estos derechos, puede contactarnos en: hola@sonia-hr.com</p>
            <p>También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Seguridad de los datos</h2>
            <p>ROVIJ ASOCIADOS SL ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies</h2>
            <p>Este sitio web no utiliza cookies de seguimiento ni publicidad. Únicamente se emplean cookies técnicas estrictamente necesarias para el funcionamiento del sitio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Actualización de la política</h2>
            <p>Esta política de privacidad puede ser actualizada. Le recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.</p>
            <p><strong>Última actualización:</strong> Febrero 2026</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contacto</h2>
            <p>Para cualquier cuestión relacionada con la protección de datos personales, puede contactarnos en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: hola@sonia-hr.com</li>
              <li>Teléfono: +34 931 175 575</li>
              <li>Dirección: CALLE SANT MARIAN 145, TERRASSA 08221, España</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PoliticaPrivacidad
