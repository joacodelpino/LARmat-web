import { useState } from 'react';
import { MessageCircle, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import { SUCURSALES, REDES } from '../data/info';
import { TESTIMONIALS } from '../data/testimonials';
import { milestones, instagramPosts } from '../data/aboutUs';
import Reveal from './Reveal';

// ── Component ────────────────────────────────────────────────────────────────
export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [nudging, setNudging] = useState(false);

  const nudge = () => { setNudging(false); requestAnimationFrame(() => { requestAnimationFrame(() => setNudging(true)); }); };

  const prev = () => { nudge(); setDirection('left');  setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { nudge(); setDirection('right'); setCurrent((c) => (c + 1) % TESTIMONIALS.length); };
  const goto = (i: number) => { nudge(); setDirection(i > current ? 'right' : 'left'); setCurrent(i); };

  return (
    <>
      {/* ── Hero banner ──────────────────────────────────────────────────── */}
      <section
        id="sobre-nosotros"
        className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            filter: 'grayscale(100%) brightness(0.7)',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=75&w=1280&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-accent/60" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            LAR Materiales de Construcción
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2 font-heavy [filter:drop-shadow(1px_1px_2px_rgba(0,0,0,0.4))]">
            Sobre <span className="text-primary">nosotros</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Más de 40 años construyendo La Rioja, ladrillo a ladrillo.
          </p>
        </div>
      </section>

      {/* ── Quiénes somos ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="flex flex-col">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">
                Quiénes somos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2 leading-tight">
                Una empresa <span className="text-primary">riojana</span>
                <span className="block">con historia</span>
              </h2>
              <p className="text-gray-500 mt-5 text-base sm:text-lg leading-relaxed">
                LAR Materiales de Construcción es una empresa familiar fundada en La Rioja,
                Argentina. Durante más de cuatro décadas hemos acompañado a constructores,
                arquitectos y familias en cada uno de sus proyectos.
              </p>
              <p className="text-gray-500 mt-4 text-base sm:text-lg leading-relaxed">
                Nos especializamos en la distribución de materiales de construcción de primera
                calidad, con un amplio stock permanente, asesoramiento personalizado y envíos sin
                cargo a toda la provincia.
              </p>
              <a
                href={`${SUCURSALES.capitalDorrego.wppHref}?text=Hola! Quiero saber más sobre LAR Materiales.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 self-start bg-primary hover:bg-support text-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Hablar con nosotros
              </a>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="overflow-hidden rounded-sm shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1517089152318-42ec560349c0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Equipo LAR Materiales de Construcción"
                  className="w-full h-80 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-4 rounded-sm shadow-xl">
                <span className="font-black text-4xl block leading-none">+40</span>
                <span className="text-sm font-semibold mt-1 block">Años de trayectoria</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Trayectoria ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Nuestra historia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
              Décadas de <span className="text-primary">trayectoria</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Cada etapa nos hizo más fuertes y más comprometidos con La Rioja y sus obras.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div className="h-full bg-white border border-gray-100 rounded-sm p-6 shadow-md hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <span className="text-primary font-black text-3xl block leading-none">
                    {m.year}
                  </span>
                  <h3 className="text-secondary font-bold text-base mt-3 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonios ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Grid base tenue */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #f2c979 40px, #f2c979 41px)',
            }}
          />
        </div>

        {/* Ambient glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute rounded-full animate-ambient-orbit will-change-transform"
            style={{
              width: '600px',
              height: '600px',
              top: '5%',
              left: '5%',
              background: 'radial-gradient(circle, rgba(242,74,73,0.18) 0%, rgba(242,74,73,0.06) 45%, transparent 70%)',
            }}
          />
          <div
            className="absolute rounded-full animate-ambient-orbit-alt will-change-transform"
            style={{
              width: '500px',
              height: '500px',
              bottom: '5%',
              right: '5%',
              background: 'radial-gradient(circle, rgba(242,201,121,0.14) 0%, rgba(242,201,121,0.05) 45%, transparent 70%)',
              animationDelay: '-5s',
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
              Lo que dicen <span className="text-neutral">nuestros clientes</span>
            </h2>
          </Reveal>

          {/* Carrusel */}
          <Reveal>
            <div className={`bg-white/5 border border-white/10 rounded-sm p-8 sm:p-10 text-center overflow-hidden transition-all duration-500 ${nudging ? 'animate-card-nudge' : ''}`}>
              <div className="grid grid-cols-1 grid-rows-1 items-center">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={i}
                    className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
                      i === current
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 pointer-events-none ${direction === 'right' ? 'translate-x-20' : '-translate-x-20'}`
                    }`}
                  >
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed italic">
                      "{t.text}"
                    </p>
                    <div className="mt-6">
                      <span className="text-white font-bold block">{t.name}</span>
                      <span className="text-primary text-sm">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="p-2 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goto(i)}
                    aria-label={`Ir al testimonio ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      i === current ? 'bg-primary' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Siguiente"
                className="p-2 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>

          {/* CTA redes */}
          <Reveal>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={REDES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#f77737] hover:opacity-90 text-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Instagram size={18} />
                Seguir en Instagram
              </a>
              <a
                href={REDES.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#1877f2] hover:bg-[#1464d2] text-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Facebook size={18} />
                Seguir en Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
