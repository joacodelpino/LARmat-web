export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface InstagramPost {
  image: string;
  likes: number;
  caption: string;
}

export const milestones: Milestone[] = [
  {
    year: '1980',
    title: 'Nuestros inicios',
    description:
      'LAR nació en La Rioja con una pequeña distribuidora familiar, apostando al crecimiento de la región y sus constructores.',
  },
  {
    year: '1990s',
    title: 'Expansión regional',
    description:
      'Ampliamos stock y llegamos a nuevos barrios y localidades, consolidándonos como referentes del sector.',
  },
  {
    year: '2000s',
    title: 'Nuevas sucursales',
    description:
      'Abrimos nuevos puntos de venta para estar más cerca de cada obra, reduciendo tiempos y costos logísticos.',
  },
  {
    year: 'Hoy',
    title: '+40 años de experiencia',
    description:
      'Somos referentes del rubro con 3 sucursales, más de 500 productos y miles de clientes satisfechos en toda la provincia.',
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop',
    likes: 87,
    caption: 'Stock completo para tu próxima obra',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop',
    likes: 134,
    caption: 'Calidad en cada entrega',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop',
    likes: 61,
    caption: 'Materiales para grandes proyectos',
  },
  {
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop',
    likes: 109,
    caption: 'Tu obra en las mejores manos',
  },
  {
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=400&auto=format&fit=crop',
    likes: 93,
    caption: 'Asesoramiento experto sin costo',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop',
    likes: 152,
    caption: 'Construimos La Rioja juntos',
  },
];
