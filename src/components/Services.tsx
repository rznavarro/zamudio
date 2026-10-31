import React, { useState } from 'react';
import { Car, Cpu, Home, Building2, Wrench, ArrowRight } from 'lucide-react';
import { trackQuoteClick } from '../utils/analytics';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const services = [
    {
      id: 'automotriz',
      formOption: 'Cerradura de auto',
      title: 'Cerraduras automotriz',
      description: 'Reparación y mantenimiento de cerraduras de auto en general.',
      icon: Car,
      image: '/images/cerradura_auto.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Cerradura y manija automotriz en reparación',
      isFeatured: false,
    },
    {
      id: 'chip-controles',
      formOption: 'Llave con chip o control',
      title: 'Llaves con chip y controles',
      description: 'Duplicado, programación y reparación de llaves con chip.',
      icon: Cpu,
      image: '/images/llave_chip_control.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Llave con chip y control remoto para automóvil',
      isFeatured: false,
    },
    {
      id: 'residencial',
      formOption: 'Casa o negocio',
      title: 'Residencial',
      description: 'Ninguna puerta se nos cierra.',
      icon: Home,
      image: '/images/cerradura_residencial.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Cerradura residencial de seguridad para el hogar',
      isFeatured: false,
    },
    {
      id: 'empresarial',
      formOption: 'Casa o negocio',
      title: 'Empresarial',
      description: 'Programación y reparación de llaves con chip para tu negocio.',
      icon: Building2,
      image: '/images/cerrajeria_empresarial.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Cerrajería y accesos seguros para empresas y comercios',
      isFeatured: false,
    },
    {
      id: 'distribucion',
      formOption: 'Material para cerrajeros',
      title: 'Distribución',
      badge: 'Para cerrajeros',
      description: 'Venta de forja, cerraduras, refacciones y todo lo necesario para el cerrajero.',
      icon: Wrench,
      image: '/images/distribucion_cerrajeros.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Forja, llaves vírgenes y refacciones para cerrajeros',
      isFeatured: true,
    },
  ];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#F8F9FA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Catálogo de servicios profesionales
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            Qué hacemos
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            Soluciones completas de cerrajería en Guadalajara. Elige tu servicio y cotiza en segundos.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((svc) => {
            const Icon = svc.icon;
            const imgSrc = failedImages[svc.id] ? svc.fallbackImage : svc.image;

            return (
              <div
                key={svc.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  svc.isFeatured
                    ? 'bg-white border-2 border-[#F39C12] shadow-lg md:col-span-2 lg:col-span-1 ring-4 ring-[#F39C12]/10'
                    : 'bg-white border border-slate-200 hover:border-[#F39C12] shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={imgSrc}
                    alt={svc.imageAlt}
                    loading="lazy"
                    onError={() => handleImageError(svc.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div
                    className={`absolute bottom-3 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-all duration-300 ${
                      svc.isFeatured
                        ? 'bg-[#F39C12] text-slate-950'
                        : 'bg-white text-[#013C68]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Badge */}
                  {svc.badge && (
                    <span className="absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-accent font-bold bg-[#F39C12] text-slate-950 shadow-md">
                      {svc.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#013C68] leading-tight">
                      {svc.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        trackQuoteClick(svc.title, 'servicios_tarjeta');
                        onSelectService(svc.formOption);
                      }}
                      className={`inline-flex items-center justify-between font-accent font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all min-h-[44px] cursor-pointer w-full ${
                        svc.isFeatured
                          ? 'bg-[#F39C12] hover:bg-[#F5B043] text-slate-950 shadow-xs hover:shadow'
                          : 'bg-slate-100 hover:bg-[#F39C12] text-[#013C68] hover:text-slate-950'
                      }`}
                    >
                      <span>Cotizar este servicio</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
