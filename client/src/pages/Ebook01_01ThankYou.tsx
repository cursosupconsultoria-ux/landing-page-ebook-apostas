import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Mail } from "lucide-react";

/**
 * Página de Agradecimento - Ebook 01_01
 * Design: Profissional, tons de azul
 */

export default function Ebook01_01ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Success Message */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block bg-blue-100 rounded-full p-6 mb-6">
                <Check className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Parabéns! Você Deu o Primeiro Passo
            </h1>
            
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Seu acesso ao e-book + workbook foi confirmado. Verifique seu email para o link de download.
            </p>
            
            <Card className="bg-blue-50 border-2 border-blue-200 p-8 mb-12">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-blue-900 font-semibold mb-2">Procure por um email de:</p>
              <p className="text-blue-700 mb-4">suporte@hotmart.com</p>
              <p className="text-sm text-blue-600">Se não encontrar, verifique a pasta de spam</p>
            </Card>

            <div className="bg-white border-2 border-blue-300 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Próximos Passos</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Baixe o Material</h3>
                    <p className="text-gray-700">Clique no link do email para acessar o e-book + workbook em PDF</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comece com o E-book</h3>
                    <p className="text-gray-700">Leia os primeiros capítulos para entender o mecanismo da ansiedade</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Use o Workbook</h3>
                    <p className="text-gray-700">Aplique as técnicas (Regra dos 15 Minutos e Grounding 5-4-3-2-1)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Monitore Seu Progresso</h3>
                    <p className="text-gray-700">Use o diário de gatilhos para entender seus padrões</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-12">
              <Button
                onClick={() => window.open('https://www.hotmart.com/meus-produtos', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
              >
                Acessar Meus Produtos no Hotmart
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => window.open('https://www.instagram.com/psicologofabricioxavier', '_blank')}
                className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
              >
                Seguir no Instagram para Dicas Exclusivas
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <Card className="bg-blue-900 text-white p-8">
              <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
              <p className="mb-4 leading-relaxed">
                Se tiver dúvidas sobre o acesso ou o conteúdo, entre em contato conosco.
              </p>
              <p className="text-blue-200">
                <strong>Email:</strong> contato@gestaofx.com.br
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-blue-100">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <Card className="bg-blue-50 border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Quanto tempo leva para receber o email?</h3>
                <p className="text-gray-700">Geralmente em até 5 minutos. Se não receber, verifique a pasta de spam ou entre em contato conosco.</p>
              </Card>
              
              <Card className="bg-blue-50 border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Posso acessar em qualquer dispositivo?</h3>
                <p className="text-gray-700">Sim! O PDF funciona em computador, tablet e celular. Você pode ler offline também.</p>
              </Card>
              
              <Card className="bg-blue-50 border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Por quanto tempo tenho acesso?</h3>
                <p className="text-gray-700">Acesso vitalício! Uma vez baixado, o material é seu para sempre.</p>
              </Card>
              
              <Card className="bg-blue-50 border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Há garantia?</h3>
                <p className="text-gray-700">Sim! Garantia de 7 dias. Se não funcionar para você, reembolso integral sem perguntas.</p>
              </Card>
            </div>
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
