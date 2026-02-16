import { useEffect } from 'react';

/**
 * AnalyticsTracker - Integração com Facebook Pixel e Google Analytics
 * - Rastreia eventos de página view, cliques em CTA, etc.
 * - Permite rastreamento de conversão pós-compra
 * 
 * IMPORTANTE: Você precisa adicionar seus IDs:
 * - Facebook Pixel ID: Substitua "SEU_FACEBOOK_PIXEL_ID"
 * - Google Analytics ID: Substitua "SEU_GOOGLE_ANALYTICS_ID"
 */

declare global {
  interface Window {
    fbq?: unknown;
    gtag?: unknown;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  // Rastrear no Facebook Pixel
  if (window.fbq && typeof window.fbq === 'function') {
    (window.fbq as Function)('track', eventName, eventData);
  }

  // Rastrear no Google Analytics
  if (window.gtag && typeof window.gtag === 'function') {
    (window.gtag as Function)('event', eventName, eventData);
  }
}

export function trackCTAClick(buttonName: string) {
  trackEvent('CTA_Click', {
    button_name: buttonName,
    timestamp: new Date().toISOString(),
  });
}

export function trackEmailCapture(email: string) {
  trackEvent('Lead', {
    email: email,
    timestamp: new Date().toISOString(),
  });
}

export function trackPurchaseClick() {
  trackEvent('InitiateCheckout', {
    currency: 'BRL',
    value: 67.00,
    timestamp: new Date().toISOString(),
  });
}

export default function AnalyticsTracker() {
  useEffect(() => {
    // Adicionar Facebook Pixel
    const facebookPixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID || (window as any).__FACEBOOK_PIXEL_ID__;
    if (facebookPixelId) {
      const script = document.createElement('script');
      script.async = true;
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/pt_BR/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }

    // Adicionar Google Analytics
    const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || (window as any).__GOOGLE_ANALYTICS_ID__;
    if (googleAnalyticsId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      const gtag = function (...args: unknown[]) {
        (window.dataLayer as unknown[]).push(args);
      };
      gtag('js', new Date());
      gtag('config', googleAnalyticsId);
      window.gtag = gtag;
    }

    // Rastrear cliques em links de compra
    const purchaseLinks = document.querySelectorAll('a[href*="hotmart.com"]');
    const handlePurchaseClick = () => {
      trackPurchaseClick();
    };

    purchaseLinks.forEach((link) => {
      link.addEventListener('click', handlePurchaseClick);
    });

    return () => {
      purchaseLinks.forEach((link) => {
        link.removeEventListener('click', handlePurchaseClick);
      });
    };
  }, []);

  return null;
}
