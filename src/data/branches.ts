import { SUCURSALES } from './info';

export interface Branch {
  name: string;
  address: string;
  phone: string;
  telHref: string;
  wppHref: string;
  hours: string;
  image: string;
  featured: boolean;
}

export const branches: Branch[] = [
  {
    name: 'Capital',
    address: SUCURSALES.capitalDorrego.address,
    phone: SUCURSALES.capitalDorrego.tel,
    telHref: SUCURSALES.capitalDorrego.telHref,
    wppHref: SUCURSALES.capitalDorrego.wppHref,
    hours: 'Lun – Vie: 8:30 – 13:00 y 17:00 – 20:30 | Sáb: 8:00 – 13:00',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: true,
  },
  {
    name: 'Parque Industrial',
    address: SUCURSALES.capitalParqueIndustrial.address,
    phone: SUCURSALES.capitalParqueIndustrial.tel,
    telHref: SUCURSALES.capitalParqueIndustrial.telHref,
    wppHref: SUCURSALES.capitalParqueIndustrial.wppHref,
    hours: 'Lun – Vie: 8:30 – 17:00 | Sáb: 8:30 – 12:30',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: false,
  },
  {
    name: 'Chilecito',
    address: SUCURSALES.chilecito.address,
    phone: SUCURSALES.chilecito.tel,
    telHref: SUCURSALES.chilecito.telHref,
    wppHref: SUCURSALES.chilecito.wppHref,
    hours: 'Lun – Vie: 8:00 – 18:00 | Sáb: 8:00 – 12:00',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: false,
  },
];
