import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Brain, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MetaPixel } from "@/components/MetaPixel";

/**
 * Landing Page Ebook 01_03 - Inteligência Financeira e Autonomia
 * Design: Moderno, sóbrio, tipografia forte
 * Cores: Cinza escuro, azul marinho, verde esmeralda
 * Público: Meta Ads / Público masculino / Foco em performance
 */

export default function Ebook01_03() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <MetaPixel />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border-b border-emerald-600/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight scroll-reveal" id="hero-title">
              O Único Investimento Real Capaz de Interromper a Sangria Financeira e Emocional
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed scroll-reveal" id="hero-subtitle">
              Saiba por que o seu cérebro foi 'hackeado' pelas bets e utilize ferramentas práticas para retomar as rédeas da sua vida.
            </p>
            
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg scroll-reveal"
              onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
            >
              Quero o Guia Completo Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 scroll-reveal" id="impact-title">
              O Jogo Não É Uma Questão de Sorte
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-slate-300 leading-relaxed scroll-reveal" id="impact-1">
                É um sistema de recompensa variável. Seu cérebro foi cientificamente 'hackeado' para manter você viciado. Não é fraqueza—é neurociência.
              </p>
              
              <Card className="bg-slate-800 border-2 border-emerald-600/50 p-8 scroll-reveal" id="impact-stats">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500 mb-2">R$ 240B</div>
                    <p className="text-slate-300 text-sm">perdidos anualmente em apostas no Brasil</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500 mb-2">10,9M</div>
                    <p className="text-slate-300 text-sm">brasileiros com comportamento compulsivo</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500 mb-2">5º</div>
                    <p className="text-slate-300 text-sm">maior mercado de apostas do mundo</p>
                  </div>
                </div>
              </Card>

              <p className="text-lg text-slate-300 leading-relaxed scroll-reveal" id="impact-2">
                <strong>Saia dessa estatística.</strong> Volte a investir em você. Não em plataformas que lucram com sua compulsão.
              </p>
            </div>

            <Card className="bg-emerald-600/10 border-2 border-emerald-600 p-8 scroll-reveal" id="impact-cta">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">A Realidade</h3>
              <p className="text-slate-200 leading-relaxed">
                Você não precisa de sorte. Você precisa de ferramentas. Ferramentas que funcionam porque são baseadas em neurociência, não em promessas vazias.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center scroll-reveal" id="solution-title">
              O Combo Recuperar Controle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* E-book */}
              <Card className="bg-slate-800 border-2 border-emerald-600/50 p-8 scroll-reveal" id="solution-ebook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/aHIVZisKJRttqkit.jpeg" 
                    alt="E-book Ansiedade e o Vício em Apostas On-Line" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">📚 E-book Educativo</h3>
                <p className="text-emerald-400 font-bold text-lg mb-4">R$ 67</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  57 páginas de análise científica. Entenda exatamente como o sistema te mantém preso.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Neurociência do vício em apostas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Ciclo de recompensa variável</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Estratégias baseadas em TCC</span>
                  </li>
                </ul>
              </Card>

              {/* Workbook */}
              <Card className="bg-slate-800 border-2 border-emerald-600/50 p-8 scroll-reveal" id="solution-workbook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/vNmarvmxtvlaIZLs.png" 
                    alt="Workbook de Exercícios" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">✍️ Workbook Prático</h3>
                <p className="text-emerald-400 font-bold text-lg mb-4">R$ 17</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Exercícios estruturados. Aplicáveis imediatamente. Resultados mensuráveis.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Mapeamento de gatilhos financeiros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Técnicas de controle de impulsos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">Plano de recuperação financeira</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Techniques */}
            <Card className="bg-emerald-600/10 border-2 border-emerald-600 p-8 scroll-reveal" id="techniques">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Ferramentas Incluídas</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Brain className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Desativação de Gatilhos</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Estratégias validadas pela neurociência para interromper o ciclo de recompensa variável antes que ele comece.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <TrendingUp className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Recuperação Financeira</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Plano estruturado para recuperar o controle das suas finanças e começar a investir em você novamente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Prevenção de Recaídas</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Sistema de monitoramento e proteção para manter você no caminho certo a longo prazo.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8 scroll-reveal" id="authority-title">
              Prova de Autoridade
            </h2>
            
            <Card className="bg-slate-800 border-2 border-emerald-600/50 p-8 scroll-reveal" id="authority-card">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Método Estruturado</h3>
              <p className="text-lg text-slate-300 mb-4">Especialista em Saúde Mental</p>
              <p className="text-slate-300 leading-relaxed">
                Sem promessas mágicas. Sem atalhos. Apenas fatos, neurociência e exercícios que funcionam porque são baseados em pesquisa científica validada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 scroll-reveal" id="cta-title">
              Aprenda a Desativar os Gatilhos de Curto Prazo
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed scroll-reveal" id="cta-subtitle">
              Com estratégias validadas pela neurociência. Acesso imediato. Garantia de 7 dias.
            </p>
            
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-emerald-700 font-bold py-4 px-12 rounded-lg text-lg scroll-reveal"
              onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
            >
              Quero o Guia Completo Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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
