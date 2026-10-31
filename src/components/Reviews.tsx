import React from 'react';
import { Quote, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      author: 'Fatima Sanchez Graciliano',
      comment: 'Bien surtido, amables y con una gran experiencia.',
      initials: 'FS',
    },
    {
      author: 'Mariana Fausto',
      comment: 'Muy buen servicio, amables, rápidos y precio justo.',
      initials: 'MF',
    },
    {
      author: 'Hernandez Carlos Omar',
      comment: 'Muy eficientes, gran variedad en tipos de llaves.',
      initials: 'HC',
    },
  ];

  const galleryItems = [
    {
      title: 'Duplicado de precisión',
      desc: 'Corte exacto en llaves residenciales y automotrices.',
      image: '/images/taller_duplicado.jpg',
      fallback: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Llaves con chip y mandos',
      desc: 'Duplicado y programación electrónica para vehículos.',
      image: '/images/programacion_chip.jpg',
      fallback: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Cerraduras de seguridad',
      desc: 'Instalación y mantenimiento preventivo y correctivo.',
      image: '/images/cerradura_residencial.jpg',
      fallback: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Distribución mayorista',
      desc: 'Forja, carcasas, transponders y herramienta cerrajera.',
      image: '/images/distribucion_cerrajeros.jpg',
      fallback: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section id="resenas" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Opiniones comprobadas
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            40 años. Clientes que lo cuentan
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
        </div>

        {/* Single Permitted Stat Block: "40 años" */}
        <div className="max-w-xl mx-auto mb-12 text-center bg-gradient-to-r from-amber-50/70 via-amber-100/50 to-amber-50/70 border border-amber-200/80 rounded-2xl p-6 shadow-xs">
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <ShieldCheck className="w-6 h-6 text-[#C87F0A]" />
            <span className="font-heading text-3xl sm:text-4xl font-bold text-[#013C68]">
              40 AÑOS
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-700">
            De trayectoria continua en cerrajería automotriz, residencial, comercial y distribución en Guadalajara.
          </p>
        </div>

        {/* Real Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#F39C12] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FCC73E] mb-4 opacity-75" />
                <p className="text-slate-800 text-base sm:text-lg italic font-normal leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#013C68] text-[#FCC73E] font-accent font-bold text-sm flex items-center justify-center shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-sm text-[#013C68]">
                    {rev.author}
                  </h3>
                  <span className="text-xs text-slate-500">Cliente de Cerrajerías Zamudio</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase Gallery */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#013C68]">
              Calidad y oficio en cada detalle
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Equipamiento técnico para resolver cualquier necesidad de llaves y cerraduras.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== item.fallback) {
                        target.src = item.fallback;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <h4 className="font-heading font-bold text-base text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: "Nuestra empresa" */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#013C68] text-[#FCC73E] flex items-center justify-center mx-auto mb-4 shadow-xs">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#013C68] mb-3">
            Nuestra empresa
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            "Somos una empresa responsable y comprometida con tu seguridad y bienestar. Te damos un servicio y productos de alta calidad."
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle className="w-4 h-4 text-[#F39C12]" />
              Atención honesta y personalizada
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle className="w-4 h-4 text-[#F39C12]" />
              Técnicos cerrajeros capacitados
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle className="w-4 h-4 text-[#F39C12]" />
              Material de primera calidad garantizado
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
