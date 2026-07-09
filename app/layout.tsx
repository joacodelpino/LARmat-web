import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'LAR Materiales de Construcción | La Rioja, Argentina',
  description:
    'Materiales de construcción de primera calidad en La Rioja, Argentina. Ladrillos, cerámicos, hierros, revestimientos y más. Envíos sin cargo.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://larmateriales.com.ar',
  },
  openGraph: {
    type: 'website',
    url: 'https://larmateriales.com.ar',
    title: 'LAR Materiales de Construcción | La Rioja, Argentina',
    description:
      'Todo lo que tu obra necesita, en un solo lugar. Ladrillos, cerámicos, hierros, revestimientos y más. Envíos sin cargo a toda La Rioja.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=75&w=1280&auto=format&fit=crop',
      },
    ],
    locale: 'es_AR',
    siteName: 'LAR Materiales de Construcción',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAR Materiales de Construcción | La Rioja, Argentina',
    description:
      'Todo lo que tu obra necesita, en un solo lugar. Envíos sin cargo a toda La Rioja.',
    images: [
      'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=75&w=1280&auto=format&fit=crop',
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'LAR Materiales de Construcción',
  description:
    'Materiales de construcción de primera calidad en La Rioja, Argentina. Más de 40 años de trayectoria.',
  url: 'https://larmateriales.com.ar',
  logo: 'https://larmateriales.com.ar/favicon.png',
  image:
    'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=75&w=1280&auto=format&fit=crop',
  telephone: '+5493804324279',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dorrego 199 esq. Vélez Sarsfield',
    addressLocality: 'La Rioja',
    addressRegion: 'La Rioja',
    addressCountry: 'AR',
  },
  sameAs: [
    'https://www.instagram.com/larmateriales/',
    'https://www.facebook.com/LarMaterialeslr/',
  ],
  hasMap: 'https://maps.app.goo.gl/xynEi4vE93NAjbxh7',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5TD28VDGX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y5TD28VDGX');
        `}</Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","wdfnu9xpz6");
        `}</Script>
      </body>
    </html>
  );
}
