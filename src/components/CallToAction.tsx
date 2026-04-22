import { useState, useEffect } from 'react';

import { MessageCircle, HardHat, User, Mail, PhoneCall, Send, CheckCircle, Briefcase, ShoppingBag } from 'lucide-react';

import Reveal from './Reveal';
import { events } from '../lib/analytics';
import { smoothScroll } from '../lib/scroll';

type ClientType = 'retail' | 'enterprise';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', message: '' };

export default function CallToAction() {
  const [clientType, setClientType] = useState<ClientType>('retail');
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isEnterprise = clientType === 'enterprise';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    events.formSubmit();
    // Simulación frontend
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setSubmitted(false);
  };

  useEffect(() => {
    const handleSetType = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && (detail === 'retail' || detail === 'enterprise')) {
        setClientType(detail);
      }
    };
    window.addEventListener('set-contact-type', handleSetType);
    return () => window.removeEventListener('set-contact-type', handleSetType);
  }, []);



  return (
    <section id="contacto" className="relative py-24 overflow-hidden bg-secondary">
      {/* Background Images with Cross-fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isEnterprise ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        }}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isEnterprise ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183191/pexels-photo-3183191.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        }}
      />
      {/* Consistent Dark Overlay */}
      <div className="absolute inset-0 bg-black/85 z-[1]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Type Selector */}
        <div className="flex justify-center mb-16 relative z-10">
          <div className="bg-black/40 backdrop-blur-md p-1 rounded-sm border border-white/10 flex w-full max-w-[280px] sm:max-w-none">
            <button
              onClick={() => setClientType('retail')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-sm text-sm font-bold transition-all duration-300 ${!isEnterprise ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
            >
              <ShoppingBag size={18} />
              Particulares
            </button>
            <button
              onClick={() => setClientType('enterprise')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-sm text-sm font-bold transition-all duration-300 ${isEnterprise ? 'bg-neutral text-black shadow-lg font-black' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Briefcase size={18} />
              Empresas
            </button>
          </div>
        </div>

        <div className={`flex flex-col items-center justify-center ${isEnterprise ? 'max-w-2xl mx-auto' : ''}`}>

          {/* ── Columna izquierda: CTA (Solo en Minorista) ─────────────────── */}
          {!isEnterprise && (
            <div className="transition-all duration-500 text-center max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 border bg-primary/20 border-primary/40 text-primary">
                  <HardHat size={32} />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                  ¿Estás por <span className="text-primary"> comenzar</span>
                  <span className="block">una obra?</span>
                </h2>

                <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
                  Contanos tu proyecto y te ayudamos a conseguir todos los materiales que necesitás con asesoramiento gratuito.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#sucursales-lista"
                    onClick={(e) => smoothScroll(e, '#sucursales-lista')}
                    className="group flex items-center gap-3 bg-primary hover:bg-support text-white font-bold text-lg px-10 py-4 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-105 w-full sm:w-auto justify-center"
                  >
                    <MessageCircle size={22} />
                    Escribinos por WhatsApp
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Respuesta en &lt; 1 hora
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
            </div>
          )}

          {/* ── Columna derecha: Formulario (Solo en Empresas) ─────────────── */}
          {isEnterprise && (
            <div className="transition-all duration-500 w-full">
            <Reveal delay={160} key={clientType}>
              <div className="bg-white/5 border border-white/10 rounded-sm p-8 sm:p-10 backdrop-blur-sm">
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
                      <span className={`text-sm font-bold uppercase tracking-widest ${isEnterprise ? 'text-neutral' : 'text-primary'}`}>
                        {isEnterprise ? 'Canal Corporativo' : 'Contacto directo'}
                      </span>
                      <h3 className="text-white font-black text-2xl sm:text-3xl mt-1">
                        {isEnterprise ? 'Consulta para Empresas' : 'Envianos un mensaje'}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Completá el formulario y nos ponemos en contacto con vos.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder={isEnterprise ? "Nombre de la empresa / Responsable" : "Nombre completo"}
                          className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-colors duration-200"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="Correo electrónico"
                            className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-colors duration-200"
                          />
                        </div>
                        <div className="relative">
                          <PhoneCall size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm pl-10 pr-4 py-3 outline-none transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder={isEnterprise ? "Detalle de los materiales o licitación..." : "Contanos sobre tu proyecto u obra..."}
                          className="w-full bg-white/10 border border-white/15 hover:border-white/30 focus:border-primary text-white placeholder-gray-400 text-sm rounded-sm px-4 py-3 outline-none transition-colors duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className={`flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mt-1 ${isEnterprise ? 'bg-secondary hover:bg-neutral hover:text-black shadow-neutral/20' : 'bg-primary hover:bg-support shadow-primary/20'
                          }`}
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
                            Enviar consulta {isEnterprise ? 'corporativa' : ''}
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        )}

        </div>
      </div>
    </section>
  );
}
