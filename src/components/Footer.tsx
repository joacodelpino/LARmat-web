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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 mb-4 group cursor-pointer w-fit"
            >
              <div className="bg-primary rounded-sm px-2 py-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(242,74,73,0.3)]">
                <span className="text-white font-black text-xl tracking-tight">LAR</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm leading-tight block group-hover:text-primary transition-colors duration-300">
                  Materiales de
                </span>
                <span className="text-neutral font-bold text-sm leading-tight block group-hover:text-white transition-colors duration-300">
                  Construcción
                </span>
              </div>
            </a>
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
                { name: 'Capital', address: SUCURSALES.capitalDorrego.address, href:SUCURSALES.capitalDorrego.mapsHref},
                { name: 'Parque Industrial', address: SUCURSALES.capitalParqueIndustrial.address, href:SUCURSALES.capitalParqueIndustrial.mapsHref },
                { name: 'Chilecito', address: SUCURSALES.chilecito.address, href:SUCURSALES.chilecito.mapsHref},
              ].map((branch) => (
                <a
                  key={branch.name}
                  href={branch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group transition-colors"
                >
                  <p className="text-neutral text-sm font-semibold group-hover:text-primary transition-colors">
                    {branch.name}
                  </p>
                  <div className="flex items-start gap-2 mt-1">
                    <MapPin size={13} className="text-gray-500 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                    <p className="text-gray-400 text-xs group-hover:text-neutral transition-colors underline-offset-4 group-hover:underline">
                      {branch.address}
                    </p>
                  </div>
                </a>
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
                {SUCURSALES.capitalDorrego.tel} — Capital. Dorrego, 199.
              </a>

              <a
                href={SUCURSALES.capitalParqueIndustrial.telHref}
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                {SUCURSALES.capitalParqueIndustrial.tel} — Capital. Av. Matienzo S/N.
              </a>

              <a
                href={SUCURSALES.chilecito.telHref}
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                {SUCURSALES.chilecito.tel} — Chilecito. La Plata, 403.
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
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-neutral transition-colors duration-200">Política de privacidad</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-neutral transition-colors duration-200">Términos y condiciones</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-neutral transition-colors duration-200">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
