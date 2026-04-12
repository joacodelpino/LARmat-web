import { MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-accent/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-neutral text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-neutral animate-pulse" />
          La Rioja, Argentina — Distribución en toda la provincia
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
          Todo lo que tu obra
          <span className="block text-primary">necesita,</span>
          <span className="block text-neutral text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            en un solo lugar
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Materiales de construcción de primera calidad, asesoramiento experto
          <span className="text-neutral font-semibold"> y entrega sin cargo</span> para tu proyecto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="https://wa.me/5493804000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-primary hover:bg-support text-white font-bold text-base sm:text-lg px-8 py-4 rounded-sm transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <MessageCircle size={22} className="group-hover:animate-bounce" />
            Consultar por WhatsApp
          </a>
          <a
            href="tel:+5493804000000"
            className="flex items-center gap-2 border-2 border-neutral text-neutral hover:bg-neutral hover:text-black font-bold text-base sm:text-lg px-8 py-4 rounded-sm transition-all duration-300"
          >
            Llamar ahora
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 mt-14 text-center animate-fade-in">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-neutral transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
