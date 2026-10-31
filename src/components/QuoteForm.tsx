import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { trackFormSubmission } from '../utils/analytics';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Llave con chip o control');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Simple Mexican phone validation (at least 10 digits)
    const cleanedPhone = phone.replace(/\D/g, '');
    if (!name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre.');
      return;
    }
    if (cleanedPhone.length < 8) {
      setErrorMessage('Por favor ingresa un número de teléfono válido (mínimo 10 dígitos).');
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission to configured endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      trackFormSubmission({
        name: name.trim(),
        phone: phone.trim(),
        service,
      });
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setErrorMessage('');
  };

  return (
    <section id="cotizar" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-accent uppercase tracking-wider text-[#C87F0A] font-bold">
            Respuesta en minutos
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#013C68] mt-2">
            Pide tu cotización
          </h2>
          <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Completa estos 3 datos y nos comunicamos contigo con el precio exacto.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#013C68]">
                Listo. Te llamamos pronto.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                Hemos recibido tu solicitud para <span className="font-semibold text-slate-900">{service}</span> al teléfono <span className="font-semibold text-slate-900">{phone}</span>. Un cerrajero de nuestro equipo se comunicará contigo a la brevedad.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-accent font-semibold text-[#013C68] hover:text-[#C87F0A] underline underline-offset-4 cursor-pointer"
                >
                  Enviar otra cotización
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Field 1: Nombre */}
              <div>
                <label htmlFor="quote-name" className="block text-xs sm:text-sm font-accent font-semibold text-[#013C68] mb-1.5">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F39C12] focus:border-transparent text-sm sm:text-base transition-all"
                />
              </div>

              {/* Field 2: Teléfono */}
              <div>
                <label htmlFor="quote-phone" className="block text-xs sm:text-sm font-accent font-semibold text-[#013C68] mb-1.5">
                  Teléfono de contacto (10 dígitos) <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. (33) 1234 5678"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F39C12] focus:border-transparent text-sm sm:text-base transition-all"
                />
              </div>

              {/* Field 3: ¿Qué necesitas? */}
              <div>
                <label htmlFor="quote-service" className="block text-xs sm:text-sm font-accent font-semibold text-[#013C68] mb-1.5">
                  ¿Qué necesitas? <span className="text-red-500">*</span>
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F39C12] focus:border-transparent text-sm sm:text-base transition-all"
                >
                  <option value="Llave con chip o control">Llave con chip o control</option>
                  <option value="Cerradura de auto">Cerradura de auto</option>
                  <option value="Casa o negocio">Casa o negocio</option>
                  <option value="Material para cerrajeros">Material para cerrajeros</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#F39C12] hover:bg-[#F5B043] active:bg-[#C87F0A] text-slate-950 font-accent font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#013C68]"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-slate-950" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Pedir cotización</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Reassurance */}
              <div className="pt-3 text-center border-t border-slate-200/60 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F39C12]" />
                <span>Tus datos se usan únicamente para responder a tu cotización directa.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
