import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Mail, Heart } from "lucide-react";

/**
 * Página de Agradecimento - Ebook 01_02
 * Design: Acolhedor, tons de rosa e âmbar
 */

export default function Ebook01_02ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-white">
      {/* Success Message */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block bg-rose-100 rounded-full p-6 mb-6">
                <Heart className="w-12 h-12 text-rose-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Você Tomou a Decisão Certa
            </h1>
            
            <p className="text-xl text-rose-700 mb-8 leading-relaxed">
              Seu acesso ao e-book + workbook foi confirmado. Verifique seu email para começar sua jornada de recuperação.
            </p>
            
            <Card className="bg-rose-50 border-2 border-rose-200 p-8 mb-12">
              <Mail className="w-8 h-8 text-rose-500 mx-auto mb-4" />
              <p className="text-lg text-rose-900 font-semibold mb-2">Procure por um email de:</p>
              <p className="text-rose-700 mb-4">suporte@hotmart.com</p>
              <p className="text-sm text-rose-600">Se não encontrar, verifique a pasta de spam</p>
            </Card>

            <div className="bg-white border-2 border-rose-300 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-rose-900 mb-6">Seu Caminho de Recuperação</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Baixe o Material</h3>
                    <p className="text-gray-700">Clique no link do email para acessar o e-book + workbook em PDF</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comece a Ler</h3>
                    <p className="text-gray-700">Dedique 30 minutos para entender seus padrões emocionais</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Use o Diário de Gatilhos</h3>
                    <p className="text-gray-700">Identifique o que te leva a jogar e reconheça seus padrões</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Resgate Sua Identidade</h3>
                    <p className="text-gray-700">Use o Mapa da Identidade para reconectar com seus papéis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-12">
              <Button
                onClick={() => window.open('https://www.hotmart.com/meus-produtos', '_blank')}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
              >
                Acessar Meus Produtos no Hotmart
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => window.open('https://www.instagram.com/psicologofabricioxavier', '_blank')}
                className="w-full bg-rose-100 hover:bg-rose-200 text-rose-600 font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
              >
                Seguir no Instagram para Dicas Exclusivas
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <Card className="bg-amber-50 border-2 border-amber-300 p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">💝 Uma Mensagem Especial</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você não está sozinha nessa jornada. Milhares de mulheres já recuperaram sua paz, sua identidade e sua vida. Você também consegue.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cada página que você ler, cada exercício que fizer, é um passo em direção à mulher que você realmente é.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-rose-100">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <Card className="bg-rose-50 border-2 border-rose-200 p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Quanto tempo leva para receber o email?</h3>
                <p className="text-gray-700">Geralmente em até 5 minutos. Se não receber, verifique a pasta de spam ou entre em contato conosco.</p>
              </Card>
              
              <Card className="bg-rose-50 border-2 border-rose-200 p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-3">O material é realmente discreto?</h3>
                <p className="text-gray-700">Sim! Seu nome não aparece em nenhum lugar. A compra é 100% discreta e segura.</p>
              </Card>
              
              <Card className="bg-rose-50 border-2 border-rose-200 p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Posso acessar em qualquer dispositivo?</h3>
                <p className="text-gray-700">Sim! O PDF funciona em computador, tablet e celular. Você pode ler offline também.</p>
              </Card>
              
              <Card className="bg-rose-50 border-2 border-rose-200 p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Há garantia?</h3>
                <p className="text-gray-700">Sim! Garantia de 7 dias. Se não funcionar para você, reembolso integral sem perguntas.</p>
              </Card>

              <Card className="bg-rose-50 border-2 border-rose-200 p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Preciso de ajuda profissional também?</h3>
                <p className="text-gray-700">Este material é educativo e complementar. Se você sente que precisa de ajuda profissional, procure um psicólogo ou médico especializado.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 bg-rose-50 border-t border-rose-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">Precisa de Ajuda?</h2>
            <p className="text-lg text-rose-700 mb-8 leading-relaxed">
              Estamos aqui para apoiá-la. Entre em contato conosco a qualquer momento.
            </p>
            <Card className="bg-white border-2 border-rose-300 p-8">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong> contato@gestaofx.com.br
              </p>
              <p className="text-lg text-gray-700">
                <strong>WhatsApp:</strong> (19) 98420-7525
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p className="mb-4 leading-relaxed">
                <strong>Aviso Importante:</strong> Este material possui caráter educativo e não substitui consulta médica ou psicológica especializada.
              </p>
              <p className="text-xs text-gray-500">
                © 2026 Projeto Recuperar Controle • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
