import { MessageCircle, Phone, HardHat } from 'lucide-react';

export default function CallToAction() {
  return (
    <section
      id="contacto"
      className="relative py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-support/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border border-primary/40 rounded-full mb-6">
          <HardHat size={32} className="text-primary" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-4">
          ¿Estás por
          <span className="text-primary"> comenzar</span>
          <span className="block">una obra?</span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Contanos tu proyecto y te ayudamos a conseguir todos los materiales que necesitás.
          <span className="text-neutral font-semibold"> Asesoramiento gratuito.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5493804000000?text=Hola! Estoy por comenzar una obra y necesito asesoramiento."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-primary hover:bg-support text-white font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} className="group-hover:animate-bounce" />
            Escribinos por WhatsApp
          </a>
          <a
            href="tel:+5493804000000"
            className="flex items-center gap-3 border-2 border-neutral text-neutral hover:bg-neutral hover:text-black font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            Llamar ahora
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Respuesta en menos de 1 hora
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Presupuesto sin compromiso
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Entrega sin cargo
          </div>
        </div>
      </div>
    </section>
  );
}
