import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { trackPhoneClick, trackQuoteClick } from '../utils/analytics';

interface MobileStickyBarProps {
  onQuoteClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onQuoteClick }) => {
  return (
    <aside
      aria-label="Acciones rápidas móviles"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3.5 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Button 1: Llamar (with soft pulse animation and prominent orange styling) */}
        <a
          href="tel:+523336571835"
          onClick={() => trackPhoneClick('+523336571835', 'barra_fija_movil_llamar')}
          className="min-h-[48px] flex items-center justify-center gap-2 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-sm rounded-xl shadow-xs animate-soft-pulse transition-all transform active:scale-95 border border-[#C87F0A]/30 focus-visible:outline-2 focus-visible:outline-[#013C68]"
        >
          <Phone className="w-4 h-4 fill-slate-950 stroke-none" />
          <span>Llamar ahora</span>
        </a>

        {/* Button 2: Cotizar */}
        <button
          type="button"
          onClick={() => {
            trackQuoteClick('general', 'barra_fija_movil_cotizar');
            onQuoteClick();
          }}
          className="min-h-[48px] flex items-center justify-center gap-2 bg-[#013C68] hover:bg-[#002542] active:bg-[#00172a] text-white font-accent font-bold text-sm rounded-xl shadow-xs transition-all transform active:scale-95 focus-visible:outline-2 focus-visible:outline-[#FCC73E]"
        >
          <FileText className="w-4 h-4 text-[#FCC73E]" />
          <span>Cotizar</span>
        </button>

      </div>
    </aside>
  );
};
