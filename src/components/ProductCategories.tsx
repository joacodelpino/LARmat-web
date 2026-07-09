'use client';

import { useState } from 'react';
import { CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';

import Reveal from './Reveal';
import { smoothScroll } from '../lib/scroll';


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
                  onClick={() => {
                    // On mobile (no hover), toggle description visibility
                    if (!window.matchMedia('(hover: hover)').matches) {
                      setActiveIdx(activeIdx === i ? null : i);
                    }
                  }}
                >
                  <div className="h-52 sm:h-60 lg:h-64 relative brightness-[0.4] grayscale-[0.5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${active ? 'scale-105' : ''}`}
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i < 3 ? "high" : "auto"}
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
                      className={`text-gray-300 text-xs mt-1 leading-snug transition-all duration-300 ${
                        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
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

        {/* Featured Products Section */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <Reveal className="text-center mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Productos destacados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
              Stock <span className="text-primary">permanente</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Materiales siempre disponibles para que tu obra no se detenga.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i * 60}>
                <div className="group bg-white rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3">
                      {product.badgeType === 'stock' ? (
                        <span className="flex items-center gap-1 bg-black/80 text-neutral text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          <CheckCircle size={12} />
                          {product.badge}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          <Sparkles size={12} />
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-accent text-xs font-semibold px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-secondary font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
                    <a
                      href="#contacto"
                      onClick={(e) => {
                        window.dispatchEvent(new CustomEvent('set-contact-type', { detail: 'retail' }));
                        smoothScroll(e, '#contacto');
                      }}
                      className="flex items-center gap-2 text-primary hover:text-support font-semibold text-sm transition-colors group/link"
                    >
                      <MessageCircle size={16} />
                      Consultar precio
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <a
              href="#contacto"
              onClick={(e) => {
                window.dispatchEvent(new CustomEvent('set-contact-type', { detail: 'retail' }));
                smoothScroll(e, '#contacto');
              }}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Ver catálogo completo
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
