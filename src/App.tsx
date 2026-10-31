import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { HowItWorks } from './components/HowItWorks';
import { CoverageAndContact } from './components/CoverageAndContact';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Llave con chip o control');

  // Smooth scroll helper to quotation form
  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const element = document.getElementById('cotizar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver for scroll-in animations (fade + slide-up 16px)
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-body relative pb-16 md:pb-0">
      {/* Fixed Header */}
      <Header onQuoteClick={() => scrollToQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onQuoteClick={() => scrollToQuote()} />

        {/* Problemas que resolvemos */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <Problems onQuoteClick={(svc) => scrollToQuote(svc)} />
        </div>

        {/* Servicios */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <Services onSelectService={(svc) => scrollToQuote(svc)} />
        </div>

        {/* Confianza y Reseñas */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <Reviews />
        </div>

        {/* Cómo funciona */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <HowItWorks onQuoteClick={() => scrollToQuote()} />
        </div>

        {/* Zona y Contacto rápido */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <CoverageAndContact />
        </div>

        {/* Preguntas frecuentes */}
        <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <Faq />
        </div>

        {/* CTA Final */}
        <FinalCta onQuoteClick={() => scrollToQuote()} />

        {/* Formulario de Cotización */}
        <QuoteForm initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Bar (Call + Quote) */}
      <MobileStickyBar onQuoteClick={() => scrollToQuote()} />
    </div>
  );
}
