import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

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
    { label: 'Stock', href: '#stock' },
    { label: 'Por qué elegirnos', href: '#nosotros' },
    { label: 'Sucursales', href: '#sucursales' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-primary rounded-sm px-2 py-1">
            <span className="text-white font-black text-xl tracking-tight">LAR</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-bold text-sm leading-tight block">Materiales de</span>
            <span className="text-neutral font-bold text-sm leading-tight block">Construcción</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-neutral text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+5493804000000"
            className="flex items-center gap-2 text-neutral text-sm font-semibold hover:text-white transition-colors"
          >
            <Phone size={16} />
            <span>(380) 400-0000</span>
          </a>
          <a
            href="https://wa.me/5493804000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-support text-white text-sm font-bold px-4 py-2 rounded-sm transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden text-white"
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
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5493804000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-sm text-center mt-2"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
