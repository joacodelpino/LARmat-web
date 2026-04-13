import { useState } from 'react';
import { MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';
import { SUCURSALES, REDES } from '../data/info';
import { milestones, instagramPosts } from '../data/aboutUs';
import Reveal from './Reveal';

export default function AboutUs() {
  const [marqueePaused, setMarqueePaused] = useState(false);

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
            filter: 'grayscale(100%) blur(3px) brightness(0.85)',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop')",
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

      {/* ── Seguinos en redes ────────────────────────────────────────────── */}
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

        {/* Ambient glow orbs en loop */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Instagram & Facebook
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
              Seguinos en <span className="text-neutral">redes</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Mirá nuestros últimos trabajos, novedades y promociones.
            </p>
          </Reveal>
        </div>

        {/* Marquee */}
        <div
          className="relative z-10"
          onMouseEnter={() => setMarqueePaused(true)}
          onMouseLeave={() => setMarqueePaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-4 w-max animate-marquee"
            style={{ animationPlayState: marqueePaused ? 'paused' : 'running' }}
          >
            {[...instagramPosts, ...instagramPosts].map((post, i) => (
              <a
                key={i}
                href={REDES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-56 shrink-0 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium leading-snug line-clamp-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-white/80 text-xs">
                    <Heart size={12} className="fill-primary text-primary" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA redes */}
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </section>
    </>
  );
}
