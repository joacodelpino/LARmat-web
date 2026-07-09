# LAR Materiales de Construcción — Landing Web

Landing page para **LAR Materiales de Construcción**, empresa familiar con más de 40 años de trayectoria en La Rioja, Argentina.

## Stack

- **React 18** + **TypeScript**
- **Vite** — bundler y dev server
- **Tailwind CSS v3** — estilos y animaciones
- **Lucide React** + **Phosphor Icons** — iconografía
- **Vercel** — deployment

## Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes de UI
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductCategories.tsx
│   ├── FeaturedProducts.tsx
│   ├── WhyChooseUs.tsx
│   ├── AboutUs.tsx
│   ├── Locations.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx   # Wrapper reutilizable de scroll animations
└── data/            # Datos desacoplados de los componentes
    ├── aboutUs.ts
    ├── benefits.ts
    ├── branches.ts
    ├── categories.ts
    ├── info.ts
    └── products.ts
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Scripts disponibles

| Comando           | Descripción                        |
|-------------------|------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo   |
| `npm run build`   | Build de producción                |
| `npm run preview` | Preview del build localmente       |
| `npm run lint`    | Linting con ESLint                 |

## Flujo de branches

| Branch    | Entorno     | Deploy                       |
|-----------|-------------|------------------------------|
| `develop` | Desarrollo  | Preview automático en Vercel |
| `release` | Staging     | Preview automático en Vercel |
| `main`    | Producción  | Deploy automático en Vercel  |

## Paleta de colores

| Token       | Valor     | Uso                         |
|-------------|-----------|-----------------------------|
| `primary`   | `#f24a49` | Rojo — acción y destacados  |
| `secondary` | `#000000` | Negro — texto principal     |
| `accent`    | `#582b02` | Marrón — degradados         |
| `support`   | `#74020c` | Rojo oscuro — hover         |
| `neutral`   | `#f2c979` | Dorado — texto secundario   |
