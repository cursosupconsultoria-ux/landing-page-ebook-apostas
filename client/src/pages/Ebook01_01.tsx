import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MetaPixel } from "@/components/MetaPixel";

/**
 * Landing Page Ebook 01_01 - Ansiedade e Impulsividade
 * Design: Profissional, limpo, tons de azul e branco
 * Público: Google Ads (palavras-chave de ajuda) / Público geral TCC
 * Foco: Mecanismo da ansiedade, TCC, autoridade técnica
 */

export default function Ebook01_01() {
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
    <div className="min-h-screen bg-white">
      <MetaPixel />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white border-b border-blue-100">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight scroll-reveal" id="hero-title">
              Entenda o Mecanismo da Ansiedade por Trás das Apostas e Retome Seu Equilíbrio Emocional
            </h1>
            
            <p className="text-xl text-blue-700 mb-8 leading-relaxed scroll-reveal" id="hero-subtitle">
              Um guia prático baseado em Terapia Cognitivo-Comportamental para desconstruir o ciclo da dopamina e recuperar sua autonomia.
            </p>
            
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg scroll-reveal"
              onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
            >
              Quero Conhecer o Método Prático
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 scroll-reveal" id="problem-title">
              Você Sente que o Impulso Tomou o Lugar do Lazer?
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed scroll-reveal" id="problem-1">
                O 'scroll' infinito e a expectativa da vitória geram um cansaço mental invisível. Você começa buscando relaxar, mas termina preso em um ciclo que drena sua energia emocional e financeira.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed scroll-reveal" id="problem-2">
                A ansiedade se disfarça de esperança. O cérebro libera dopamina a cada clique, criando uma ilusão de controle que, na verdade, é o oposto: perda de autonomia.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed scroll-reveal" id="problem-3">
                Você sabe que precisa parar, mas o impulso é mais forte que a vontade. Isso não é fraqueza—é neurociência. E sim, é possível recondicionar seu cérebro.
              </p>
            </div>

            <Card className="bg-blue-50 border-2 border-blue-200 p-8 scroll-reveal" id="problem-card">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">A Boa Notícia</h3>
              <p className="text-lg text-blue-800 leading-relaxed">
                Entender o mecanismo é o primeiro passo para quebrar o padrão. Quando você compreende <strong>por que</strong> seu cérebro reage assim, você ganha o poder de <strong>como</strong> mudar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center scroll-reveal" id="solution-title">
              A Solução: O Combo Prático
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* E-book */}
              <Card className="bg-white border-2 border-blue-300 p-8 scroll-reveal" id="solution-ebook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/aHIVZisKJRttqkit.jpeg" 
                    alt="E-book Ansiedade e o Vício em Apostas On-Line" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">📚 E-book Educativo</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  57 páginas de conteúdo científico e prático baseado em Terapia Cognitivo-Comportamental.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Mecanismo neurológico da ansiedade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Ciclo da dopamina explicado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Estratégias TCC aplicáveis</span>
                  </li>
                </ul>
              </Card>

              {/* Workbook */}
              <Card className="bg-white border-2 border-blue-300 p-8 scroll-reveal" id="solution-workbook">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">✍️ Workbook Prático</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Exercícios estruturados para aplicar imediatamente na sua vida.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Diário de gatilhos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Técnicas de grounding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Plano de ação personalizado</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Techniques */}
            {/* Workbook Cover */}
            {/* O Combo Recuperar Controle */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center scroll-reveal" id="combo-title">
              O Combo Recuperar Controle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* E-book */}
              <Card className="bg-white border-2 border-blue-300 p-8 scroll-reveal" id="combo-ebook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/aHIVZisKJRttqkit.jpeg" 
                    alt="E-book Ansiedade e o Vício em Apostas On-Line" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">📚 E-book Educativo</h3>
                <p className="text-blue-600 font-bold text-lg mb-4">R$ 67</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  57 páginas de conteúdo científico e prático baseado em Terapia Cognitivo-Comportamental.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Neurociência do vício em apostas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Ciclo de recompensa variável</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Estratégias baseadas em TCC</span>
                  </li>
                </ul>
              </Card>

              {/* Workbook */}
              <Card className="bg-white border-2 border-blue-300 p-8 scroll-reveal" id="combo-workbook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/vNmarvmxtvlaIZLs.png" 
                    alt="Workbook de Exercícios" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">✍️ Workbook Prático</h3>
                <p className="text-blue-600 font-bold text-lg mb-4">R$ 17</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Exercícios estruturados. Aplicáveis imediatamente. Resultados mensuráveis.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Mapeamento de gatilhos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Técnicas de controle de impulsos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Plano de recuperação</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-blue-900 text-white p-8 scroll-reveal" id="techniques">
              <h3 className="text-2xl font-bold mb-6">Técnicas Incluídas</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-blue-200 mb-2">A Regra dos 15 Minutos</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Um protocolo simples para interromper o impulso antes que ele se intensifique. Funciona porque respeita o ciclo natural da ansiedade.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-blue-200 mb-2">Técnica de Grounding 5-4-3-2-1</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Reconecte seu corpo ao presente. Identifique 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que sente. Controle de impulsos em tempo real.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 scroll-reveal" id="author-title">
              Sobre o Autor
            </h2>
            
            <Card className="bg-blue-50 border-2 border-blue-200 p-8 scroll-reveal" id="author-card">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Fabricio Candido Xavier</h3>
              <p className="text-lg text-blue-800 mb-4">Especialista em Saúde Emocional</p>
              <p className="text-gray-700 leading-relaxed">
                Com mais de uma década de experiência em Terapia Cognitivo-Comportamental e saúde mental, Fabricio dedica-se a transformar vidas através de educação científica e acolhimento genuíno. Este material é resultado de pesquisa, prática clínica e comprometimento com a recuperação real.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 scroll-reveal" id="cta-title">
              Comece Sua Transformação Hoje
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed scroll-reveal" id="cta-subtitle">
              Acesso imediato ao e-book + workbook. Garantia de 7 dias.
            </p>
            
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-lg text-lg scroll-reveal"
              onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
            >
              Quero Conhecer o Método Prático
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
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
              <p className="mt-6 text-xs text-gray-500">
                © 2026 Projeto Recuperar Controle • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
