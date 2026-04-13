import { categories } from '../data/categories';

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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-sm overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[calc(50%-8px)] md:w-[calc(33.333%-14px)] xl:w-[calc(16.666%-17px)]"
            >
              <div className="h-52 sm:h-60 lg:h-64 relative brightness-[0.4] grayscale-[0.5]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Degradado base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Degradado extra en hover/active para más contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Icono arriba */}
              <div className="absolute top-0 left-0 right-0 p-4">
                <div className="text-primary transition-all duration-300 inline-block [filter:drop-shadow(0_0_6px_rgba(242,74,73,0))] group-hover:[filter:drop-shadow(0_0_10px_rgba(242,74,73,0.3))]">
                  <cat.icon size={32} />
                </div>
              </div>
              {/* Texto abajo */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{cat.title}</h3>
                <p className="text-gray-300 text-xs mt-1 leading-snug opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
