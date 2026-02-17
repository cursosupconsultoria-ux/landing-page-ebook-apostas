import { useEffect } from 'react';
import { CheckCircle, Mail, Download, MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ThankYou Page - Página de agradecimento pós-compra
 * Design: Expressionismo Digital com foco em conversão
 * - Exibida após o usuário completar a compra no Hotmart
 * - Rastreia conversão no Google Analytics e Facebook Pixel
 * - Oferece próximos passos (email, WhatsApp, comunidade)
 */

export default function ThankYou() {
  useEffect(() => {
    // Rastrear conversão no Google Analytics
    if (window.gtag) {
      (window.gtag as Function)('event', 'purchase', {
        value: 67.00,
        currency: 'BRL',
        transaction_id: 'ebook-apostas-' + Date.now(),
      });
    }

    // Rastrear conversão no Facebook Pixel
    if (window.fbq) {
      (window.fbq as Function)('track', 'Purchase', {
        value: 67.00,
        currency: 'BRL',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] via-white to-[#f5f1e8]">
      {/* Header */}
      <header className="border-b border-gray-200 py-6 bg-white">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] text-center">
            Projeto Recuperar Controle
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6 animate-bounce">
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-green-500" strokeWidth={1.5} />
                <Zap className="absolute top-0 right-0 w-8 h-8 text-[#e76f51] animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
              🎉 Parabéns!
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Sua compra foi confirmada com sucesso!
            </p>
            <p className="text-lg text-gray-600">
              Você está dando o primeiro passo para recuperar seu controle e sua autonomia.
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-5 mb-16">
            {/* Step 1: Email */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#e76f51] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e76f51] bg-opacity-10">
                    <Mail className="h-6 w-6 text-[#e76f51]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">
                    ✉️ Verifique seu email
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Você receberá um email do Hotmart com o link de acesso ao seu e-book e instruções de download.
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Dica:</strong> Se não receber em alguns minutos, verifique a pasta de spam ou promoções.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Download */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2a9d8f] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2a9d8f] bg-opacity-10">
                    <Download className="h-6 w-6 text-[#2a9d8f]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">
                    📥 Baixe seu e-book
                  </h3>
                  <p className="text-gray-700 mb-3">
                    O e-book está em formato PDF, otimizado para leitura em qualquer dispositivo (computador, tablet ou smartphone).
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Dica:</strong> Você pode ler online ou fazer download para ler offline.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Next Steps */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#f4a261] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#f4a261] bg-opacity-10">
                    <MessageCircle className="h-6 w-6 text-[#f4a261]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">
                    🚀 Próximos passos
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Em breve, você receberá conteúdos exclusivos, dicas práticas e informações sobre novos produtos do Projeto Recuperar Controle.
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Dica:</strong> Fique atento ao seu email para não perder nenhuma atualização importante!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workbook Upsell Section */}
          <div className="bg-gradient-to-r from-[#2a9d8f] to-[#1f7a72] rounded-lg p-8 mb-16 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Workbook Image */}
              <div className="flex justify-center">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/YoqxOASYNIXjtshS.png" 
                  alt="Workbook de Exercícios" 
                  className="w-full max-w-sm rounded-lg shadow-xl"
                />
              </div>
              
              {/* Workbook Details */}
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">📚 Aprofunde sua Recuperação</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Complemento essencial ao e-book! O Workbook de Exercícios oferece ferramentas práticas baseadas em Terapia Cognitivo-Comportamental para você aplicar imediatamente.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-white/90">5 capítulos com exercícios estruturados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-white/90">Diários de impacto e identificação de gatilhos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-white/90">Técnicas de relaxamento e mindfulness</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-white/90">Plano personalizado de prevenção de recaídas</span>
                  </div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#f4a261]">R$ 17,00</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2">Acesso imediato • PDF interativo</p>
                </div>
                
                <Button
                  onClick={() => window.open('https://pay.hotmart.com/L104480783A', '_blank')}
                  className="w-full bg-[#f4a261] hover:bg-[#e89a4a] text-[#0a0a0a] font-bold py-4 rounded-lg transition-all text-lg"
                >
                  COMPRAR WORKBOOK AGORA
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 mb-16">
            <Button
              onClick={() => window.open('https://www.hotmart.com/meus-produtos', '_blank')}
              className="w-full bg-[#e76f51] hover:bg-[#d85a3d] text-white font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
            >
              Acessar meus produtos no Hotmart
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.open('https://www.instagram.com/psicologofabricioxavier', '_blank')}
              className="w-full bg-[#2a9d8f] hover:bg-[#1f7a72] text-white font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
            >
              Seguir no Instagram para dicas exclusivas
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-8">
              ❓ Dúvidas Frequentes
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-3">
                  Como acesso meu e-book?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Você receberá um email do Hotmart com um link de acesso. Clique no link e você será redirecionado para sua biblioteca de produtos onde poderá fazer download ou ler online. Se tiver dúvidas, o Hotmart oferece suporte 24/7.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-3">
                  Quanto tempo leva para receber o e-book?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Geralmente, você recebe o acesso imediatamente após a confirmação do pagamento. Se não receber em 15 minutos, verifique sua pasta de spam ou contate o suporte do Hotmart em https://www.hotmart.com/suporte
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-3">
                  Posso compartilhar o e-book com outras pessoas?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  O e-book é para uso pessoal. Compartilhá-lo sem autorização viola os direitos autorais. Se conhece alguém interessado, convide-o a comprar sua própria cópia. Assim você ajuda a manter o projeto vivo e oferecemos suporte melhor a cada leitor.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-3">
                  Há garantia de reembolso?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Sim! Oferecemos garantia de 7 dias. Se não estiver satisfeito, solicite reembolso total sem perguntas ao Hotmart. Sua satisfação é nossa prioridade.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-3">
                  Como faço para entrar em contato com suporte?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Estamos aqui para você! Entre em contato através de:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>📧 Email: contato@gestaofx.com.br</li>
                  <li>💬 WhatsApp: (19) 98420-7525</li>
                  <li>📱 Instagram: @psicologofabricioxavier</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#e76f51] to-[#f4a261] rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Precisa de ajuda?
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Estamos aqui para garantir que você tenha a melhor experiência possível.
            </p>
            <Button
              onClick={() => window.location.href = 'mailto:contato@gestaofx.com.br'}
              className="bg-white text-[#e76f51] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all"
            >
              Enviar email para suporte
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16 bg-white">
        <div className="container text-center">
          <p className="text-sm text-gray-600 mb-2">
            © 2026 Projeto Recuperar Controle. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-600">
            Desenvolvido com ❤️ para ajudar pessoas a recuperarem sua autonomia
          </p>
        </div>
      </footer>
    </div>
  );
}
