import Footer from '@/components/Footer'
import Header from '@/components/Header'

const EliminacionDatosUsuarios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Instrucciones de Eliminación de Datos de Usuarios
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">1. Derecho de supresión</h2>
            <p>
              En SonIA HR respetamos su derecho a solicitar la eliminación de sus datos personales de
              acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">2. Cómo solicitar la eliminación</h2>
            <p>
              Para solicitar la eliminación de sus datos, debe enviar una petición al correo
              hola@sonia-hr.com con el asunto: <strong>"Solicitud de eliminación de datos"</strong>.
            </p>
            <p>También puede contactar por teléfono para asistencia: +34 931 175 575.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">3. Información necesaria en la solicitud</h2>
            <p>Para gestionar correctamente su solicitud, incluya:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico asociado</li>
              <li>Empresa a la que pertenece (si aplica)</li>
              <li>Descripción clara de la solicitud de eliminación</li>
              <li>Medio de contacto para recibir confirmación</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">4. Verificación de identidad</h2>
            <p>
              Por seguridad, podremos solicitar información adicional para verificar su identidad antes de
              ejecutar la eliminación. Este paso evita accesos o solicitudes no autorizadas.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">5. Plazo de respuesta</h2>
            <p>
              Resolveremos su solicitud en un plazo máximo de 30 días naturales desde su recepción,
              pudiendo ampliarse en casos complejos según la normativa aplicable.
            </p>
            <p>
              Una vez tramitada, le enviaremos confirmación de la eliminación o, en su caso, la explicación
              legal de por qué determinados datos deben conservarse temporalmente.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">6. Limitaciones legales</h2>
            <p>
              Determinados datos podrán mantenerse bloqueados durante el plazo legalmente exigido para el
              cumplimiento de obligaciones fiscales, mercantiles, de seguridad o defensa frente a
              reclamaciones.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">7. Canal de contacto</h2>
            <p>Para ejercer este derecho, puede contactarnos en:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Email: hola@sonia-hr.com</li>
              <li>Teléfono: +34 931 175 575</li>
              <li>Dirección: CALLE SANT MARIAN 145, TERRASSA 08221, España</li>
            </ul>
            <p><strong>Última actualización:</strong> Marzo 2026</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default EliminacionDatosUsuarios
