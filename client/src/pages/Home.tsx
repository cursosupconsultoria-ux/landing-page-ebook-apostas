import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Check, BookOpen, Users, Award, ChevronDown } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import UrgencyBar from "@/components/UrgencyBar";
import BookContents from "@/components/BookContents";
import EmailCaptureModal from "@/components/EmailCaptureModal";

/**
 * Landing Page - E-book "Ansiedade e o Vício em Apostas On-line"
 * Design: Expressionismo Digital com Influências de Arte Contemporânea
 * Filosofia: Emoção primeiro, assimetria proposital, camadas de significado
 */

export default function Home() {
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

    // Observe all scroll-reveal elements
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
    // Re-run when DOM changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <UrgencyBar />
      {/* Hero Section - Dark, Dramatic */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/PGcPTB8bI0qLrPmUDkWBQ1-img-1_1771116162000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94L1BHY1BUQjhiSTBxTHJQbVVEa1dCUTEtaW1nLTFfMTc3MTExNjE2MjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ajYXc316KqBku4~Rr16Q4EZkJIg0vKFr5UNzAMiyHSwhvQtTP~9NqDUOUTTUnaRCJ4bl6V7AD15Z3leeI18h3LDPHenj3BwEwGFTtbgKpLkJf0YkddiUDhqk8pT2fmh~P3oVsxcUdbVjmTBrE9DMr4UocdTj5kMg0mdkTtE6c9aWcTPuhQF6HiiOjK4EjQee7PMbQhVX9eIjLkGarsmfRNTvsEI-HD4QTLrVHeu5R-C-HcxssYfaLQpLyPF7qHKCyAqqUVGIKrEvd44cc23EkpkI3bgKJmG87Usju81Lu1F8OilUog2qCpKiUF-4-1OIXdmD7~j1N9QGIT9n6nAitQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="container relative z-10 flex items-center justify-between gap-12 px-6">
          <div className="flex-1">
            <h1 className="text-display text-white mb-8 leading-none">
              VOCÊ NÃO É FRACO.<br />
              <span className="text-[#e76f51]">VOCÊ ESTÁ PRESO</span><br />
              EM UM CICLO.
            </h1>
            
            <p className="text-body-large text-white/90 mb-12">
              Descubra como o cérebro é capturado pelas apostas, por que a força de vontade falha 
              e o caminho real para retomar sua autonomia — sem julgamento, sem promessas mágicas, 
              apenas ciência e acolhimento.
            </p>
            
            <div className="space-y-4">
              <div className="inline-block bg-[#e76f51] text-white px-4 py-2 rounded text-sm font-bold animate-pulse">
                ⏰ Oferta válida por 48 horas
              </div>
              <Button
                size="lg"
                className="bg-[#A89080] hover:bg-[#8B7355] text-white text-xl px-12 py-8 rounded-none font-display tracking-wide pulse-cta shadow-2xl block w-full"
                onClick={() => window.open('https://pay.hotmart.com/W104078613A', '_blank')}
              >
                QUERO RECUPERAR MEU CONTROLE AGORA
              </Button>
            </div>
          </div>
          
          <div className="flex-1 hidden md:flex justify-center relative">
            <div className="relative max-w-md w-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/aHIVZisKJRttqkit.jpeg"
                alt="Descubra as Armadilhas do Vício em Apostas"
                className="w-full h-auto animate-fade-in rounded-lg shadow-2xl"
              />
              <button
                onClick={() => window.open('https://pay.hotmart.com/W104078613A', '_blank')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#e76f51] hover:bg-[#d45a3a] text-white px-8 py-3 rounded font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                COMPRE AGORA
              </button>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection("problem-section")}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={48} />
          </button>
        </div>
      </section>

      {/* Statistics Section - Dark Background */}
      <section
        id="problem-section"
        className="py-32 relative overflow-hidden grain-overlay"
        style={{
          backgroundColor: "#0a0a0a",
        }}
      >
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-headline text-white mb-20 text-center scroll-reveal" id="stat-title">
              O PROBLEMA É <span className="text-[#e76f51]">MAIOR</span> DO QUE VOCÊ IMAGINA
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="text-center scroll-reveal" id="stat-1">
                <div className="text-mono text-8xl font-bold text-[#e76f51] mb-4">17,7M</div>
                <p className="text-white/80 text-lg">brasileiros apostaram online em 2025</p>
              </div>
              
              <div className="text-center scroll-reveal" id="stat-2">
                <div className="text-mono text-8xl font-bold text-[#e76f51] mb-4">10,9M</div>
                <p className="text-white/80 text-lg">apostam de forma problemática</p>
              </div>
              
              <div className="text-center scroll-reveal" id="stat-3">
                <div className="text-mono text-8xl font-bold text-[#e76f51] mb-4">5º</div>
                <p className="text-white/80 text-lg">maior mercado de apostas do mundo</p>
              </div>
            </div>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 scroll-reveal" id="problem-card">
              <h3 className="text-subheadline text-white mb-8">Você se reconhece?</h3>
              <ul className="space-y-6 text-white/90 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-[#e76f51] text-2xl">→</span>
                  <span>Sente que perdeu o controle sobre as apostas</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#e76f51] text-2xl">→</span>
                  <span>Já tentou parar, mas sempre recai</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#e76f51] text-2xl">→</span>
                  <span>Usa o jogo para aliviar ansiedade ou estresse</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#e76f51] text-2xl">→</span>
                  <span>Sente vergonha e não sabe como pedir ajuda</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#e76f51] text-2xl">→</span>
                  <span>Vê suas finanças e relacionamentos sendo destruídos</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section - Light Background with Image */}
      <section
        className="py-32 relative overflow-hidden grain-overlay"
        style={{
          backgroundColor: "#f5f1e8",
        }}
      >
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/4QO3x4FRueuv3PVGIyZUVB-img-2_1771119205000_na1fn_c29sdXRpb24taG9wZS1jb250ZXh0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94LzRRTzN4NEZSdWV1djNQVkdJeVpVVkItaW1nLTJfMTc3MTExOTIwNTAwMF9uYTFmbl9jMjlzZFhScGIyNHRhRzl3WlMxamIyNTBaWGgwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=teW4xrCct20PXQmNN9Kstuzwuq3NN0h7-6q~UNsxhZ0cAYzrcUpfDoQMaU7sd9mF0L8Fgn1id8foOxmZkh8ZsgeUWrDQvRgiZSW9NmUpVtz3v0I2e8ic1gQRc4dmZ7j6J-gAEjceM0wCytUWe9G40nr39Ex7NnqdBg1szJHnSihwJKjSdKkuKzWTxOEBwXp9fT9Om7YPGNzmLzYmZ43nYN5iQV5yRhX0yQiG7W~YAPK8sMSNRn-Gtw3tQvKrJ~CW9WPvbzJj7SrTNOsAl9c2A-d9Fp3vFiClkPR4zIffmst1OVCcHw4A~qpVzYyPV-b-FyH1gi~yN4cB9320LHNBkA__"
            alt="Solução e esperança"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline text-[#0a0a0a] mb-16 text-center scroll-reveal" id="solution-title">
              A MUDANCA COMECA COM A <span className="text-[#2a9d8f]">CONSCIENCIA</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-16 scroll-reveal" id="solution-text">
              <p className="text-xl leading-relaxed text-[#0a0a0a]/80">
                Este e-book não foi escrito para acusar, assustar ou apontar dedos. 
                <strong className="text-[#0a0a0a]"> Ele foi escrito para acolher.</strong>
              </p>
              
              <p className="text-xl leading-relaxed text-[#0a0a0a]/80">
                Ao longo da minha trajetória como psicólogo, tenho visto um padrão se repetir: 
                pessoas inteligentes, responsáveis e trabalhadoras sendo gradualmente capturadas 
                por um sistema que explora fragilidades humanas básicas. <strong className="text-[#0a0a0a]">Não por falta de caráter. 
                Mas por funcionamento cerebral, emocional e social.</strong>
              </p>
            </div>
            
            <Card className="bg-white border-2 border-[#0a0a0a] p-10 shadow-2xl scroll-reveal" id="what-you-learn">
              <h3 className="text-subheadline text-[#0a0a0a] mb-8">O que você vai aprender:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como o cérebro funciona no vício</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">O papel real da ansiedade</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Por que a força de vontade falha</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Exemplos práticos de casos reais</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Orientações para reconhecimento</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Caminhos reais de recuperação</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Exercícios práticos aplicáveis</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <Check className="text-[#2a9d8f] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Estratégias de prevenção</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Contents Section */}
      <BookContents />

      {/* Author Section - Warm Background */}
      <section
        className="py-32 relative overflow-hidden grain-overlay"
        style={{
          backgroundColor: "#f5f1e8",
        }}
      >
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline text-[#0a0a0a] mb-16 text-center scroll-reveal" id="author-title">
              SOBRE O AUTOR
            </h2>
            
            <Card className="bg-white border-2 border-[#0a0a0a] p-12 shadow-2xl scroll-reveal" id="author-card">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-[#e76f51] to-[#2a9d8f] rounded-full flex items-center justify-center">
                    <Users size={80} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-4xl font-display mb-4">FABRICIO CANDIDO XAVIER</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 bg-[#2a9d8f] text-white px-4 py-2 rounded-full text-sm">
                      <Award size={16} />
                      Psicólogo
                    </span>
                    <span className="inline-flex items-center gap-2 bg-[#2a9d8f] text-white px-4 py-2 rounded-full text-sm">
                      <BookOpen size={16} />
                      Gestão de Pessoas
                    </span>
                    <span className="inline-flex items-center gap-2 bg-[#2a9d8f] text-white px-4 py-2 rounded-full text-sm">
                      <Users size={16} />
                      Saúde Emocional
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-lg leading-relaxed text-[#0a0a0a]/80">
                    <p>
                      Psicólogo especialista em Gestão de Pessoas e Saúde Emocional, com atuação voltada 
                      à compreensão do comportamento humano, desenvolvimento emocional e prevenção de 
                      adoecimentos psicológicos no contexto pessoal e profissional.
                    </p>
                    
                    <p>
                      Trabalha diretamente com pessoas que enfrentam ansiedade, sobrecarga emocional, 
                      dificuldades de autocontrole e comportamentos compulsivos, especialmente aqueles 
                      relacionados ao uso excessivo de jogos e apostas on-line.
                    </p>
                    
                    <p className="font-bold text-[#0a0a0a]">
                      Sua experiência une a prática clínica, a atuação em ambientes organizacionais e 
                      o contato direto com histórias reais de sofrimento silencioso.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t-2 border-[#0a0a0a]/10">
                    <p className="text-sm text-[#0a0a0a]/60">
                      <strong>Contato:</strong> contato@gestaofx.com.br
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold, Energetic */}
      <section
        id="cta-section"
        className="py-32 relative overflow-hidden grain-overlay"
        style={{
          backgroundColor: "#e76f51",
        }}
      >
        
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-white mb-8 scroll-reveal" id="cta-title">
              ESCOLHA-SE<br />
              <span className="text-[#0a0a0a]">TODOS OS DIAS</span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 leading-relaxed scroll-reveal" id="cta-subtitle">
              "Mudança não acontece da noite para o dia.<br />
              Mas ela sempre começa com um passo: <strong>a consciência.</strong>"
            </p>
            
            <Card className="bg-white border-4 border-[#0a0a0a] p-12 mb-12 scroll-reveal" id="cta-offer">
              <div className="mb-8">
                <div className="text-6xl font-display text-[#0a0a0a] mb-2">R$ 67,00</div>
                <p className="text-xl text-[#0a0a0a]/60">Investimento único • Acesso imediato</p>
              </div>
              
              <Button
                size="lg"
                className="bg-[#A89080] hover:bg-[#8B7355] text-white text-2xl px-16 py-10 rounded-none font-display tracking-wide pulse-cta shadow-2xl w-full md:w-auto"
                onClick={() => window.open('https://pay.hotmart.com/W104078613A', '_blank')}
              >
                QUERO RECUPERAR MEU CONTROLE AGORA
              </Button>
              
              <div className="mt-8 space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-[#0a0a0a]/80">
                  <Check className="text-[#2a9d8f] flex-shrink-0" size={20} />
                  <span>Acesso imediato após pagamento</span>
                </div>
                <div className="flex items-center gap-3 text-[#0a0a0a]/80">
                  <Check className="text-[#2a9d8f] flex-shrink-0" size={20} />
                  <span>E-book completo em PDF (57 páginas)</span>
                </div>
                <div className="flex items-center gap-3 text-[#0a0a0a]/80">
                  <Check className="text-[#2a9d8f] flex-shrink-0" size={20} />
                  <span>Exercícios práticos inclusos</span>
                </div>
                <div className="flex items-center gap-3 text-[#0a0a0a]/80">
                  <Check className="text-[#2a9d8f] flex-shrink-0" size={20} />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </Card>
            
            <p className="text-white/80 text-sm scroll-reveal" id="cta-disclaimer">
              * Este e-book não substitui acompanhamento psicológico ou psiquiátrico profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Workbook Section - Complementary Product */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: "#2a9d8f" }}>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline text-white mb-8 text-center scroll-reveal" id="workbook-title">
              APROFUNDE SUA <span className="text-[#f4a261]">RECUPERACAO</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-16 text-center leading-relaxed scroll-reveal" id="workbook-subtitle">
              Complemento prático com exercícios terapêuticos baseados em TCC
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Workbook Card */}
              <Card className="bg-white border-4 border-[#0a0a0a] p-10 scroll-reveal" id="workbook-card">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">📚 Workbook de Exercícios</h3>
                  <p className="text-lg text-[#0a0a0a]/80 mb-6">
                    Ansiedade e o Vício em Apostas On-Line
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="text-[#e76f51] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#0a0a0a]/80">5 capítulos com exercícios práticos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#e76f51] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#0a0a0a]/80">Diários de impacto e gatilhos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#e76f51] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#0a0a0a]/80">Técnicas de relaxamento e mindfulness</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#e76f51] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#0a0a0a]/80">Plano de prevenção de recaídas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-[#e76f51] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#0a0a0a]/80">Baseado em Terapia Cognitivo-Comportamental</span>
                  </div>
                </div>
                
                <div className="mb-8 p-6 bg-[#f5f1e8] rounded-lg">
                  <div className="text-4xl font-bold text-[#e76f51] mb-2">R$ 47,00</div>
                  <p className="text-sm text-[#0a0a0a]/60">Acesso imediato • PDF interativo</p>
                </div>
                
                <Button
                  size="lg"
                  className="bg-[#e76f51] hover:bg-[#d85a3d] text-white font-bold py-3 px-8 rounded-lg w-full text-lg"
                  onClick={() => window.open('https://pay.hotmart.com/L104480783A', '_blank')}
                >
                  COMPRAR WORKBOOK AGORA
                </Button>
              </Card>
              
              {/* Why Get Workbook */}
              <div className="flex flex-col justify-center scroll-reveal" id="workbook-benefits">
                <h3 className="text-2xl font-bold text-white mb-8">Por que complementar com o Workbook?</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#f4a261] mb-2">✓ Aprendizado Prático</h4>
                    <p className="text-white/90">Transforme o conhecimento teórico em ações concretas com exercícios estruturados.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#f4a261] mb-2">✓ Autoavaliação Contínua</h4>
                    <p className="text-white/90">Diários e tabelas para monitorar seu progresso e identificar padrões.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#f4a261] mb-2">✓ Ferramentas Terapêuticas</h4>
                    <p className="text-white/90">Técnicas de relaxamento, mindfulness e gestão de ansiedade prontas para usar.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#f4a261] mb-2">✓ Plano Personalizado</h4>
                    <p className="text-white/90">Construa seu próprio plano de recuperação e prevenção de recaídas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bundle Offer */}
            <Card className="bg-[#f4a261] border-4 border-white p-8 text-center scroll-reveal" id="bundle-offer">
              <h3 className="text-2xl font-bold text-white mb-4">🎁 OFERTA ESPECIAL</h3>
              <p className="text-lg text-white/90 mb-6">
                Compre o E-book + Workbook e economize!
              </p>
              <div className="flex justify-center gap-8 mb-8 items-center">
                <div>
                  <p className="text-sm text-white/80 mb-2">E-book + Workbook</p>
                  <p className="text-3xl font-bold text-white">R$ 97,00</p>
                  <p className="text-xs text-white/70 line-through">R$ 114,00</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">Ambos com garantia de 7 dias</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hope Section - You're Not Alone */}
      <section className="py-32 relative overflow-hidden grain-overlay" style={{ backgroundColor: "#f5f1e8" }}>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal" id="hope-section">
            <h2 className="text-headline text-[#0a0a0a] mb-8">
              VOCE NAO ESTA <span className="text-[#2a9d8f]">SOZINHO</span>
            </h2>
            <p className="text-2xl text-[#0a0a0a]/80 mb-12 leading-relaxed">
              Mais de <strong>1.000 pessoas</strong> ja comecaram sua jornada de recuperacao com este conteudo.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-5xl font-bold text-[#e76f51] mb-4">1.000+</div>
                <p className="text-lg text-[#0a0a0a]/80">Pessoas transformadas</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-5xl font-bold text-[#2a9d8f] mb-4">4.9</div>
                <p className="text-lg text-[#0a0a0a]/80">Avaliacao media</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-5xl font-bold text-[#A89080] mb-4">7 dias</div>
                <p className="text-lg text-[#0a0a0a]/80">Garantia total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Guarantee Section */}
      <Guarantee />

      {/* FAQ Section */}
      <section className="py-32 bg-[#f5f1e8]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline text-[#0a0a0a] mb-16 text-center scroll-reveal" id="faq-title">
              PERGUNTAS FREQUENTES
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal" id="faq-1">
                <h3 className="text-2xl font-display mb-4">Este e-book substitui terapia?</h3>
                <p className="text-lg text-[#0a0a0a]/80 leading-relaxed">
                  Não. Este material tem caráter educativo, preventivo e orientativo. Em casos de 
                  sofrimento emocional intenso, comportamento compulsivo grave ou prejuízos significativos, 
                  é fundamental buscar ajuda profissional especializada.
                </p>
              </Card>
              
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal" id="faq-2">
                <h3 className="text-2xl font-display mb-4">Quanto tempo leva para ler?</h3>
                <p className="text-lg text-[#0a0a0a]/80 leading-relaxed">
                  O e-book tem 57 páginas e pode ser lido em 2-3 horas. Porém, recomendamos uma leitura 
                  reflexiva, fazendo pausas para os exercícios práticos e reflexões propostas.
                </p>
              </Card>
              
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal" id="faq-3">
                <h3 className="text-2xl font-display mb-4">Funciona para qualquer tipo de vício em apostas?</h3>
                <p className="text-lg text-[#0a0a0a]/80 leading-relaxed">
                  Sim. O conteúdo aborda os mecanismos neurológicos e emocionais que são comuns a todos 
                  os tipos de apostas e jogos online, sejam apostas esportivas, cassinos virtuais ou 
                  qualquer outra modalidade.
                </p>
              </Card>
              
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal" id="faq-4">
                <h3 className="text-2xl font-display mb-4">E se eu recair depois de ler?</h3>
                <p className="text-lg text-[#0a0a0a]/80 leading-relaxed">
                  A recaída faz parte do processo de recuperação. O e-book dedica um capítulo inteiro 
                  para abordar esse tema, explicando por que acontece e como lidar com ela de forma 
                  construtiva, sem culpa paralisante.
                </p>
              </Card>
              
              <Card className="bg-white border-2 border-[#0a0a0a] p-8 scroll-reveal" id="faq-5">
                <h3 className="text-2xl font-display mb-4">Como recebo o produto?</h3>
                <p className="text-lg text-[#0a0a0a]/80 leading-relaxed">
                  Após a confirmação do pagamento, você receberá um e-mail com o link para download 
                  do e-book em formato PDF. O acesso é imediato e vitalício.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16 pb-20 border-t border-white/10">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h4 className="text-xl font-display text-[#e76f51] mb-4">PROJETO RECUPERAR CONTROLE</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Uma iniciativa dedicada a transformar vidas atraves da educacao, acolhimento e ciencia.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
                <p className="text-white/70 text-sm">
                  contato@gestaofx.com.br
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Informacoes</h4>
                <p className="text-white/70 text-sm">
                  Este material e educativo e complementar ao acompanhamento profissional.
                </p>
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
      <EmailCaptureModal />
    </div>
  );
}
