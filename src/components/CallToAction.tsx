import { useState } from 'react';
import { MessageCircle, Phone, HardHat, User, Mail, PhoneCall, Send, CheckCircle } from 'lucide-react';
import { SUCURSALES } from '../data/info';
import Reveal from './Reveal';
import { events } from '../lib/analytics';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', message: '' };

export default function CallToAction() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    events.formSubmit();
    // Simulación frontend — reemplazar con integración real al implementar backend
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setSubmitted(false);
  };

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-primary/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Columna izquierda: CTA ─────────────────────────────────────── */}
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border border-primary/40 rounded-full mb-6">
              <HardHat size={32} className="text-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              ¿Estás por
              <span className="text-primary"> comenzar</span>
              <span className="block">una obra?</span>
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
              Contanos tu proyecto y te ayudamos a conseguir todos los materiales que necesitás.
              <span className="text-neutral font-semibold"> Asesoramiento gratuito.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={SUCURSALES.capitalDorrego.wppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => events.whatsappClick('cta')}
                className="group flex items-center gap-3 bg-primary hover:bg-support text-white font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={22} />
                Escribinos por WhatsApp
              </a>
              <a
                href={SUCURSALES.capitalDorrego.telHref}
                onClick={() => events.phoneClick()}
                className="flex items-center gap-3 border-2 border-neutral text-neutral hover:bg-neutral hover:text-black font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Phone size={20} />
                Llamar ahora
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400">
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
          </Reveal>

          {/* ── Separador vertical (solo desktop) ────────────────────────── */}
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px bg-white/10" />

          {/* ── Columna derecha: Formulario ───────────────────────────────── */}
          <Reveal delay={160}>
            <div className="bg-black/40 border border-white/20 rounded-sm p-8 sm:p-10 backdrop-blur-md">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                  <CheckCircle size={56} className="text-primary" />
                  <h3 className="text-white font-black text-2xl">¡Mensaje recibido!</h3>
                  <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                    Gracias por contactarnos. Te respondemos a la brevedad con toda la información que necesitás.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-sm text-primary hover:text-neutral underline underline-offset-4 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">
                      Contacto directo
                    </span>
                    <h3 className="text-white font-black text-2xl sm:text-3xl mt-1">
                      Envianos un mensaje
                    </h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                      Completá el formulario y nos ponemos en contacto con vos.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    {/* Nombre */}
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre completo"
                        className="w-full bg-white/5 border border-white/20 hover:border-white/40 focus:bg-white/10 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Email y Teléfono en fila */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Correo electrónico"
                          className="w-full bg-white/5 border border-white/20 hover:border-white/40 focus:bg-white/10 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-all duration-200"
                        />
                      </div>
                      <div className="relative">
                        <PhoneCall size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Teléfono (opcional)"
                          className="w-full bg-white/5 border border-white/20 hover:border-white/40 focus:bg-white/10 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Contanos sobre tu proyecto u obra..."
                        className="w-full bg-white/5 border border-white/20 hover:border-white/40 focus:bg-white/10 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm px-4 py-3 outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-support disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 mt-1"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
