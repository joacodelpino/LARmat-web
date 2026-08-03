# LAR Materiales de Construcción — Landing Web

Landing page para **LAR Materiales de Construcción**, empresa familiar con más de 40 años de trayectoria en La Rioja, Argentina.

## Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v3** — estilos y animaciones
- **Lucide React** + **Phosphor Icons** — iconografía
- **Supabase** — base de datos vectorial (pgvector) para el chatbot RAG
- **Gemini AI** — embeddings (`gemini-embedding-2`) y generación de respuestas (`gemini-3.1-flash-lite`)
- **Google Analytics 4** + **Microsoft Clarity** — analíticas
- **pnpm** — gestor de paquetes
- **Vercel** — deployment

## Estructura del proyecto

```
app/
├── api/
│   └── chat/
│       └── route.ts      # Endpoint RAG: embedding → búsqueda vectorial → generación
├── globals.css
├── layout.tsx             # Root layout: metadata SEO, schema.org, GA4, Clarity
└── page.tsx               # Página principal (composición de secciones)

src/
├── assets/                # Imágenes y fuentes (Franklin Gothic)
├── components/            # Componentes de UI
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductCategories.tsx
│   ├── AboutUs.tsx
│   ├── Locations.tsx
│   ├── FrequentQuestions.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx         # Wrapper reutilizable de scroll animations
│   ├── ChatWidget.tsx     # Widget de chat flotante (UI)
│   └── ChatProvider.tsx   # Conecta ChatWidget con la API /api/chat
└── data/                  # Datos desacoplados de los componentes
    ├── aboutUs.ts
    ├── benefits.ts
    ├── branches.ts
    ├── categories.ts
    ├── faq.ts
    ├── info.ts
    ├── products.ts
    └── testimonials.ts

scripts/
└── ingest.ts              # Script de ingestión: genera embeddings y los sube a Supabase
```

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Variables de entorno

Crear un archivo `.env.local` en la raíz con:

```env
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
GEMINI_API_KEY=
```

## Scripts disponibles

| Comando                      | Descripción                                        |
|------------------------------|----------------------------------------------------|
| `pnpm dev`                   | Inicia el servidor de desarrollo                   |
| `pnpm build`                 | Build de producción                                |
| `pnpm start`                 | Inicia el servidor de producción                   |
| `pnpm lint`                  | Linting con ESLint                                 |
| `pnpm typecheck`             | Verificación de tipos con TypeScript               |
| `pnpm tsx scripts/ingest.ts` | Ingesta chunks de conocimiento en Supabase (RAG)   |

## Chatbot RAG

El widget de chat flotante responde preguntas sobre LAR usando **Retrieval-Augmented Generation**:

1. El mensaje del usuario se convierte en un embedding con `gemini-embedding-2`
2. Se buscan los chunks más similares en Supabase via la función `match_lar_chunks` (pgvector)
3. Los chunks recuperados se inyectan como contexto en el prompt de `gemini-3.1-flash-lite`
4. La respuesta generada se devuelve al cliente junto con las fuentes usadas

Para actualizar la base de conocimiento, editar los `CHUNKS` en `scripts/ingest.ts` y ejecutar:

```bash
pnpm tsx scripts/ingest.ts
```

## Flujo de branches

| Branch    | Entorno     | Deploy                       |
|-----------|-------------|------------------------------|
| `develop` | Desarrollo  | Preview automático en Vercel |
| `release` | Staging     | Preview automático en Vercel |
| `main`    | Producción  | Deploy automático en Vercel  |

## Paleta de colores

| Token       | Valor     | Uso                        |
|-------------|-----------|----------------------------|
| `primary`   | `#f24a49` | Rojo — acción y destacados |
| `secondary` | `#000000` | Negro — texto principal    |
| `accent`    | `#74020c` | Rojo oscuro — hover        |
| `neutral`   | `#f2c979` | Dorado — texto secundario  |
