export interface Branch {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  featured: boolean;
}

export const branches: Branch[] = [
  {
    name: 'Capital',
    address: 'Av. Principal 1234, La Rioja Capital',
    phone: '(380) 400-0001',
    hours: 'Lun – Vie: 8:00 – 19:00 | Sáb: 8:00 – 13:00',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: true,
  },
  {
    name: 'Parque Industrial',
    address: 'Zona Industrial, La Rioja',
    phone: '(380) 400-0002',
    hours: 'Lun – Vie: 8:00 – 18:00 | Sáb: 8:00 – 12:00',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: false,
  },
  {
    name: 'Chilecito',
    address: 'Ruta Nacional 40, Chilecito, La Rioja',
    phone: '(380) 400-0003',
    hours: 'Lun – Vie: 8:00 – 18:00 | Sáb: 8:00 – 12:00',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    featured: false,
  },
];
