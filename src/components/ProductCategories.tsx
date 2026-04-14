import { useState } from 'react';
import { categories } from '../data/categories';
import Reveal from './Reveal';

export default function ProductCategories() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Nuestros productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
            Todo para tu <span className="text-primary">construcción</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Contamos con una amplia variedad de materiales para cada etapa de tu proyecto.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {categories.map((cat, i) => {
            const active = activeIdx === i;
            return (
              <Reveal key={cat.title} delay={i * 60} className="w-[calc(50%-8px)] md:w-[calc(33.333%-14px)] xl:w-[calc(16.666%-17px)]">
                <div
                  className={`relative rounded-sm overflow-hidden cursor-pointer shadow-md transition-all duration-300 w-full ${
                    active ? 'shadow-xl -translate-y-1' : ''
                  }`}
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) setActiveIdx(i);
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia('(hover: hover)').matches) setActiveIdx(null);
                  }}
                >
                  <div className="h-52 sm:h-60 lg:h-64 relative brightness-[0.4] grayscale-[0.5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${active ? 'scale-105' : ''}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>

                  <div className="absolute top-0 left-0 right-0 p-4">
                    <div
                      className="text-primary transition-all duration-300 inline-block"
                      style={{
                        filter: active
                          ? 'drop-shadow(0 0 10px rgba(242,74,73,0.3))'
                          : 'drop-shadow(0 0 6px rgba(242,74,73,0))',
                      }}
                    >
                      <cat.icon size={32} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{cat.title}</h3>
                    <p
                      className={`text-gray-300 text-xs mt-1 leading-snug transition-opacity duration-300 ${
                        active ? 'opacity-100' : 'opacity-100 md:opacity-0'
                      }`}
                    >
                      {cat.description}
                    </p>
                  </div>

                  <div
                    className={`absolute top-0 left-0 w-1 bg-primary transition-all duration-300 ${
                      active ? 'h-full' : 'h-0'
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
