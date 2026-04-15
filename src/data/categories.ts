import { Layers, Wrench, Grid3x3 as Grid3X3, Bath, Home as HomeIcon, Paintbrush } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    icon: Layers,
    title: 'Materiales de Construcción',
    description: 'Cemento, cal, arena, mezclas y todo lo esencial para tu obra.',
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: Wrench,
    title: 'Hierros y Estructuras',
    description: 'Varillas, mallas, perfiles y estructuras metálicas de alta resistencia.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: Grid3X3,
    title: 'Revestimientos',
    description: 'Cerámicos y porcelanatos para interiores y exteriores de alta calidad.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: Bath,
    title: 'Baños y Grifería',
    description: 'Sanitarios, grifería y accesorios para baños modernos y funcionales.',
    image: 'https://images.pexels.com/photos/7031734/pexels-photo-7031734.jpeg',
  },
  {
    icon: HomeIcon,
    title: 'Construcción en Seco',
    description: 'Paneles, perfiles y sistemas para tabiques y cielorrasos.',
    image: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: Paintbrush,
    title: 'Pinturería',
    description: 'Pinturas, esmaltes, impermeabilizantes y accesorios para todo tipo de superficies.',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
];
