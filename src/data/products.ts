export interface Product {
  name: string;
  category: string;
  badge: string;
  badgeType: 'stock' | 'new';
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    name: 'Ladrillos Rapilosa',
    category: 'Ladrillos',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://www.palmarsa.com.ar/multimedia/products/celerlosa/gallery/03.jpg',
    description: 'Ladrillo cerámico hueco ideal para paredes interiores y exteriores.',
  },
  {
    name: 'Ladrillos Portantes',
    category: 'Ladrillos',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://nodomateriales.com/wp-content/uploads/2024/08/05LADR11_1-1.jpg',
    description: 'Alta resistencia estructural para muros portantes.',
  },
  {
    name: 'Cerámicos de Piso',
    category: 'Revestimientos',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg',
    description: 'Amplia variedad de formatos y diseños para todo tipo de ambientes.',
  },
  {
    name: 'Paneles para Pared',
    category: 'Construcción en Seco',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://www.cerrosud.com/wp-content/uploads/2022/09/21-izmir-chiaro.jpg',
    description: 'Sistemas de tabique seco para construcciones rápidas y eficientes.',
  },
  {
    name: 'Losetas Térmicas',
    category: 'Materiales',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://chavezcom.com/baldosones-bordes-atermicos/losetas-baldosones-para-piletas.jpg',
    description: 'Aislación térmica y acústica de alto rendimiento.',
  },
  {
    name: 'Varillas de Hierro',
    category: 'Hierros',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.cerymatlaplata.com.ar/products/5d793ff3620481568227315.jpg',
    description: 'Varillas corrugadas certificadas para estructuras de hormigón armado.',
  },
];
