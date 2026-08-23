# Vida Ebenezer

Landing page para el negocio de decoración de eventos **Vida Ebenezer**: bodas, cumpleaños y eventos corporativos.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev) como bundler y dev server
- [Tailwind CSS 4](https://tailwindcss.com) con tokens de diseño en `src/index.css`
- ESLint 9 (flat config) + Prettier para calidad y formato de código

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
npm run dev
```

La app corre en `http://localhost:5173`.

## Scripts

| Comando                | Descripción                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con recarga en caliente |
| `npm run build`        | Build de producción en `dist/`                 |
| `npm run preview`      | Sirve el build localmente                      |
| `npm run lint`         | Análisis estático con ESLint                   |
| `npm run typecheck`    | Verificación de tipos sin emitir archivos      |
| `npm run format`       | Formatea el código con Prettier                |
| `npm run format:check` | Verifica el formato sin modificar archivos     |

Antes de cada commit se recomienda correr:

```bash
npm run lint && npm run typecheck && npm run build
```

## Estructura

```
├── public/                  # Archivos estáticos servidos desde la raíz
│   └── hero-image.jpg       # Imagen principal del hero
├── src/
│   ├── components/          # Un componente por sección de la página
│   │   ├── Nav.tsx          # Header fijo (transparente arriba, sólido al scroll)
│   │   ├── Hero.tsx
│   │   ├── Services.tsx     # Servicios
│   │   ├── MoodBoard.tsx    # Paleta e inspiración
│   │   ├── Gallery.tsx      # Galería con lightbox
│   │   ├── About.tsx        # Nosotros
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── Contact.tsx      # Formulario multipaso
│   │   ├── Footer.tsx
│   │   └── Lightbox.tsx
│   ├── data/
│   │   ├── business.ts      # ← Datos reales del negocio (editar aquí)
│   │   └── content.ts       # Textos de servicios, FAQs, testimonios, etc.
│   ├── index.css            # Tokens de diseño (@theme) y estilos globales
│   ├── App.tsx              # Composición de secciones
│   └── main.tsx
├── eslint.config.js
├── vite.config.ts
└── tsconfig.json
```

## Personalización

### 1. Datos del negocio

Edita `src/data/business.ts`: nombre, ciudad, teléfono, correo, dirección, horarios y año de fundación. Los valores entre `[corchetes]` son marcadores pendientes.

### 2. Contenido

Servicios, preguntas frecuentes, testimonios, tipos de evento y textos de la galería viven en `src/data/content.ts`.

### 3. Colores y tipografía

La paleta completa está definida una sola vez en `@theme` dentro de `src/index.css`. Cambiar un valor ahí actualiza toda la web (ej. `--color-primary`). Las fuentes se cargan al inicio del mismo archivo.

### 4. Imágenes

Reemplaza las fotos de ejemplo (Unsplash) por fotografías reales de tus trabajos. El hero usa `public/hero-image.jpg`.

## Despliegue

El build genera sitios estáticos en `dist/`, compatible con cualquier hosting estático.

### Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com): **Add New → Project** e importa el repo.
3. Vercel detecta Vite automáticamente (build: `npm run build`, output: `dist`). Deploy.

### Netlify

1. Sube el repositorio a GitHub.
2. En [netlify.com](https://netlify.com): **Add new site → Import an existing project**.
3. Netlify detecta Vite automáticamente (build: `npm run build`, publish: `dist`). Deploy.

### Conectar remoto de Git

```bash
git remote add origin https://github.com/<usuario>/vida-ebenezer.git
git push -u origin main
```
