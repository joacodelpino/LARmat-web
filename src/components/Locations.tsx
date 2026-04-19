import { MapPin, Phone, MessageCircle, Clock, Navigation, TrendingUp } from 'lucide-react';
import { branches } from '../data/branches';

import Reveal from './Reveal';
import { smoothScroll } from '../lib/scroll';

export default function Locations() {
  return (
    <section id="sucursales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Dónde encontrarnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
            Nuestras <span className="text-primary">sucursales</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Presentes en los principales puntos de La Rioja para estar cerca de tu obra.
          </p>
        </Reveal>

        {/* Wholesale Section - Highlighted & Moved Up */}
        <Reveal className="mb-16">
          <div className="relative group overflow-hidden bg-secondary rounded-sm p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-l-4 border-primary">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 text-center sm:text-left">
              <div className="shrink-0 w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center border border-primary/20">
                <TrendingUp size={28} />
              </div>
              <div>
                <h3 className="text-white font-black text-xl sm:text-2xl italic tracking-tight uppercase">
                  ¿Necesitás cotización <span className="text-primary">por volumen?</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-md">
                  Ofrecemos precios especiales y atención personalizada para constructoras, grandes obras y proyectos corporativos.
                </p>
              </div>
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                window.dispatchEvent(new CustomEvent('set-contact-type', { detail: 'enterprise' }));
                smoothScroll(e, '#contacto');
              }}
              className="relative z-10 shrink-0 flex items-center gap-3 bg-primary hover:bg-neutral text-white hover:text-secondary font-black px-8 py-4 rounded-sm shadow-lg hover:shadow-neutral/40 duration-300 transition-all hover:-translate-y-1 uppercase text-sm tracking-wider"
            >
              <MessageCircle size={18} weight="fill" />
              Solicitar precios mayoristas
            </a>
          </div>
        </Reveal>

        <div id="sucursales-lista" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, i) => (
            <Reveal key={branch.name} delay={i * 80}>
              <div
                className={`group rounded-sm overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border h-full ${i === branches.length - 1 && branches.length % 2 !== 0
                  ? 'sm:col-span-2 md:col-span-1'
                  : ''
                  } ${branch.featured
                    ? 'border-primary/30 ring-1 ring-primary/20'
                    : 'border-gray-100'
                  }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {branch.featured && (
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Principal
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-black text-xl">Sucursal {branch.name}</h3>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone size={16} className="text-primary shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`${branch.wppHref}?text=Hola! Quiero información sobre la sucursal ${branch.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-support text-white text-sm font-bold py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={16} />
                      Contactar
                    </a>
                    <a
                      href={branch.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-primary text-gray-600 hover:text-primary text-sm font-semibold py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Navigation size={16} />
                      Ubicación
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
