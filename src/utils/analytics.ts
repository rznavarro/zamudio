/**
 * Analytics and DataLayer Event Tracker for Cerrajerías Zamudio
 * Compatible with Google Tag Manager (dataLayer) and Google Analytics (gtag).
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  // Ensure dataLayer exists
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    };
    window.dataLayer.push(payload);

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Dev logging for verification
    if (process.env.NODE_ENV !== 'production' || true) {
      console.log(`[Analytics Event] ${eventName}:`, payload);
    }
  }
}

export function trackPhoneClick(phoneNumber: string, location: string) {
  trackEvent('clic_telefono', {
    phone_number: phoneNumber,
    placement: location,
    category: 'conversion',
  });
}

export function trackQuoteClick(serviceName: string, location: string) {
  trackEvent('clic_cotizar_servicio', {
    service_name: serviceName,
    placement: location,
    category: 'lead_intent',
  });
}

export function trackFormSubmission(data: { name: string; phone: string; service: string }) {
  trackEvent('envio_formulario_cotizacion', {
    service_requested: data.service,
    has_name: Boolean(data.name.trim()),
    has_phone: Boolean(data.phone.trim()),
    category: 'conversion_lead',
  });
}
