import React from 'react';
import { PhoneCall, Calculator, CheckCircle2, Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface HowItWorksProps {
  onQuoteClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onQuoteClick }) => {
  const steps = [
    {
      number: '1',
      title: 'Llámanos o cotiza aquí',
      description: 'Cuéntanos qué necesitas: llave, control, cerradura.',
      icon: PhoneCall,
    },
    {
      number: '2',
      title: 'Te damos el precio',
      description: 'Cotización clara y transparente antes de empezar cualquier trabajo.',
      icon: Calculator,
    },
    {
      number: '3',
      title: 'Quedas resuelto',
      description: 'Llaves duplicadas y programadas con precisión, cerraduras reparadas.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#F8F9FA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Proceso sin complicaciones
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            Cómo funciona
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div
            className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-amber-300 -z-0"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-full bg-[#013C68] text-white font-accent font-bold text-lg flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C87F0A] flex items-center justify-center border border-amber-200/60">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#013C68] leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+523336571835"
            onClick={() => trackPhoneClick('+523336571835', 'como_funciona_llamar')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all min-h-[48px]"
          >
            <Phone className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>Llamar ahora: (33) 3657 1835</span>
          </a>

          <button
            type="button"
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-accent font-semibold px-6 py-3 text-[#013C68] hover:bg-white rounded-xl border border-slate-200 transition-colors min-h-[48px]"
          >
            Cotizar por formulario
          </button>
        </div>

      </div>
    </section>
  );
};
