import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { trackPhoneClick, trackQuoteClick } from '../utils/analytics';

interface FinalCtaProps {
  onQuoteClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onQuoteClick }) => {
  return (
    <section className="bg-[#013C68] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background radial accents */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FCC73E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F39C12]/15 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-accent uppercase tracking-wider text-[#FCC73E] font-bold mb-3">
          40 Años a tu servicio en Guadalajara
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          ¿Necesitas una llave o una cerradura? Llámanos ahora
        </h2>

        <p className="text-base sm:text-lg text-slate-200 mt-4 max-w-xl mx-auto">
          Atendemos particulares, talleres y cerrajeros. Llama directamente y recibe atención inmediata.
        </p>

        {/* Large Orange Call Button */}
        <div className="mt-8">
          <a
            href="tel:+523336571835"
            onClick={() => trackPhoneClick('+523336571835', 'cta_final_boton_grande')}
            className="inline-flex items-center justify-center gap-3 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-lg sm:text-xl px-9 py-4 rounded-xl shadow-xl shadow-black/25 transition-all transform hover:scale-[1.03] active:scale-[0.98] border border-[#FCC73E]/50 min-h-[56px] focus-visible:outline-2 focus-visible:outline-white"
          >
            <Phone className="w-6 h-6 fill-slate-950 stroke-none" />
            <span>Llamar al (33) 3657 1835</span>
          </a>
        </div>

        {/* Secondary anchor to quote form */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() => {
              trackQuoteClick('general', 'cta_final_enlace');
              onQuoteClick();
            }}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base text-slate-300 hover:text-[#FCC73E] transition-colors underline underline-offset-4 decoration-slate-400 hover:decoration-[#FCC73E] focus-visible:outline-2 focus-visible:outline-[#FCC73E] rounded"
          >
            <span>O pide tu cotización</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
