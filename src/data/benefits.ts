import { Award, Headphones as HeadphonesIcon, Truck, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Award,
    title: 'Más de 40 años de experiencia',
    description: 'Décadas de trayectoria nos avalan. Conocemos cada detalle del rubro y las necesidades reales de cada obra.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Asesoramiento personalizado',
    description: 'Nuestro equipo especializado te acompaña desde el presupuesto hasta la entrega para que elijas los materiales correctos.',
  },
  {
    icon: Truck,
    title: 'Envíos sin cargo',
    description: 'Llevamos tus materiales directamente a la obra sin costo adicional. Más comodidad, menos gestión para vos.',
  },
  {
    icon: Package,
    title: 'Amplio stock permanente',
    description: 'Mantenemos inventario constante de los materiales más demandados para que tu obra nunca se detenga.',
  },
];
