import { Phone, MapPin, FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import { SUCURSALES, REDES } from '../data/info';
import Reveal from './Reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Reveal className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-sm px-2 py-1">
                <span className="text-white font-black text-xl tracking-tight">LAR</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm leading-tight block">Materiales de</span>
                <span className="text-neutral font-bold text-sm leading-tight block">Construcción</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Más de 40 años siendo el proveedor de confianza para la construcción en La Rioja,
              Argentina.
            </p>
            <div className="flex gap-3">
              <a
                href={REDES.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookLogo size={16} />
              </a>
              <a
                href={REDES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href={SUCURSALES.capitalDorrego.wppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Productos
            </h4>
            <ul className="space-y-2.5">
              {[
                'Materiales de construcción',
                'Hierros y estructuras',
                'Cerámicos y porcelanatos',
                'Baños y grifería',
                'Construcción en seco',
                'Losetas térmicas',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#productos"
                    className="text-gray-400 hover:text-neutral text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Sucursales
            </h4>
            <div className="space-y-5">
              {[
                { name: 'Capital', address: SUCURSALES.capitalDorrego.address },
                { name: 'Parque Industrial', address: SUCURSALES.capitalParqueIndustrial.address },
                { name: 'Chilecito', address: SUCURSALES.chilecito.address },
              ].map((branch) => (
                <div key={branch.name}>
                  <p className="text-neutral text-sm font-semibold">{branch.name}</p>
                  <div className="flex items-start gap-2 mt-1">
                    <MapPin size={13} className="text-gray-500 mt-0.5 shrink-0" />
                    <p className="text-gray-400 text-xs">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href={SUCURSALES.capitalDorrego.telHref}
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                {SUCURSALES.capitalDorrego.tel} — Capital
              </a>
              <a
                href={SUCURSALES.chilecito.telHref}
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                {SUCURSALES.chilecito.tel} — Chilecito
              </a>
            </div>

            <a
              href={SUCURSALES.capitalDorrego.wppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-primary hover:bg-support text-white text-sm font-bold py-3 px-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 justify-center"
            >
              <WhatsappLogo size={16} />
              Escribinos por WhatsApp
            </a>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} LAR Materiales de Construcción. Todos los derechos reservados.</p>
          <p>La Rioja, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
