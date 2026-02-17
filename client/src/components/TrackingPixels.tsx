import { useEffect } from 'react';

/**
 * Componente de Rastreamento - Facebook Pixel e Google Analytics
 * 
 * Este componente carrega os scripts de rastreamento e registra eventos
 * de conversão em todas as landing pages.
 * 
 * Variáveis de ambiente necessárias:
 * - VITE_FACEBOOK_PIXEL_ID: ID do Facebook Pixel
 * - VITE_GOOGLE_ANALYTICS_ID: ID do Google Analytics (GA4)
 */

export function TrackingPixels() {
  useEffect(() => {
    // Carregar Facebook Pixel
    const facebookPixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
    if (facebookPixelId) {
      // Facebook Pixel Script
      const fbScript = document.createElement('script');
      fbScript.async = true;
      fbScript.defer = true;
      fbScript.crossOrigin = 'anonymous';
      fbScript.src = `https://connect.facebook.net/pt_BR/en_US/fbevents.js`;
      document.head.appendChild(fbScript);

      // Inicializar Facebook Pixel
      const w = window as any;
      w.fbq = w.fbq || function() {
        (w.fbq.q = w.fbq.q || []).push(arguments);
      };
      w.fbq('init', facebookPixelId);
      w.fbq('track', 'PageView');
    }

    // Carregar Google Analytics
    const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (googleAnalyticsId) {
      // Google Analytics Script
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      // Inicializar Google Analytics
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      const gtag = function(...args: any[]) {
        w.dataLayer.push(args);
      };
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_path: window.location.pathname,
      });
      w.gtag = gtag;
    }
  }, []);

  return null;
}

/**
 * Funções de rastreamento de eventos
 */

export function trackAddToCart(productName: string, price: number) {
  const w = window as any;
  
  // Facebook Pixel
  if (w.fbq) {
    w.fbq('track', 'AddToCart', {
      content_name: productName,
      content_type: 'product',
      value: price,
      currency: 'BRL',
    });
  }

  // Google Analytics
  if (w.gtag) {
    w.gtag('event', 'add_to_cart', {
      items: [
        {
          item_name: productName,
          price: price,
          currency: 'BRL',
        },
      ],
    });
  }
}

export function trackInitiateCheckout(productName: string, price: number) {
  const w = window as any;
  
  // Facebook Pixel
  if (w.fbq) {
    w.fbq('track', 'InitiateCheckout', {
      content_name: productName,
      content_type: 'product',
      value: price,
      currency: 'BRL',
    });
  }

  // Google Analytics
  if (w.gtag) {
    w.gtag('event', 'begin_checkout', {
      items: [
        {
          item_name: productName,
          price: price,
          currency: 'BRL',
        },
      ],
    });
  }
}

export function trackPurchase(productName: string, price: number, orderId?: string) {
  const w = window as any;
  
  // Facebook Pixel
  if (w.fbq) {
    w.fbq('track', 'Purchase', {
      content_name: productName,
      content_type: 'product',
      value: price,
      currency: 'BRL',
      content_id: orderId || 'unknown',
    });
  }

  // Google Analytics
  if (w.gtag) {
    w.gtag('event', 'purchase', {
      transaction_id: orderId || 'unknown',
      value: price,
      currency: 'BRL',
      items: [
        {
          item_name: productName,
          price: price,
          currency: 'BRL',
        },
      ],
    });
  }
}

export function trackViewContent(contentName: string, contentType: string) {
  const w = window as any;
  
  // Facebook Pixel
  if (w.fbq) {
    w.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_type: contentType,
    });
  }

  // Google Analytics
  if (w.gtag) {
    w.gtag('event', 'view_item', {
      items: [
        {
          item_name: contentName,
          item_category: contentType,
        },
      ],
    });
  }
}

export function trackLead(leadName: string, email?: string, phone?: string) {
  const w = window as any;
  
  // Facebook Pixel
  if (w.fbq) {
    w.fbq('track', 'Lead', {
      content_name: leadName,
      content_type: 'lead',
      ...(email && { em: email }),
      ...(phone && { ph: phone }),
    });
  }

  // Google Analytics
  if (w.gtag) {
    w.gtag('event', 'generate_lead', {
      value: 1,
      currency: 'BRL',
      lead_type: leadName,
    });
  }
}
