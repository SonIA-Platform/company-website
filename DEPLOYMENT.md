# Guía de Despliegue - SonIA HR Website

## ✅ Estado del Proyecto

El sitio web está completamente implementado y listo para despliegue. Todos los requisitos de WhatsApp Business están cumplidos.

## Requisitos Previos

1. **Instalar Node.js** (si no está instalado):
   - Descargar desde: https://nodejs.org/
   - Versión recomendada: 18 LTS o superior

## Pasos para Despliegue

### 1. Instalar Dependencias

```bash
cd /Users/pauvilar/SonIA/company-website
npm install
```

### 2. Probar en Desarrollo (Opcional)

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador para ver el sitio.

### 3. Crear Build de Producción

```bash
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos listos para producción.

### 4. Opciones de Despliegue

#### Opción A: Netlify (Recomendado - Más Fácil)

1. Crear cuenta en https://netlify.com
2. Conectar repositorio Git o arrastrar carpeta `dist/`
3. Configurar dominio personalizado: https://sonia-hr.com

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

#### Opción B: Vercel

1. Crear cuenta en https://vercel.com
2. Importar proyecto
3. Vercel detectará automáticamente Vite
4. Configurar dominio personalizado

#### Opción C: GitHub Pages

1. Push código a GitHub
2. En Settings > Pages, seleccionar "GitHub Actions"
3. Usar workflow de Vite

#### Opción D: Hosting Tradicional

1. Subir contenido de la carpeta `dist/` vía FTP/SFTP
2. Configurar servidor para:
   - Servir `index.html` como fallback (para rutas SPA)
   - HTTPS habilitado

### 5. Configuración del Dominio

Una vez desplegado, configurar DNS de `sonia-hr.com` para apuntar al hosting elegido.

## Verificación Post-Despliegue

Antes de solicitar revisión de WhatsApp Business, verificar:

- [ ] El sitio abre correctamente en https://sonia-hr.com
- [ ] No requiere login
- [ ] Las 3 páginas son accesibles:
  - https://sonia-hr.com/
  - https://sonia-hr.com/aviso-legal
  - https://sonia-hr.com/politica-privacidad
- [ ] Email de contacto visible: hola@sonia-hr.com
- [ ] Información legal completa
- [ ] No hay mensajes "en construcción"
- [ ] Funciona en móvil

## Siguiente Paso: WhatsApp Business

**⏰ IMPORTANTE: Esperar 24-48 horas** después del despliegue para que:
1. Los cambios se propaguen
2. Meta cache el contenido actualizado

Luego:
1. Ir a WhatsApp Business Account en Meta Business Manager
2. Verificar que los datos coincidan:
   - Nombre empresa: ROVIJ ASOCIADOS SL
   - Dominio: https://sonia-hr.com
   - Email: hola@sonia-hr.com
   - Actividad empresarial
3. Click "Request review" / "Solicitar revisión"

## Soporte

Para dudas: hola@sonia-hr.com
