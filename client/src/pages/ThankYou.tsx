import { useEffect } from 'react';
import { CheckCircle, Mail, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ThankYou Page - Página de agradecimento pós-compra
 * - Exibida após o usuário completar a compra no Hotmart
 * - Contém instruções para acessar o e-book
 * - Links para próximos passos (email, WhatsApp, etc.)
 */

export default function ThankYou() {
  useEffect(() => {
    // Rastrear conversão no analytics
    if (window.gtag) {
      (window.gtag as Function)('event', 'purchase', {
        value: 67.00,
        currency: 'BRL',
        transaction_id: 'ebook-apostas-' + Date.now(),
      });
    }

    if (window.fbq) {
      (window.fbq as Function)('track', 'Purchase', {
        value: 67.00,
        currency: 'BRL',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container">
          <h1 className="text-display text-[#0a0a0a] text-center">
            Projeto Recuperar Controle
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h2 className="text-headline text-[#0a0a0a] mb-4">
              Parabéns! Sua compra foi confirmada
            </h2>
            <p className="text-body-large text-gray-700 mb-8">
              Você está dando o primeiro passo para recuperar seu controle. Obrigado por confiar em nosso trabalho.
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#e76f51] shadow-sm">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-[#e76f51] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">Verifique seu email</h3>
                  <p className="text-gray-700 mb-3">
                    Você receberá um email do Hotmart com o link para acessar seu e-book e instruções de download.
                  </p>
                  <p className="text-sm text-gray-600">
                    Se não receber em alguns minutos, verifique a pasta de spam.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2a9d8f] shadow-sm">
              <div className="flex gap-4">
                <Download className="w-6 h-6 text-[#2a9d8f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">Baixe seu e-book</h3>
                  <p className="text-gray-700 mb-3">
                    O e-book está em formato PDF, otimizado para leitura em qualquer dispositivo (computador, tablet ou smartphone).
                  </p>
                  <p className="text-sm text-gray-600">
                    Você pode ler online ou fazer download para ler offline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#f4a261] shadow-sm">
              <div className="flex gap-4">
                <MessageCircle className="w-6 h-6 text-[#f4a261] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">Próximos passos</h3>
                  <p className="text-gray-700 mb-3">
                    Em breve, você receberá conteúdos exclusivos, dicas práticas e informações sobre novos produtos do Projeto Recuperar Controle.
                  </p>
                  <p className="text-sm text-gray-600">
                    Fique atento ao seu email para não perder nenhuma atualização.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 mb-12">
            <Button
              onClick={() => window.open('https://www.hotmart.com/meus-produtos', '_blank')}
              className="w-full bg-[#e76f51] hover:bg-[#d85a3d] text-white font-bold py-3 rounded-lg transition-colors"
            >
              Acessar meus produtos no Hotmart
            </Button>
            <Button
              onClick={() => window.open('https://www.instagram.com/recuperarcontrole', '_blank')}
              className="w-full bg-[#2a9d8f] hover:bg-[#1f7a72] text-white font-bold py-3 rounded-lg transition-colors"
            >
              Seguir no Instagram
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-subheadline text-[#0a0a0a] mb-6">Dúvidas frequentes</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#0a0a0a] mb-2">Como acesso meu e-book?</h4>
                <p className="text-gray-700">
                  Você receberá um email do Hotmart com um link de acesso. Clique no link e você será redirecionado para sua biblioteca de produtos onde poderá fazer download ou ler online.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0a0a0a] mb-2">Quanto tempo leva para receber o e-book?</h4>
                <p className="text-gray-700">
                  Geralmente, você recebe o acesso imediatamente após a confirmação do pagamento. Se não receber em 15 minutos, verifique sua pasta de spam ou contate o suporte do Hotmart.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0a0a0a] mb-2">Posso compartilhar o e-book?</h4>
                <p className="text-gray-700">
                  O e-book é para uso pessoal. Compartilhá-lo sem autorização viola os direitos autorais. Se conhece alguém interessado, convide-o a comprar sua própria cópia.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0a0a0a] mb-2">Há garantia de reembolso?</h4>
                <p className="text-gray-700">
                  Sim! Oferecemos garantia de 7 dias. Se não estiver satisfeito, solicite reembolso total sem perguntas ao Hotmart.
                </p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Precisa de ajuda? Estamos aqui para você!
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                📧 Email: contato@recuperarcontrole.com.br
              </p>
              <p className="text-sm text-gray-600">
                💬 WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16 bg-white">
        <div className="container text-center text-sm text-gray-600">
          <p>© 2026 Projeto Recuperar Controle. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com ❤️ para ajudar pessoas a recuperarem sua autonomia
          </p>
        </div>
      </footer>
    </div>
  );
}
