import React from 'react';
import { MapPin, Phone, Building, Wrench, Clock, ShieldCheck } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

export const CoverageAndContact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Cobertura y líneas directas
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            Atendemos toda la zona metropolitana de Guadalajara
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-4">
            Zona metropolitana de Guadalajara, Jalisco. Cobertura para Guadalajara, Zapopan, Tlaquepaque, Tonalá y municipios conurbados.
          </p>
        </div>

        {/* Contact Cards Grid: Cerrajería vs Distribuidora */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Cerrajería */}
          <div className="bg-[#F8F9FA] rounded-2xl p-7 sm:p-8 border-2 border-slate-200 hover:border-[#F39C12] transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#013C68] text-[#FCC73E] flex items-center justify-center mb-5 shadow-xs">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#013C68]">
                Cerrajería
              </h3>
              <p className="text-sm text-slate-600 mt-1 mb-6">
                Para autos, casas, negocios, duplicados con chip y controles.
              </p>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-accent uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    Línea principal
                  </span>
                  <a
                    href="tel:+523336571835"
                    onClick={() => trackPhoneClick('+523336571835', 'seccion_contacto_cerrajeria_1')}
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-heading font-bold text-[#013C68] hover:text-[#C87F0A] transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
                  >
                    <Phone className="w-5 h-5 text-[#F39C12] shrink-0" />
                    <span>(33) 3657 1835</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-accent uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    Línea secundaria
                  </span>
                  <a
                    href="tel:+523331582769"
                    onClick={() => trackPhoneClick('+523331582769', 'seccion_contacto_cerrajeria_2')}
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-heading font-bold text-[#013C68] hover:text-[#C87F0A] transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
                  >
                    <Phone className="w-4 h-4 text-[#F39C12] shrink-0" />
                    <span>(33) 3158 2769</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 flex flex-col gap-1.5">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#F39C12]" />
                <span>Zona Metropolitana de Guadalajara, Jal.</span>
              </span>
              <span>Atención técnica directa y cotización inmediata vía telefónica.</span>
            </div>
          </div>

          {/* Card 2: Distribuidora para Cerrajeros */}
          <div className="bg-[#F8F9FA] rounded-2xl p-7 sm:p-8 border-2 border-[#F39C12] transition-all shadow-xs flex flex-col justify-between ring-2 ring-[#F39C12]/10">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F39C12] text-slate-950 flex items-center justify-center shadow-xs">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-accent font-bold px-3 py-1 rounded-full bg-[#013C68] text-white">
                  Para Cerrajeros
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#013C68]">
                Distribuidora
              </h3>
              <p className="text-sm text-slate-600 mt-1 mb-6">
                Venta mayorista de forja, cerraduras, refacciones y equipo.
              </p>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-accent uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    Línea distribuidora 1
                  </span>
                  <a
                    href="tel:+523315886810"
                    onClick={() => trackPhoneClick('+523315886810', 'seccion_contacto_distribuidora_1')}
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-heading font-bold text-[#013C68] hover:text-[#C87F0A] transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
                  >
                    <Phone className="w-5 h-5 text-[#F39C12] shrink-0" />
                    <span>(33) 1588 6810</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-accent uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    Línea distribuidora 2
                  </span>
                  <a
                    href="tel:+523324245679"
                    onClick={() => trackPhoneClick('+523324245679', 'seccion_contacto_distribuidora_2')}
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-heading font-bold text-[#013C68] hover:text-[#C87F0A] transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] rounded"
                  >
                    <Phone className="w-4 h-4 text-[#F39C12] shrink-0" />
                    <span>(33) 2424 5679</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 flex flex-col gap-1.5">
              <span className="font-semibold text-slate-700">Atención a cerrajeros profesionales</span>
              <span>Surtido permanente de llaves vírgenes, carcasas, transponders y herramientas.</span>
            </div>
          </div>

        </div>

        {/* Clean Service Info Badges */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <Clock className="w-5 h-5 text-[#C87F0A] mx-auto mb-2" />
            <span className="text-xs font-accent font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Horario habitual
            </span>
            <span className="text-sm font-semibold text-[#013C68] block">
              Lunes a Sábado
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Atención continua y cotización telefónica
            </span>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <MapPin className="w-5 h-5 text-[#C87F0A] mx-auto mb-2" />
            <span className="text-xs font-accent font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Zona de Cobertura
            </span>
            <span className="text-sm font-semibold text-[#013C68] block">
              Guadalajara y Alrededores
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Zona metropolitana de Jalisco
            </span>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <ShieldCheck className="w-5 h-5 text-[#C87F0A] mx-auto mb-2" />
            <span className="text-xs font-accent font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Garantía de Servicio
            </span>
            <span className="text-sm font-semibold text-[#013C68] block">
              40 Años de Experiencia
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Trabajo garantizado y precio justo
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
