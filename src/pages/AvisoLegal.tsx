import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Footer from '@/components/Footer'

const AvisoLegal = () => {
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Datos identificativos</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa a los usuarios del sitio web los siguientes datos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Denominación social:</strong> ROVIJ ASOCIADOS SL</li>
              <li><strong>CIF:</strong> B59200550</li>
              <li><strong>Domicilio social:</strong> CALLE SANT MARIAN 145, TERRASSA 08221, España</li>
              <li><strong>Correo electrónico:</strong> hola@sonia-hr.com</li>
              <li><strong>Teléfono:</strong> +34 931 175 575</li>
              <li><strong>Sitio web:</strong> https://sonia-hr.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Objeto y actividad</h2>
            <p>ROVIJ ASOCIADOS SL es la titular del producto SonIA HR, una plataforma de automatización de procesos de recursos humanos basada en inteligencia artificial conversacional.</p>
            <p>Nuestros servicios incluyen:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automatización del reclutamiento y selección de personal</li>
              <li>Gestión inteligente de currículums y candidatos</li>
              <li>Comunicación automatizada con candidatos a través de WhatsApp Business y otros canales</li>
              <li>Análisis de datos de recursos humanos</li>
              <li>Integración con herramientas empresariales</li>
            </ul>
            <p><strong>Uso exclusivamente empresarial:</strong> Los servicios de SonIA HR están diseñados exclusivamente para uso empresarial y profesional. No están destinados a particulares ni para uso personal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Condiciones de uso</h2>
            <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones de uso. El usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hacer un uso correcto del sitio web conforme a la legislación vigente</li>
              <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
              <li>No introducir virus, programas o cualquier otro elemento que pueda dañar el sistema</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente, logotipos y marcas, son propiedad de ROVIJ ASOCIADOS SL o se utilizan con la debida autorización.</p>
            <p>Queda prohibida la reproducción, distribución, comunicación pública y transformación de los contenidos sin autorización expresa del titular.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Responsabilidad</h2>
            <p>ROVIJ ASOCIADOS SL no se hace responsable de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La calidad del servicio de conexión a Internet</li>
              <li>Los daños que puedan derivarse de interferencias, omisiones, interrupciones o desconexiones</li>
              <li>El contenido de sitios web de terceros enlazados desde este sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Legislación aplicable</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contacto</h2>
            <p>Para cualquier consulta relacionada con este aviso legal, puede contactar con nosotros en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: hola@sonia-hr.com</li>
              <li>Teléfono: +34 931 175 575</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AvisoLegal
