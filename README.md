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

### Base de conocimiento

La base de conocimiento está compuesta por **17 chunks** de texto con información verificable de LAR:

| Fuente | Contenido |
|---|---|
| `01_Empresa.md` | Historia, valores y trayectoria |
| `02_Sucursales.md` | Direcciones y horarios de las 3 sucursales |
| `03_Productos.md` | Categorías de productos comercializados |
| `04_Marcas.md` | Marcas con las que trabaja LAR |
| `05_Preguntas-frecuentes.md` | Envíos, presupuestos, formas de pago, venta mayorista |
| `07_Contacto.md` | Teléfonos y redes sociales |
| `09_Conocimiento_tecnico.md` | Uso de materiales específicos (membranas, perfiles, adhesivos, etc.) |

### Schema de Supabase

```sql
-- Habilitar pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Tabla de chunks
CREATE TABLE lar_chunks (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content text NOT NULL,
  embedding vector(768),
  source text,
  metadata jsonb
);

-- Índice HNSW para búsqueda eficiente
CREATE INDEX ON lar_chunks USING hnsw (embedding vector_cosine_ops);

-- Función de búsqueda por similitud
CREATE OR REPLACE FUNCTION match_lar_chunks(
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
RETURNS TABLE (id bigint, content text, source text, metadata jsonb, similarity float)
LANGUAGE sql STABLE AS $$
  SELECT id, content, source, metadata,
    1 - (embedding <=> query_embedding) AS similarity
  FROM lar_chunks
  WHERE 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;
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
