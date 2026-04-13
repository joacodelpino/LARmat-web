import { useState, useRef } from 'react';
import { benefits } from '../data/benefits';
import { SUCURSALES } from '../data/info';

export default function WhyChooseUs() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMousePos({ x: -9999, y: -9999 });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 bg-secondary relative overflow-hidden"
    >
      {/* Grilla base tenue */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px)',
          }}
        />
      </div>

      {/* Grilla iluminada por cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(85, 7, 7, 0.7) 40px, rgba(85, 7, 7, 0.7) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(85, 7, 7, 0.7) 40px, rgba(85, 7, 7, 0.7) 41px)',
          maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 90%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 90%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
              La diferencia que
              <span className="text-neutral block">marca la experiencia</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed max-w-lg">
              En LAR somos mucho más que una distribuidora. Somos el socio estratégico que tu
              construcción necesita para ser un éxito.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SUCURSALES.capitalDorrego.wppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-support text-white font-bold px-7 py-3.5 rounded-sm transition-colors text-center"
              >
                Contactar ahora
              </a>
              <a
                href="#sucursales"
                className="border border-gray-600 hover:border-neutral text-gray-300 hover:text-neutral font-semibold px-7 py-3.5 rounded-sm transition-all text-center"
              >
                Ver sucursales
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-secondary">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-white/5 border-2 border-white/15 hover:border-primary/100 hover:bg-white/16 rounded-md p-6 transition-all duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-all duration-300 inline-block [filter:drop-shadow(0_0_6px_rgba(242,74,73,0.25))] group-hover:[filter:drop-shadow(0_0_14px_rgba(242,74,73,0.7))]">
                  <benefit.icon size={36} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '+40', label: 'Años en el mercado' },
            { value: '+500', label: 'Productos disponibles' },
            { value: '3', label: 'Sucursales en La Rioja' },
            { value: '100%', label: 'Entregas sin cargo' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-primary font-black text-4xl sm:text-5xl">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
