# SonIA HR - Company Website

Sitio web corporativo para SonIA HR, producto de ROVIJ ASOCIADOS SL.

## Requisitos

- Node.js 18+ 
- npm o pnpm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Producción

```bash
npm run build
```

Los archivos listos para producción estarán en la carpeta `dist/`

## Despliegue

El contenido de la carpeta `dist/` puede ser desplegado en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor de hosting estático
- https://sonia-hr.com/

## Estructura

```
src/
├── components/
│   └── Footer.tsx          # Footer con información legal
├── pages/
│   ├── Index.tsx           # Página principal
│   ├── AvisoLegal.tsx      # Aviso legal
│   └── PoliticaPrivacidad.tsx  # Política de privacidad
├── App.tsx                 # Routing principal
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales
```

## Tecnologías

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Lucide React (iconos)
