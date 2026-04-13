import { Phone, MapPin, Clock, FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href="https://wa.me/5493804000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={16} />
              </a>
            </div>
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Sucursales
            </h4>
            <div className="space-y-5">
              {[
                { name: 'Capital', address: 'Av. Principal 1234, La Rioja' },
                { name: 'Parque Industrial', address: 'Zona Industrial, La Rioja' },
                { name: 'Chilecito', address: 'Ruta Nacional 40, Chilecito' },
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
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+5493804000001"
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                (380) 400-0001 — Capital
              </a>
              <a
                href="tel:+5493804000002"
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                (380) 400-0002 — P. Industrial
              </a>
              <a
                href="tel:+5493804000003"
                className="flex items-center gap-3 text-gray-400 hover:text-neutral text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                (380) 400-0003 — Chilecito
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-primary" />
                </div>
                <div>
                  <p>Lun – Vie: 8:00 – 19:00</p>
                  <p>Sábados: 8:00 – 13:00</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5493804000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-primary hover:bg-support text-white text-sm font-bold py-3 px-4 rounded-sm transition-colors justify-center"
            >
              <WhatsappLogo size={16} />
              Escribinos por WhatsApp
            </a>
          </div>
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
