import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MetaPixel } from "@/components/MetaPixel";
import { TikTokPixel } from "@/components/TikTokPixel";

/**
 * Landing Page Ebook 01_02 - Proteção Familiar
 * Design: Acolhedor, empático, cores quentes e suaves
 * Público: Meta Ads / Público feminino / Foco em família e futuro
 * Foco: Reconstrução familiar, proteção, identidade
 */

export default function Ebook01_02() {
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
      <TikTokPixel />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-50 via-amber-50 to-white border-b border-rose-200">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 scroll-reveal" id="hero-icon">
              <Heart className="w-12 h-12 text-rose-500 mx-auto" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6 leading-tight text-center scroll-reveal" id="hero-title">
              Proteja o Que Realmente Importa: Sua Paz de Espírito e o Futuro da Sua Família
            </h1>
            
            <p className="text-xl text-rose-700 mb-8 leading-relaxed text-center scroll-reveal" id="hero-subtitle">
              Saiba como interromper o ciclo do estresse causado pelas plataformas de jogos e reconstrua sua identidade além das apostas.
            </p>
            
            <div className="flex justify-center scroll-reveal" id="hero-cta">
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
                onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
              >
                Sim, Eu Quero Recuperar Minha Tranquilidade
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center scroll-reveal" id="pain-title">
              O Jogo Vende Uma Esperança Que Exaure o Emocional
            </h2>
            
            <Card className="bg-rose-50 border-2 border-rose-200 p-8 mb-12 scroll-reveal" id="pain-card">
              <p className="text-lg text-rose-900 leading-relaxed mb-6">
                <strong>Chega de esconder a angústia e o peso das decisões solitárias.</strong>
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Você começa "só para relaxar" e termina presa em um ciclo que consome seu tempo, sua paz e sua presença com quem você ama.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  A culpa vem depois. O medo de que sua família descubra. A sensação de estar perdendo o controle de si mesma—aquela mulher forte, mãe, profissional, amiga.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mas aqui está a verdade: <strong>você não perdeu nada que não possa recuperar.</strong> Sua identidade está lá, apenas esperando para ser resgatada.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-amber-50 border border-amber-200 p-6 scroll-reveal" id="pain-1">
                <h3 className="text-xl font-bold text-amber-900 mb-3">😔 O Peso Invisível</h3>
                <p className="text-gray-700 leading-relaxed">
                  A culpa que ninguém vê. O segredo que você carrega sozinha. O cansaço de fingir que está tudo bem.
                </p>
              </Card>
              
              <Card className="bg-amber-50 border border-amber-200 p-6 scroll-reveal" id="pain-2">
                <h3 className="text-xl font-bold text-amber-900 mb-3">👨‍👩‍👧 Impacto na Família</h3>
                <p className="text-gray-700 leading-relaxed">
                  Menos tempo com quem você ama. Menos presença. Menos você sendo você mesma.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-12 text-center scroll-reveal" id="solution-title">
              O Diferencial: Recupere Sua Identidade
            </h2>
            
            {/* Mapa da Identidade */}
            <Card className="bg-white border-2 border-rose-300 p-8 mb-12 scroll-reveal" id="identity-map">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">🗺️ O Mapa da Identidade</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Um exercício poderoso para resgatar seus papéis como mãe, profissional e amiga. Você redescobre quem você realmente é, além das apostas.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-rose-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👩‍👧</div>
                  <p className="font-bold text-rose-900">Mãe</p>
                  <p className="text-sm text-gray-600">Seu papel de cuidadora</p>
                </div>
                
                <div className="bg-rose-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <p className="font-bold text-rose-900">Profissional</p>
                  <p className="text-sm text-gray-600">Sua competência e força</p>
                </div>
                
                <div className="bg-rose-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👯</div>
                  <p className="font-bold text-rose-900">Amiga</p>
                  <p className="text-sm text-gray-600">Sua conexão e apoio</p>
                </div>
              </div>
            </Card>

            {/* O Combo Recuperar Controle */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center scroll-reveal" id="combo-title">
              O Combo Recuperar Controle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* E-book */}
              <Card className="bg-white border-2 border-rose-300 p-8 scroll-reveal" id="combo-ebook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/aHIVZisKJRttqkit.jpeg" 
                    alt="E-book Ansiedade e o Vício em Apostas On-Line" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-4">📚 E-book Educativo</h3>
                <p className="text-rose-600 font-bold text-lg mb-4">R$ 67</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Entenda os mecanismos emocionais por trás do vício em apostas. Escrito com empatia, sem julgamentos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Neurociência do vício</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Ciclo de recompensa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Estratégias TCC</span>
                  </li>
                </ul>
              </Card>

              {/* Workbook */}
              <Card className="bg-white border-2 border-rose-300 p-8 scroll-reveal" id="combo-workbook">
                <div className="mb-6">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/vNmarvmxtvlaIZLs.png" 
                    alt="Workbook de Exercícios" 
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-4">✍️ Workbook Prático</h3>
                <p className="text-rose-600 font-bold text-lg mb-4">R$ 17</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Exercícios estruturados. Aplicáveis imediatamente. Resultados mensuráveis.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Mapeamento de gatilhos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Técnicas de controle de impulsos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Plano de recuperação</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Guarantee */}
            <Card className="bg-amber-50 border-2 border-amber-300 p-8 scroll-reveal" id="guarantee">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">🛡️ Garantia e Sigilo</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Compra <strong>100% discreta</strong> no cartão. Seu nome não aparece em nenhum lugar. Acesso imediato via Hotmart.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Não funcionar para você? Reembolso integral em 7 dias. Sem perguntas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 scroll-reveal" id="cta-title">
              Recupere Sua Tranquilidade Hoje Mesmo
            </h2>
            
            <p className="text-xl text-rose-100 mb-8 leading-relaxed scroll-reveal" id="cta-subtitle">
              Com acesso imediato ao E-book + Workbook. Garantia de 7 dias. Sem riscos.
            </p>
            
            <Button
              size="lg"
              className="bg-white hover:bg-rose-50 text-rose-600 font-bold py-4 px-12 rounded-lg text-lg scroll-reveal"
              onClick={() => window.open('https://pay.hotmart.com/W104078613A?off=zm6o3yqu&checkoutMode=10&bid=1771300889140', '_blank')}
            >
              Sim, Eu Quero Recuperar Minha Tranquilidade
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
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
              <p className="mt-6 text-xs text-gray-600">
                © 2026 Projeto Recuperar Controle • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
