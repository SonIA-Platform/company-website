import Footer from '@/components/Footer'
import Header from '@/components/Header'

const CondicionesServicio = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="container mx-auto max-w-4xl px-4 py-16">
				<h1 className="mb-8 text-4xl font-bold text-foreground">Condiciones de Servicio</h1>

				<div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">1. Información general</h2>
						<p>
							Las presentes Condiciones de Servicio regulan el acceso y uso de los servicios ofrecidos por
							ROVIJ ASOCIADOS SL a través del sitio web de SonIA HR.
						</p>
						<ul className="list-disc space-y-2 pl-6">
							<li><strong>Titular:</strong> ROVIJ ASOCIADOS SL</li>
							<li><strong>CIF:</strong> B59200550</li>
							<li><strong>Domicilio:</strong> CALLE SANT MARIAN 145, TERRASSA 08221, España</li>
							<li><strong>Email:</strong> hola@sonia-hr.com</li>
							<li><strong>Teléfono:</strong> +34 931 175 575</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">2. Ámbito de los servicios</h2>
						<p>
							SonIA HR ofrece soluciones de automatización para procesos de recursos humanos orientadas a
							clientes empresariales.
						</p>
						<p>
							Los servicios están dirigidos exclusivamente a empresas y profesionales, y no al consumo
							particular.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">3. Aceptación de las condiciones</h2>
						<p>
							El acceso al sitio web y/o la contratación de servicios implica la aceptación plena de estas
							Condiciones de Servicio, así como del Aviso Legal y la Política de Privacidad.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">4. Obligaciones del cliente</h2>
						<p>El cliente se compromete a:</p>
						<ul className="list-disc space-y-2 pl-6">
							<li>Facilitar información veraz y actualizada para la correcta prestación del servicio.</li>
							<li>Utilizar los servicios conforme a la ley, la buena fe y las presentes condiciones.</li>
							<li>No emplear la plataforma para fines ilícitos o que vulneren derechos de terceros.</li>
							<li>Custodiar adecuadamente sus credenciales de acceso y notificar cualquier uso no autorizado.</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">5. Propiedad intelectual</h2>
						<p>
							El software, los contenidos, la marca SonIA HR y cualquier elemento asociado a los servicios
							son titularidad de ROVIJ ASOCIADOS SL o de terceros licenciantes.
						</p>
						<p>
							Salvo autorización expresa, no se permite su reproducción, distribución, transformación o
							explotación por parte del cliente.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">6. Responsabilidad y disponibilidad</h2>
						<p>
							ROVIJ ASOCIADOS SL aplicará medidas razonables para garantizar la continuidad y seguridad de
							los servicios, sin que pueda asegurar la disponibilidad ininterrumpida en todo momento.
						</p>
						<p>
							No será responsable de interrupciones debidas a causas ajenas, fuerza mayor, incidencias de
							terceros proveedores o actuaciones incorrectas del cliente.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">7. Protección de datos</h2>
						<p>
							El tratamiento de datos personales se rige por lo establecido en la Política de Privacidad de
							este sitio web y por la normativa vigente aplicable en materia de protección de datos.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">8. Modificaciones</h2>
						<p>
							ROVIJ ASOCIADOS SL podrá actualizar estas Condiciones de Servicio cuando resulte necesario por
							razones legales, técnicas u operativas.
						</p>
						<p>
							Las nuevas condiciones serán publicadas en esta misma página, indicando su fecha de última
							actualización.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">9. Legislación y jurisdicción</h2>
						<p>
							Estas condiciones se rigen por la legislación española. Para la resolución de controversias,
							las partes se someten a los Juzgados y Tribunales que correspondan conforme a la normativa
							aplicable.
						</p>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-bold text-foreground">10. Contacto</h2>
						<p>
							Para cualquier consulta relacionada con estas Condiciones de Servicio, puede escribirnos a
							hola@sonia-hr.com.
						</p>
						<p><strong>Última actualización:</strong> Marzo 2026</p>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default CondicionesServicio
