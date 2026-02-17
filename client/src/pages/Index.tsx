import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Users, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Página Principal - Hub do Projeto Recuperar Controle
 * Design: Minimalista, limpo e humanizado
 * Filosofia: Acolhimento, esperança e transformação
 */

export default function Index() {
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
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f1e8] to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 scroll-reveal" id="hero-icon">
              <div className="inline-block text-6xl mb-6">🌱</div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display text-[#0a0a0a] mb-6 leading-tight scroll-reveal" id="hero-title">
              Recupere o Controle de Sua Vida
            </h1>
            
            <p className="text-xl md:text-2xl text-[#0a0a0a]/70 mb-8 leading-relaxed scroll-reveal" id="hero-subtitle">
              Transforme compulsões, ansiedade e padrões emocionais limitantes através de conhecimento científico, acolhimento genuíno e ferramentas práticas.
            </p>
            
            <p className="text-lg text-[#0a0a0a]/60 mb-12 scroll-reveal" id="hero-description">
              O Projeto Recuperar Controle é uma iniciativa dedicada a ajudar pessoas como você a reconquistar autonomia, paz e bem-estar emocional.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display text-[#0a0a0a] mb-16 text-center scroll-reveal" id="values-title">
              Nossa Abordagem
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <Card className="bg-[#f5f1e8] border-0 p-8 scroll-reveal" id="value-1">
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">🧠</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">Baseado em Ciência</h3>
                    <p className="text-[#0a0a0a]/70 leading-relaxed">
                      Conteúdo fundamentado em Terapia Cognitivo-Comportamental, neurociência e pesquisas atualizadas sobre comportamento humano.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Value 2 */}
              <Card className="bg-[#f5f1e8] border-0 p-8 scroll-reveal" id="value-2">
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">❤️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">Humanizado e Acolhedor</h3>
                    <p className="text-[#0a0a0a]/70 leading-relaxed">
                      Sem julgamentos. Entendemos que recuperação é um processo e cada pessoa tem seu próprio tempo.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Value 3 */}
              <Card className="bg-[#f5f1e8] border-0 p-8 scroll-reveal" id="value-3">
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">🛠️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">Prático e Aplicável</h3>
                    <p className="text-[#0a0a0a]/70 leading-relaxed">
                      Ferramentas, exercícios e técnicas que você pode usar imediatamente em sua vida cotidiana.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Value 4 */}
              <Card className="bg-[#f5f1e8] border-0 p-8 scroll-reveal" id="value-4">
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">Você Não Está Sozinho</h3>
                    <p className="text-[#0a0a0a]/70 leading-relaxed">
                      Milhares de pessoas já transformaram suas vidas. Sua história pode ser a próxima.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-[#f5f1e8]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display text-[#0a0a0a] mb-6 text-center scroll-reveal" id="products-title">
              Nossos Produtos
            </h2>
            
            <p className="text-xl text-[#0a0a0a]/70 text-center mb-16 scroll-reveal" id="products-subtitle">
              Escolha o material que mais se alinha com suas necessidades e comece sua jornada de transformação hoje.
            </p>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Product 1 - E-book 01 */}
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal hover:shadow-lg transition-shadow" id="product-1">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                      Ansiedade e o Vício em Apostas On-line
                    </h3>
                    <p className="text-lg text-[#0a0a0a]/70 mb-6 leading-relaxed">
                      Um guia completo e científico para entender os mecanismos da ansiedade e do vício em apostas, com estratégias práticas para recuperar o controle.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="text-[#2a9d8f] text-xl">✓</span>
                        <span className="text-[#0a0a0a]/80">57 páginas de conteúdo prático</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#2a9d8f] text-xl">✓</span>
                        <span className="text-[#0a0a0a]/80">Baseado em Terapia Cognitivo-Comportamental</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#2a9d8f] text-xl">✓</span>
                        <span className="text-[#0a0a0a]/80">Acesso imediato em PDF</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#2a9d8f] text-xl">✓</span>
                        <span className="text-[#0a0a0a]/80">Garantia de 7 dias</span>
                      </div>
                    </div>
                    
                    <Button
                      size="lg"
                      className="bg-[#2a9d8f] hover:bg-[#1f7a72] text-white font-bold py-4 px-8 rounded-lg w-full md:w-auto flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/ebook01'}
                    >
                      Conhecer E-book
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-[#2a9d8f] to-[#1f7a72] rounded-lg p-8 text-center text-white w-full max-w-xs">
                      <div className="text-5xl mb-4">📚</div>
                      <h4 className="text-2xl font-bold mb-4">E-book 01</h4>
                      <p className="text-white/80 mb-6">Comece sua transformação agora</p>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-sm text-white/80 mb-1">A partir de</p>
                        <p className="text-3xl font-bold">R$ 87,00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <p className="text-center text-[#0a0a0a]/60 mt-12 scroll-reveal" id="products-note">
              Novos produtos em desenvolvimento. Acompanhe nossas redes sociais para não perder as novidades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display text-[#0a0a0a] mb-6 scroll-reveal" id="cta-title">
              Pronto para Começar?
            </h2>
            
            <p className="text-xl text-[#0a0a0a]/70 mb-12 leading-relaxed scroll-reveal" id="cta-subtitle">
              Cada passo que você dá em direção à recuperação é um passo em direção à vida que você merece.
            </p>
            
            <Button
              size="lg"
              className="bg-[#2a9d8f] hover:bg-[#1f7a72] text-white font-bold py-4 px-12 rounded-lg text-lg"
              onClick={() => window.location.href = '/ebook01'}
            >
              Explorar Produtos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-[#2a9d8f] mb-3">Projeto Recuperar Controle</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Transformando vidas através da educação, acolhimento e ciência.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Contato</h4>
                <p className="text-white/70 text-sm">
                  contato@gestaofx.com.br
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Redes Sociais</h4>
                <a 
                  href="https://www.instagram.com/psicologofabricioxavier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#2a9d8f] text-sm transition-colors"
                >
                  @psicologofabricioxavier
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/50 text-xs">
                © 2026 Projeto Recuperar Controle • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
