'use client';

import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { branches } from '../data/branches';
import Reveal from './Reveal';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <Reveal key={branch.name} delay={i * 80}>
              <div
                className={`group rounded-sm overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border h-full ${
                  i === branches.length - 1 && branches.length % 2 !== 0
                    ? 'sm:col-span-2 md:col-span-1'
                    : ''
                } ${
                  branch.featured
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

                  <div className="flex gap-3">
                    <a
                      href={`${branch.wppHref}?text=Hola! Quiero información sobre la sucursal ${branch.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-support text-white text-sm font-bold py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={15} />
                      Contactar
                    </a>
                    <a
                      href={branch.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-primary text-gray-600 hover:text-primary text-sm font-semibold py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Navigation size={15} />
                      Ubicación
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-secondary font-bold text-lg">¿Necesitás cotización por volumen?</h3>
              <p className="text-gray-500 text-sm mt-1">
                Consultanos por precios especiales para grandes obras y proyectos.
              </p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 flex items-center gap-2 bg-secondary hover:bg-primary text-white font-bold px-6 py-3 rounded-sm shadow-xl hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] duration-300 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Consultar precios mayoristas
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
