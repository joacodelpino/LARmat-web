import { benefits } from '../data/benefits';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px)',
          }}
        />
      </div>

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
                href="https://wa.me/5493804000000"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/8 rounded-sm p-6 transition-all duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
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
