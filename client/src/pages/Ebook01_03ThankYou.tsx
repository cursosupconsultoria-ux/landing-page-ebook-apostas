import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, Mail, Zap } from "lucide-react";

/**
 * Página de Agradecimento - Ebook 01_03
 * Design: Moderno, sóbrio, foco em próximos passos
 * Cores: Cinza escuro, azul marinho, verde esmeralda
 */

export default function Ebook01_03ThankYou() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Success Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border-b border-emerald-600/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-bounce">✅</div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Você Tomou a Decisão Certa!
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Seu acesso ao Combo Recuperar Controle foi confirmado. Você está a um passo de retomar as rédeas da sua vida.
            </p>

            <Card className="bg-emerald-600/10 border-2 border-emerald-600 p-8 mb-8">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Próximos Passos</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <Mail className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">1. Verifique seu Email</h3>
                    <p className="text-slate-300">Um email com o link de acesso foi enviado para você. Procure na caixa de entrada ou spam.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Download className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">2. Baixe o Material</h3>
                    <p className="text-slate-300">E-book em PDF + Workbook interativo. Acesso imediato e vitalício.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Zap className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">3. Comece Hoje</h3>
                    <p className="text-slate-300">Não espere. Comece os exercícios hoje mesmo. Resultados começam em 48 horas.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg mb-6"
              onClick={() => window.location.href = 'https://www.hotmart.com'}
            >
              Acessar Minha Conta Hotmart
            </Button>
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Potencialize Seus Resultados
            </h2>
            
            <Card className="bg-slate-800 border-2 border-emerald-600/50 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 md:w-1/3">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/vNmarvmxtvlaIZLs.png" 
                    alt="Workbook de Exercícios" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                    Workbook de Exercícios: Ansiedade e o Vício em Apostas On-Line
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Já incluído no seu combo! Mas se quiser aprofundar ainda mais com exercícios adicionais:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">5 capítulos com exercícios práticos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Diários de impacto e gatilhos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Técnicas de relaxamento e controle</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Plano de prevenção de recaídas</span>
                    </div>
                  </div>

                  <div className="bg-emerald-600/20 border border-emerald-600 rounded-lg p-4 mb-6">
                    <p className="text-emerald-400 font-bold mb-2">Preço Especial: R$ 17,00</p>
                    <p className="text-slate-300 text-sm">Acesso imediato • PDF interativo</p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg w-full"
                    onClick={() => window.open('https://pay.hotmart.com/L104480783A', '_blank')}
                  >
                    Comprar Workbook Agora
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Dúvidas Frequentes
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-slate-800 border border-slate-700 p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">Quanto tempo leva para ver resultados?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Muitos usuários relatam mudanças significativas em 48 horas. Mas o processo completo de recuperação leva de 30 a 90 dias, dependendo da sua situação.
                </p>
              </Card>

              <Card className="bg-slate-800 border border-slate-700 p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">Posso acessar em qualquer dispositivo?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Sim! O material é 100% digital. Acesse via computador, tablet ou celular. Você recebe um link permanente com acesso vitalício.
                </p>
              </Card>

              <Card className="bg-slate-800 border border-slate-700 p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">Existe garantia?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Sim! Garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                </p>
              </Card>

              <Card className="bg-slate-800 border border-slate-700 p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">Preciso de ajuda profissional?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Este material é educativo. Se você está em sofrimento intenso ou com comportamento compulsivo grave, recomendamos buscar ajuda profissional especializada.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Precisa de Ajuda?
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-slate-300 text-lg">
                <strong>WhatsApp:</strong> <a href="https://wa.me/5519984207525" className="text-emerald-400 hover:text-emerald-300">(19) 98420-7525</a>
              </p>
              <p className="text-slate-300 text-lg">
                <strong>Instagram:</strong> <a href="https://instagram.com/psicologofabricioxavier" className="text-emerald-400 hover:text-emerald-300">@psicologofabricioxavier</a>
              </p>
              <p className="text-slate-300 text-lg">
                <strong>Email:</strong> <a href="mailto:contato@gestaofx.com.br" className="text-emerald-400 hover:text-emerald-300">contato@gestaofx.com.br</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="pt-8 text-center text-sm">
              <p className="mb-4 leading-relaxed">
                <strong>Aviso Importante:</strong> Este material possui caráter educativo e não substitui consulta médica ou psicológica especializada. Em casos de sofrimento emocional intenso, comportamento compulsivo grave ou prejuízos significativos, é fundamental buscar ajuda profissional especializada.
              </p>
              <div className="flex justify-center gap-6 text-xs">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Contato</a>
              </div>
              <p className="mt-6 text-xs text-slate-600">
                © 2026 Projeto Recuperar Controle • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
