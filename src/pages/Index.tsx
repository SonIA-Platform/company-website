import { Mail, Bot, FileText, MessageSquare, BarChart3, Cog, Users } from "lucide-react"
import Footer from "@/components/Footer"

const services = [
  {
    icon: Bot,
    title: "Automatización del reclutamiento",
    desc: "Automatiza el filtrado, las respuestas y el seguimiento de candidatos con IA conversacional.",
  },
  {
    icon: FileText,
    title: "Gestión de CVs",
    desc: "Estructura y procesa currículums de forma inteligente para optimizar la selección de talento.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación con candidatos",
    desc: "Gestiona la comunicación multicanal, incluyendo WhatsApp Business, de forma automatizada.",
  },
  {
    icon: BarChart3,
    title: "Análisis de datos de RRHH",
    desc: "Estructura y analiza datos para mejorar la toma de decisiones en tus procesos de selección.",
  },
  {
    icon: Cog,
    title: "Integración de herramientas",
    desc: "Conecta formularios, bases de datos, Google Drive, CRM y más en flujos automáticos.",
  },
  {
    icon: Users,
    title: "Solo para empresas",
    desc: "Nuestros servicios están diseñados exclusivamente para uso empresarial y profesional.",
  },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-primary">
            SonIA<span className="font-light text-muted-foreground"> HR</span>
          </a>
          <a
            href="mailto:hola@sonia-hr.com"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:flex"
          >
            <Mail className="h-4 w-4" /> Contactar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
            Automatización inteligente para Recursos Humanos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            En SonIA desarrollamos soluciones de IA conversacional e integración digital para
            transformar los procesos de RRHH de tu empresa en sistemas automatizados y eficientes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hola@sonia-hr.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Mail className="h-5 w-5" /> hola@sonia-hr.com
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Un producto de <strong>ROVIJ ASOCIADOS SL</strong> · Terrassa, España
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Qué hacemos
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Transformamos procesos tradicionales de RRHH en sistemas automatizados, eficientes y
            basados en inteligencia artificial.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <s.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact banner */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">¿Quieres optimizar tus procesos de RRHH?</h2>
          <p className="mt-2 opacity-80">
            Escríbenos y te contamos cómo podemos ayudarte.
          </p>
          <a
            href="mailto:hola@sonia-hr.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-semibold text-foreground transition hover:opacity-90"
          >
            <Mail className="h-5 w-5" /> hola@sonia-hr.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
