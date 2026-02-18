import { useEffect } from 'react';

/**
 * TikTok Pixel Component
 * ID: D6AH6J3C77U2V3Q5JOQG
 * 
 * Modo de Teste:
 * - Adicione ?tiktok_test=true à URL para ativar modo de teste
 * - Código de teste: TEST14972
 * - Eventos serão enviados com test_event_code para validação no TikTok Ads Manager
 */

export function TikTokPixel() {
  useEffect(() => {
    // Verificar se está em modo de teste
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get('tiktok_test') === 'true';
    const testEventCode = 'TEST14972';

    // TikTok Pixel Code
    const script = document.createElement('script');
    script.innerHTML = `
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;
        var ttq=w[t]=w[t]||[];
        ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
        ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
        for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
        ttq.instance=function(t){
          for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
          return e
        };
        ttq.load=function(e,n){
          var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
          ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
          n=document.createElement("script");
          n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
          e=document.getElementsByTagName("script")[0];
          e.parentNode.insertBefore(n,e)
        };
        ttq.load('D6AH6J3C77U2V3Q5JOQG');
        ttq.page();
      }(window, document, 'ttq');
    `;
    script.async = true;
    document.head.appendChild(script);

    // Se estiver em modo de teste, enviar evento de teste
    if (isTestMode) {
      // Aguardar o TikTok Pixel carregar
      const checkTTQ = setInterval(() => {
        if (window.ttq) {
          clearInterval(checkTTQ);
          
          // Enviar evento de teste
          window.ttq.track('PageView', {
            test_event_code: testEventCode,
          });

          // Log no console para confirmação
          console.log('✅ TikTok Pixel - Evento de teste enviado');
          console.log('Código de teste:', testEventCode);
          console.log('Verifique em: TikTok Ads Manager > Eventos > Seu Pixel > Teste de Eventos');
        }
      }, 100);

      // Timeout após 5 segundos
      setTimeout(() => clearInterval(checkTTQ), 5000);
    }

    // Rastrear cliques em CTAs com TikTok Pixel
    const trackCTAClick = (buttonText: string) => {
      if (window.ttq) {
        const eventData: any = {
          content_name: buttonText,
          content_type: 'product',
          value: 67, // Valor do e-book em reais
          currency: 'BRL',
        };

        // Adicionar código de teste se em modo de teste
        if (isTestMode) {
          eventData.test_event_code = testEventCode;
        }

        window.ttq.track('AddToCart', eventData);
      }
    };

    // Adicionar listeners aos botões CTA
    const ctaButtons = document.querySelectorAll('[data-tiktok-cta]');
    ctaButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent || 'CTA Button';
        trackCTAClick(buttonText);
      });
    });

    return () => {
      // Cleanup
      ctaButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return null;
}

// Estender window para TypeScript
declare global {
  interface Window {
    ttq?: any;
  }
}
