import { SUCURSALES } from './info';

export interface Branch {
  name: string;
  address: string;
  phone: string;
  telHref: string;
  wppHref: string;
  mapsHref: string;
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
    mapsHref: SUCURSALES.capitalDorrego.mapsHref,
    hours: 'Lun – Vie: 8:30 – 13:00 y 17:00 – 20:30 | Sáb: 8:00 – 13:00',
    image: 'https://images.pexels.com/photos/26821388/pexels-photo-26821388.jpeg',
    featured: true,
  },
  {
    name: 'Parque Industrial',
    address: SUCURSALES.capitalParqueIndustrial.address,
    phone: SUCURSALES.capitalParqueIndustrial.tel,
    telHref: SUCURSALES.capitalParqueIndustrial.telHref,
    wppHref: SUCURSALES.capitalParqueIndustrial.wppHref,
    mapsHref: SUCURSALES.capitalParqueIndustrial.mapsHref,
    hours: 'Lun – Vie: 8:30 – 17:00 | Sáb: 8:30 – 12:30',
    image: 'https://images.pexels.com/photos/31499725/pexels-photo-31499725.jpeg',
    featured: false,
  },
  {
    name: 'Chilecito',
    address: SUCURSALES.chilecito.address,
    phone: SUCURSALES.chilecito.tel,
    telHref: SUCURSALES.chilecito.telHref,
    wppHref: SUCURSALES.chilecito.wppHref,
    mapsHref: SUCURSALES.chilecito.mapsHref,
    hours: 'Lun – Vie: 8:00 – 18:00 | Sáb: 8:00 – 12:00',
    image: 'https://images.pexels.com/photos/31039719/pexels-photo-31039719.jpeg',
    featured: false,
  },
];
