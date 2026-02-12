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
              <li><strong>Datos de navegación (con su consentimiento):</strong> dirección IP (anonimizada), tipo de navegador, páginas visitadas, tiempo de navegación, fuente de tráfico, dispositivo utilizado. Estos datos son recopilados mediante Google Analytics únicamente si acepta las cookies analíticas.</li>
            </ul>
            <p>No recopilamos datos personales de forma automatizada sin su consentimiento expreso. Para el uso de cookies analíticas, solicitamos su consentimiento mediante un banner específico.</p>
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
            <p>Sus datos no serán cedidos a terceros, salvo obligación legal. Los datos podrán ser tratados por los siguientes proveedores de servicios, que actuarán como encargados del tratamiento:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Hosting web:</strong> proveedores de alojamiento del sitio web</li>
              <li><strong>Servicios de correo electrónico:</strong> para gestionar comunicaciones</li>
              <li><strong>Google Analytics (Google LLC):</strong> para análisis de tráfico web (solo con su consentimiento). Google puede transferir datos a EE.UU. bajo el marco de Privacidad de Datos UE-EE.UU.</li>
            </ul>
            <p className="mt-2">Todos estos proveedores cumplen con la normativa de protección de datos aplicable.</p>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies y tecnologías de seguimiento</h2>
            <p>Este sitio web utiliza cookies y tecnologías similares para analizar el tráfico del sitio web y mejorar nuestros servicios.</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.1. ¿Qué son las cookies?</h3>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten al sitio web recordar sus acciones y preferencias durante un período de tiempo.</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.2. Cookies que utilizamos</h3>
            <p>Utilizamos <strong>Google Analytics 4</strong> para analizar cómo los visitantes utilizan nuestro sitio web. Google Analytics utiliza las siguientes cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>_ga:</strong> Distingue usuarios únicos (duración: 2 años)</li>
              <li><strong>_ga_{'<'}container-id{'>'}:</strong> Mantiene el estado de la sesión (duración: 2 años)</li>
            </ul>
            <p className="mt-2">Estas cookies recopilan información de forma anónima, incluyendo:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Número de visitantes al sitio web</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de permanencia en cada página</li>
              <li>Fuente de tráfico (cómo llegó a nuestro sitio)</li>
              <li>Tipo de navegador y dispositivo</li>
            </ul>
            <p className="mt-2"><strong>Importante:</strong> Hemos configurado Google Analytics con anonimización de IP para proteger su privacidad.</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.3. Su consentimiento</h3>
            <p>Al visitar nuestro sitio web por primera vez, se le mostrará un banner de cookies donde puede:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Aceptar cookies:</strong> Google Analytics se activará y podremos analizar el tráfico del sitio</li>
              <li><strong>Rechazar cookies:</strong> Google Analytics no se activará y no se recopilarán datos analíticos</li>
            </ul>
            <p className="mt-2">Su elección se guardará en su navegador y no se le volverá a preguntar a menos que borre los datos de su navegador.</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.4. Cómo rechazar o eliminar cookies</h3>
            <p>Puede rechazar las cookies directamente desde nuestro banner de consentimiento. También puede:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Configurar su navegador</strong> para rechazar todas las cookies o alertarle cuando se envíe una cookie</li>
              <li><strong>Eliminar cookies existentes</strong> desde la configuración de su navegador</li>
              <li><strong>Desactivar Google Analytics</strong> instalando el complemento de inhabilitación: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.5. Transferencia internacional de datos</h3>
            <p>Google Analytics es proporcionado por Google LLC (EE.UU.). Google procesa los datos en nombre de ROVIJ ASOCIADOS SL de acuerdo con las cláusulas contractuales tipo de la UE y el Marco de Privacidad de Datos UE-EE.UU. (EU-U.S. Data Privacy Framework).</p>
            <p className="mt-2">Más información:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Política de privacidad de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
              <li>Términos de Google Analytics: <a href="https://marketingplatform.google.com/about/analytics/terms/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://marketingplatform.google.com/about/analytics/terms/</a></li>
            </ul>
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
