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
    image: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Ladrillo cerámico hueco ideal para paredes interiores y exteriores.',
  },
  {
    name: 'Ladrillos Portantes',
    category: 'Ladrillos',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Alta resistencia estructural para muros portantes.',
  },
  {
    name: 'Cerámicos de Piso',
    category: 'Revestimientos',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Amplia variedad de formatos y diseños para todo tipo de ambientes.',
  },
  {
    name: 'Paneles para Pared',
    category: 'Construcción en Seco',
    badge: 'Nuevos ingresos',
    badgeType: 'new',
    image: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Sistemas de tabique seco para construcciones rápidas y eficientes.',
  },
  {
    name: 'Losetas Térmicas',
    category: 'Materiales',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Aislación térmica y acústica de alto rendimiento.',
  },
  {
    name: 'Varillas de Hierro',
    category: 'Hierros',
    badge: 'Stock disponible',
    badgeType: 'stock',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&q=80',
    description: 'Varillas corrugadas certificadas para estructuras de hormigón armado.',
  },
];
