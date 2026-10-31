import React from 'react';
import { Phone, FileText, Award, Star, MapPin } from 'lucide-react';
import { AnimatedKey } from './AnimatedKey';
import { AnimatedCounter } from './AnimatedCounter';
import { trackPhoneClick, trackQuoteClick } from '../utils/analytics';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#013C68] via-[#013359] to-[#012744] text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle background SVG key pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18a6 6 0 1 1-5-3.32V8a2 2 0 1 1 4 0v2h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3v2.68A5.98 5.98 0 0 1 20 18zm-6 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' fill='%23FCC73E' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient radial glows */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#F39C12]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#FCC73E]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCC73E]/15 border border-[#FCC73E]/30 text-[#FCC73E] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FCC73E] animate-pulse" />
              <span>40 años cuidando tu seguridad en Guadalajara</span>
            </div>

            {/* Main H1 - Single H1 on page */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12]">
              Cerrajería y duplicado de llaves en Guadalajara,{' '}
              <span className="text-[#FCC73E] inline-flex items-center gap-1 whitespace-nowrap">
                con <AnimatedCounter target={40} className="font-bold underline decoration-[#F39C12] decoration-4" /> años
              </span>{' '}
              de experiencia
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Llaves con chip, controles, cerraduras de auto, casa y negocio. Atención amable, rápida y a precio justo.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <a
                href="tel:+523336571835"
                onClick={() => trackPhoneClick('+523336571835', 'hero_cta_principal')}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#F39C12]/25 transition-all transform hover:scale-[1.03] active:scale-[0.98] border border-[#FCC73E]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="w-5 h-5 fill-slate-950 stroke-none" />
                <span>Llamar ahora</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  trackQuoteClick('general', 'hero_boton_secundario');
                  onQuoteClick();
                }}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/5 text-white font-accent font-semibold text-base px-6 py-3.5 rounded-xl border border-white/25 backdrop-blur-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCC73E]"
              >
                <FileText className="w-5 h-5 text-[#FCC73E]" />
                <span>Pedir cotización</span>
              </button>
            </div>

            {/* Trust Line with Icons */}
            <div className="pt-4 border-t border-white/15">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="inline-flex items-center gap-1.5 text-white">
                  <Award className="w-4 h-4 text-[#FCC73E] shrink-0" />
                  <span>40 años de experiencia</span>
                </span>
                <span className="text-[#FCC73E] font-bold" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 text-white">
                  <Star className="w-4 h-4 text-[#FCC73E] fill-[#FCC73E] shrink-0" />
                  <span>Reseñas reales de clientes</span>
                </span>
                <span className="text-[#FCC73E] font-bold" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-[#FCC73E] shrink-0" />
                  <span>Zona metropolitana de Guadalajara</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Real Professional Locksmith Imagery */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl backdrop-blur-md">
              
              {/* Badge */}
              <div className="absolute top-6 right-6 z-20 bg-[#F39C12] text-slate-950 text-xs font-accent font-bold px-3 py-1 rounded-full shadow-lg border border-[#FCC73E]">
                TRADICIÓN Y SEGURIDAD
              </div>

              {/* Main Visual Image Card */}
              <div className="relative rounded-xl overflow-hidden shadow-inner border border-white/15 aspect-[4/3] bg-slate-900">
                <img
                  src="/images/hero_cerrajeria.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80') {
                      target.src = 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                  alt="Taller de cerrajería profesional y duplicado de llaves en Guadalajara"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013C68]/90 via-[#013C68]/30 to-transparent" />
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">Duplicados de precisión y chip</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs font-mono text-[11px] text-[#FCC73E]">
                    Est. 1986
                  </span>
                </div>
              </div>

              {/* Key illustration mini bar */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
                  <AnimatedKey />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-[#FCC73E] font-accent font-bold">
                    Cerrajería & Distribuidora
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                    Atención a particulares, talleres y cerrajeros profesionales en toda la zona metropolitana.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
