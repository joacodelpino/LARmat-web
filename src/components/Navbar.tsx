'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { SUCURSALES } from '../data/info';
import { events } from '../lib/analytics';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Productos', href: '#productos' },
    { label: 'Sobre nosotros', href: '#sobre-nosotros' },
    { label: 'Sucursales', href: '#sucursales' },
    { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      
      let targetPosition = 0;
      if (targetId) {
        const elem = document.getElementById(targetId);
        if (elem) {
          targetPosition = elem.getBoundingClientRect().top + window.pageYOffset;
        } else {
          return;
        }
      }
      
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 600;
      let start: number | null = null;

      const easeOutCubic = (t: number) => (--t) * t * t + 1;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeOutCubic(progress));

        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, '#')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-primary rounded-sm px-2 py-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(242,74,73,0.3)]">
            <span className="text-white font-black text-xl tracking-tight">LAR</span>
          </div>
          <div>
            <span className="text-white font-bold text-xs sm:text-sm leading-tight block group-hover:text-primary transition-colors duration-300">
              Materiales de
            </span>
            <span className="text-neutral font-bold text-xs sm:text-sm leading-tight block group-hover:text-white transition-colors duration-300">
              Construcción
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-neutral text-[13px] xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href={SUCURSALES.capitalDorrego.wppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => events.whatsappClick('navbar')}
            className="group flex items-center gap-2 bg-primary hover:bg-support text-white text-[13px] xl:text-sm font-bold px-4 xl:px-6 py-2 xl:py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(242,74,73,0.5)] whitespace-nowrap"
          >
            <WhatsappLogo size={18} weight="fill" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden xl:inline">WhatsApp</span>
            <span className="xl:hidden">WP</span>
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-neutral text-base font-medium transition-colors py-1"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SUCURSALES.capitalDorrego.wppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => events.whatsappClick('navbar')}
            className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-sm text-center mt-2"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
