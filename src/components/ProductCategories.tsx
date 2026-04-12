import { Layers, Wrench, Grid3x3 as Grid3X3, Bath, Home as HomeIcon } from 'lucide-react';

const categories = [
  {
    icon: <Layers size={32} />,
    title: 'Materiales de Construcción',
    description: 'Cemento, cal, arena, mezclas y todo lo esencial para tu obra.',
    image:
      'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Hierros y Estructuras',
    description: 'Varillas, mallas, perfiles y estructuras metálicas de alta resistencia.',
    image:
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: <Grid3X3 size={32} />,
    title: 'Revestimientos',
    description: 'Cerámicos y porcelanatos para interiores y exteriores de alta calidad.',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: <Bath size={32} />,
    title: 'Baños y Grifería',
    description: 'Sanitarios, grifería y accesorios para baños modernos y funcionales.',
    image:
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    icon: <HomeIcon size={32} />,
    title: 'Construcción en Seco',
    description: 'Paneles, perfiles y sistemas para tabiques y cielorrasos.',
    image:
      'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
];

export default function ProductCategories() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Nuestros productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
            Todo para tu <span className="text-primary">construcción</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Contamos con una amplia variedad de materiales para cada etapa de tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-sm overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-52 sm:h-60 lg:h-64 relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="text-primary mb-2 opacity-90">{cat.icon}</div>
                <h3 className="text-white font-bold text-base leading-tight">{cat.title}</h3>
                <p className="text-gray-300 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
