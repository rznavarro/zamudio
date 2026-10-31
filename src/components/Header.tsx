import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded-md"
            title="Cerrajerías Zamudio - Inicio"
          >
            {!logoFailed ? (
              <img
                src="https://cerrajeriazamudio.mx/assets/images/logo-673x128.png"
                alt="Logo de Cerrajerías Zamudio, cerrajería en Guadalajara"
                width={200}
                height={38}
                className="h-9 sm:h-11 w-auto object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="flex items-center gap-2 text-[#013C68]">
                <div className="w-9 h-9 rounded-lg bg-[#013C68] flex items-center justify-center text-[#FCC73E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-heading font-bold text-lg tracking-wide text-[#013C68]">
                    CERRAJERÍAS ZAMUDIO
                  </span>
                  <span className="block text-[10px] font-accent uppercase tracking-wider text-slate-500 font-semibold">
                    Guadalajara · 40 Años
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#013C68] hover:text-[#C87F0A] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons Right (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onQuoteClick}
              className="text-xs font-accent font-semibold px-3 py-2 text-[#013C68] hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              Pedir cotización
            </button>
            <a
              href="tel:+523336571835"
              onClick={() => trackPhoneClick('+523336571835', 'header_desktop')}
              className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-[#C87F0A]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#013C68]"
            >
              <Phone className="w-4 h-4 fill-slate-950 stroke-none" />
              <span>Llamar: (33) 3657 1835</span>
            </a>
          </div>

          {/* Mobile Right Bar: Direct Call + Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:+523336571835"
              onClick={() => trackPhoneClick('+523336571835', 'header_mobile')}
              className="inline-flex items-center gap-1.5 bg-[#F39C12] hover:bg-[#F5B043] text-slate-950 font-accent font-bold text-xs px-2.5 py-1.5 rounded-md shadow-xs active:scale-95"
              title="Llamar a Cerrajerías Zamudio"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
              <span>Llamar</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#013C68] hover:bg-slate-100 rounded-md focus-visible:outline-2 focus-visible:outline-[#F39C12]"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-base text-[#013C68]" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full text-center py-2.5 px-4 font-accent font-bold text-sm bg-slate-100 hover:bg-slate-200 text-[#013C68] rounded-lg"
              >
                Pedir cotización
              </button>
              <a
                href="tel:+523336571835"
                onClick={() => {
                  trackPhoneClick('+523336571835', 'menu_movil');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 px-4 font-accent font-bold text-sm bg-[#F39C12] hover:bg-[#F5B043] text-slate-950 rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>Llamar ahora: (33) 3657 1835</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
