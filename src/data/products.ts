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
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=75&w=600&auto=format&fit=crop',
    description: 'Ladrillo cerámico hueco ideal para paredes interiores y exteriores.',
  },
  {
    name: 'Cemento Loma Negra',
    category: 'Cementos',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=75&w=600&auto=format&fit=crop',
    description: 'Cemento portland en presentacion de 25 y 50kg de alta calidad y versatilidad.',
  },
  {
    name: 'Cerámicos de Piso',
    category: 'Revestimientos',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    description: 'Amplia variedad de formatos y diseños para todo tipo de ambientes.',
  },
  {
    name: 'Paneles para Pared',
    category: 'Construcción en Seco',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=75&w=600&auto=format&fit=crop',
    description: 'Sistemas de tabique seco para construcciones rápidas y eficientes.',
  },
  {
    name: 'Losetas Térmicas',
    category: 'Materiales',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=75&w=600&auto=format&fit=crop',
    description: 'Aislación térmica y acústica de alto rendimiento.',
  },
  {
    name: 'Varillas de Hierro',
    category: 'Hierros',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?q=75&w=600&auto=format&fit=crop',
    description: 'Varillas corrugadas certificadas para estructuras de hormigón armado.',
  },
];
