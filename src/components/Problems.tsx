import React from 'react';
import { KeyRound, Lock, DollarSign, Phone, ArrowRight } from 'lucide-react';
import { trackPhoneClick, trackQuoteClick } from '../utils/analytics';

interface ProblemsProps {
  onQuoteClick: (serviceHint?: string) => void;
}

export const Problems: React.FC<ProblemsProps> = ({ onQuoteClick }) => {
  const problems = [
    {
      icon: KeyRound,
      title: 'Perdí mi llave del auto o se dañó el chip',
      solution: 'Duplicamos y programamos llaves con chip y controles.',
      serviceTag: 'Llaves con chip o control',
    },
    {
      icon: Lock,
      title: 'Mi cerradura se atora o no cierra',
      solution: 'Reparamos y damos mantenimiento a cerraduras de auto, casa y negocio.',
      serviceTag: 'Cerradura de auto',
    },
    {
      icon: DollarSign,
      title: 'Necesito más copias sin pagar de más',
      solution: 'Duplicado con precio justo, como dicen nuestros clientes.',
      serviceTag: 'Casa o negocio',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Atención rápida en Guadalajara
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            ¿Te pasó esto? Lo resolvemos hoy
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.title}
                className="group relative bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F39C12] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with rotation on card hover */}
                  <div className="w-13 h-13 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#C87F0A] mb-5 group-hover:bg-[#F39C12] group-hover:text-slate-950 transition-all duration-300 transform group-hover:rotate-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#013C68] leading-snug">
                    {prob.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                    {prob.solution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      trackQuoteClick(prob.serviceTag, 'problemas_tarjeta');
                      onQuoteClick(prob.serviceTag);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-accent font-semibold text-[#013C68] hover:text-[#C87F0A] transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
                  >
                    <span>Cotizar solución</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">Respuesta rápida</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main CTA for Problems Section */}
        <div className="mt-12 text-center">
          <a
            href="tel:+523336571835"
            onClick={() => trackPhoneClick('+523336571835', 'problemas_boton_llamar')}
            className="inline-flex items-center justify-center gap-2.5 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all transform hover:scale-[1.03] active:scale-[0.98] border border-[#C87F0A]/20 min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#013C68]"
          >
            <Phone className="w-5 h-5 fill-slate-950 stroke-none" />
            <span>Llamar ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
};
