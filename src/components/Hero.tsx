'use client';

import { MessageCircle, ChevronDown } from 'lucide-react';
import { smoothScroll } from '../lib/scroll';

const larLogo = '/images/LAR Logo+texto blanco.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          filter: "grayscale(100%) brightness(0.65)",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=75&w=1280&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-accent/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center justify-center bg-primary/20 border border-primary/40 text-neutral text-xs sm:text-sm font-semibold px-6 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in text-center">
          <span className="leading-relaxed">
            La Rioja, Argentina. <br className="block sm:hidden" />
            Distribución en toda la provincia
          </span>
        </div>

        <img
          src={larLogo}
          alt="LAR Materiales de Construcción"
          className="mx-auto mb-6 w-40 sm:w-52 lg:w-64 animate-fade-in"
          fetchPriority="high"
        />

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up font-heavy [filter:drop-shadow(1px_1px_2px_rgba(0,0,0,0.40))]">
          Todo lo que tu obra
          <span className="block text-primary font-heavy">necesita,</span>
          <span className="block text-neutral text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 font-heavy">
            en un solo lugar
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Materiales de construcción de primera calidad, asesoramiento experto
          <span className="text-neutral font-semibold"> y entrega sin cargo</span> para tu proyecto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#contacto"
            onClick={(e) => {
              window.dispatchEvent(new CustomEvent('set-contact-type', { detail: 'retail' }));
              smoothScroll(e, '#contacto');
            }}
            className="group flex items-center gap-3 bg-primary hover:bg-support text-white font-bold text-base sm:text-lg px-8 py-4 rounded-sm hover:shadow-xl hover:scale-105  transition-all duration-300"
          >
            <MessageCircle size={22} />
            Consultar por WhatsApp
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              window.dispatchEvent(new CustomEvent('set-contact-type', { detail: 'retail' }));
              smoothScroll(e, '#contacto');
            }}
            className="flex items-center gap-2 ring-2 ring-inset ring-neutral text-neutral hover:bg-neutral hover:text-black font-bold text-base sm:text-lg px-8 py-4 rounded-sm transition-all duration-300"
          >
            Llamar ahora
          </a>
        </div>

        <div className="flex items-start justify-center gap-3 sm:gap-12 mt-14 mb-16 text-center animate-fade-in">
          {[
            { value: '+40', label: 'Años de experiencia' },
            { value: '3', label: 'Sucursales' },
            { value: '100%', label: 'Envíos sin cargo' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-primary font-black text-3xl sm:text-4xl">{stat.value}</span>
              <span className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#productos"
        onClick={(e) => smoothScroll(e, '#productos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-neutral transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
