import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      question: '¿Duplican llaves con chip y controles?',
      answer: 'Sí. Duplicamos, programamos y reparamos llaves con chip y controles.',
    },
    {
      question: '¿Reparan cerraduras de auto?',
      answer: 'Sí. Hacemos reparación y mantenimiento de cerraduras automotriz en general.',
    },
    {
      question: '¿Atienden en toda la zona de Guadalajara?',
      answer: 'Atendemos la zona metropolitana de Guadalajara, Jalisco.',
    },
    {
      question: '¿Venden material para cerrajeros?',
      answer:
        'Sí. Nuestra distribuidora vende forja, cerraduras, refacciones y lo necesario para el cerrajero. Llama al (33) 1588 6810 o (33) 2424 5679.',
    },
    {
      question: '¿Cuánto cuesta duplicar una llave?',
      answer:
        'Depende del tipo de llave y si requiere programación de chip o control. Llámanos o escríbenos en el formulario y te damos el precio exacto al momento.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-[#F8F9FA] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Respuestas directas
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            Preguntas frecuentes
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-[#013C68] hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-[#F39C12] cursor-pointer"
                  >
                    <span className="font-heading text-lg sm:text-xl font-bold pr-4 flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-[#C87F0A] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#013C68] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-[#F39C12]' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className={`px-5 pb-6 sm:px-6 sm:pb-6 text-slate-700 text-base leading-relaxed ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="border-t border-slate-100 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call help banner */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-bold text-[#013C68]">
              ¿Tienes otra duda o necesitas asistencia inmediata?
            </p>
            <p className="text-sm text-slate-600 mt-0.5">
              Te atendemos en el (33) 3657 1835.
            </p>
          </div>
          <a
            href="tel:+523336571835"
            onClick={() => trackPhoneClick('+523336571835', 'faq_banner_llamar')}
            className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#F5B043] text-slate-950 font-accent font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-2xs whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>Llamar ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
