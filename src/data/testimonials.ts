export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Rodríguez',
    role: 'Constructor',
    text: 'Llevo más de 10 años comprando en LAR. El stock siempre disponible y la atención me ahorran tiempo y dolores de cabeza en cada obra.',
  },
  {
    name: 'María González',
    role: 'Arquitecta',
    text: 'La calidad de los materiales es consistente y el asesoramiento del equipo es muy bueno. Mis clientes siempre quedan conformes con los resultados.',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Cliente particular',
    text: 'Reformé toda mi casa con materiales de LAR. Me ayudaron a calcular las cantidades y me entregaron todo en tiempo y forma. Muy recomendable.',
  },
  {
    name: 'Diego Martínez',
    role: 'Maestro mayor de obras',
    text: 'El envío sin cargo a domicilio es un diferencial enorme. En LAR encuentro todo lo que necesito sin moverme de la obra.',
  },
  {
    name: 'Ana Laura Pérez',
    role: 'Diseñadora de interiores',
    text: 'Siempre encuentro lo que busco y a buen precio. El personal conoce los productos y eso facilita mucho la elección para cada proyecto.',
  },
  {
    name: 'Fabián Torres',
    role: 'Contratista',
    text: 'Trabajo con LAR desde hace años porque nunca me fallaron. Buena calidad, buen precio y atención rápida. No cambio.',
  },
];
