import React, { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

export const Footer: React.FC = () => {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-[#002542] text-slate-300 pt-16 pb-24 md:pb-14 border-t border-[#013C68]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Identity & Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-block" title="Cerrajerías Zamudio">
              {!logoFailed ? (
                <img
                  src="https://cerrajeriazamudio.mx/assets/images/logo-673x128.png"
                  alt="Logo de Cerrajerías Zamudio, cerrajería en Guadalajara"
                  width={210}
                  height={40}
                  className="h-10 w-auto object-contain brightness-110"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="flex items-center gap-2 text-white">
                  <div className="w-9 h-9 rounded-lg bg-[#F39C12] text-slate-950 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-lg text-white">
                      CERRAJERÍAS ZAMUDIO
                    </span>
                    <span className="block text-[10px] font-accent uppercase text-[#FCC73E] font-semibold">
                      40 años de experiencia
                    </span>
                  </div>
                </div>
              )}
            </a>

            <p className="text-sm text-slate-300 leading-relaxed">
              Cerrajería integral y distribución para cerrajeros en la zona metropolitana de Guadalajara, Jalisco.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-[#FCC73E]" />
              <span>Atención telefónica de lunes a sábado</span>
            </div>
          </div>

          {/* Col 2: Teléfonos Cerrajería */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-wide">
              Cerrajería
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Duplicados, programación, cerraduras automotriz, casa y negocio.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+523336571835"
                  onClick={() => trackPhoneClick('+523336571835', 'footer_cerrajeria_1')}
                  className="inline-flex items-center gap-2 text-white hover:text-[#FCC73E] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F39C12]" />
                  <span>(33) 3657 1835</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+523331582769"
                  onClick={() => trackPhoneClick('+523331582769', 'footer_cerrajeria_2')}
                  className="inline-flex items-center gap-2 text-white hover:text-[#FCC73E] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F39C12]" />
                  <span>(33) 3158 2769</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Teléfonos Distribuidora */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-wide flex items-center gap-2">
              <span>Distribuidora</span>
              <span className="text-[10px] font-accent font-bold px-2 py-0.5 rounded bg-[#F39C12] text-slate-950">
                PRO
              </span>
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Forja, cerraduras, refacciones y equipo para cerrajeros.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+523315886810"
                  onClick={() => trackPhoneClick('+523315886810', 'footer_distribuidora_1')}
                  className="inline-flex items-center gap-2 text-white hover:text-[#FCC73E] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F39C12]" />
                  <span>(33) 1588 6810</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+523324245679"
                  onClick={() => trackPhoneClick('+523324245679', 'footer_distribuidora_2')}
                  className="inline-flex items-center gap-2 text-white hover:text-[#FCC73E] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F39C12]" />
                  <span>(33) 2424 5679</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Enlaces y Zona */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-wide">
              Zona y Accesos
            </h3>
            <div className="flex items-start gap-2 text-sm text-slate-300 mb-3">
              <MapPin className="w-4 h-4 text-[#FCC73E] shrink-0 mt-0.5" />
              <span>Zona metropolitana de Guadalajara, Jalisco, México.</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-white transition-colors">Reseñas de clientes</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto directo</a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-white transition-colors">Pedir cotización</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Cerrajerías Zamudio. Todos los derechos reservados.</p>
          <p className="text-slate-400">
            Guadalajara, Jalisco · 40 años cuidando tu seguridad
          </p>
        </div>
      </div>
    </footer>
  );
};
