import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Check, BookOpen, Users, Award, ChevronDown } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import UrgencyBar from "@/components/UrgencyBar";
import BookContents from "@/components/BookContents";

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
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
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
        
        <div className="container relative z-10 text-center px-6">
          <h1 className="text-display text-white mb-8 leading-none">
            VOCÊ NÃO É FRACO.<br />
            <span className="text-[#e76f51]">VOCÊ ESTÁ PRESO</span><br />
            EM UM CICLO.
          </h1>
          
          <p className="text-body-large text-white/90 max-w-3xl mx-auto mb-12">
            Descubra como o cérebro é capturado pelas apostas, por que a força de vontade falha 
            e o caminho real para retomar sua autonomia — sem julgamento, sem promessas mágicas, 
            apenas ciência e acolhimento.
          </p>
          
          <Button
            size="lg"
            className="bg-[#e76f51] hover:bg-[#d65d42] text-white text-xl px-12 py-8 rounded-none font-display tracking-wide pulse-cta shadow-2xl"
            onClick={() => scrollToSection("cta-section")}
          >
            QUERO RECUPERAR MEU CONTROLE AGORA
          </Button>
          
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
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/PGcPTB8bI0qLrPmUDkWBQ1-img-4_1771116169000_na1fn_c3RhdGlzdGljcy1vdmVybGF5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94L1BHY1BUQjhiSTBxTHJQbVVEa1dCUTEtaW1nLTRfMTc3MTExNjE2OTAwMF9uYTFmbl9jM1JoZEdsemRHbGpjeTF2ZG1WeWJHRjUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EeWfvmasKgvvcvSzp0~BnQF4BHDSwsmx5kxwXg9yIBO3RqLtwueBLwOmcDHnC6PWVdFgWYgpakFFv8f1qSoMzMI-6aqbFc8I~v539I2-8K1EzOhxolw8646nEN1apCuQ4ElqQAyTw7DaEiHaKdV7x1g9LNrL60s23JJe9lAwZh6N3~YQAJaZB6XATLxUnZJdg7J82B6IGGsbb1MM5Skh64X0A6sUA-M0tVa3hjqhZDDdN8E0cFwa8M-ebqswMFOjcARnD36ik6EoXBMYavFjvAwTLhvInX0a-PQwVuyCKysdBRuRMh-xW2lriubGCPFuaMA9mVi~tOf0mEZ~fwwUQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        
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

      {/* Solution Section - Light Background with Transformation Visual */}
      <section
        className="py-32 relative overflow-hidden grain-overlay"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/PGcPTB8bI0qLrPmUDkWBQ1-img-2_1771116167000_na1fn_dHJhbnNmb3JtYXRpb24tdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94L1BHY1BUQjhiSTBxTHJQbVVEa1dCUTEtaW1nLTJfMTc3MTExNjE2NzAwMF9uYTFmbl9kSEpoYm5ObWIzSnRZWFJwYjI0dGRtbHpkV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=X~d9x5~iLZdeSHjPLSkKuNbzes2nUb1lSXKrnrs6UdVhkuNRWldpX3Gfe~hLW19Y02fPDZZcagRaOyrI9bChH7Ughq0swVq-A6tTOGAgcVn3uDZ0XP6ahSpKcz2p~1rKwWED2jDXhcq6w2ycD6k0A01KCL8OCWXUr8ECASs2EkMBKGIZsTxucAZeakp8k5eoJ~yku2Dst2w8QWU7wFVeE4qediY-O4qreQPXTVF0Z1IaXxe8cUm5i87qlLN5LtlKYs4~KZrtUXaPKgh4mtPb7JxUGFdbmoYISgcNcta01~JZpiT2s0sZJv4nrcI5BT93CFrMu95VIl5U1IHLr2rRdQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline text-[#0a0a0a] mb-12 scroll-reveal" id="solution-title">
              A MUDANÇA COMEÇA COM A <span className="text-[#2a9d8f]">CONSCIÊNCIA</span>
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
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/PGcPTB8bI0qLrPmUDkWBQ1-img-3_1771116164000_na1fn_YXV0aG9yLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94L1BHY1BUQjhiSTBxTHJQbVVEa1dCUTEtaW1nLTNfMTc3MTExNjE2NDAwMF9uYTFmbl9ZWFYwYUc5eUxYTmxZM1JwYjI0dFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Iaw6Aps8eJ5JonVj2pb1qFSyaXm2BOAxweLDi0OIkX6JopB0Q0-cgOk6kDA1LYreXttZGAq3y6Wmv~PONkWC5WXiISeNMu5h3zSOj2IlCJr02QdCjphyXwl3nFoHtWr~hICr0B8FxYjv0BdV3kgX0CmY-gdfv7kYRmoI7PyqTM8T4c7Wa9EL5MQ2ps0~oOsM0AwKYX-s26CL8cDHjzXkjnicGFHgUknYv-Jn1jh5omYKec-awG~G2X1Rkk0u9-Iyj9oXDwP53pQNyc93n0ggjc1Az-Ae7fQzArmIJUH6KpvWOT8a2oue9pICEZCYMpgUi7qtLLYXMES0LlbjxjjI3Q__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f5f1e8",
        }}
      >
        <div className="absolute inset-0 bg-[#f5f1e8]/90" />
        
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
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/PGcPTB8bI0qLrPmUDkWBQ1-img-5_1771116168000_na1fn_Y3RhLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZE5XYzZQZnFuaXVsUjZQdFBNdEJaTi9zYW5kYm94L1BHY1BUQjhiSTBxTHJQbVVEa1dCUTEtaW1nLTVfMTc3MTExNjE2ODAwMF9uYTFmbl9ZM1JoTFhObFkzUnBiMjR0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sf6XgChXBCqCmGxv~FD1J3MrZouWn6xEndQ2oXyNJ~OTzmwoDUGrWYTMf9569JndIe6PZPJvEpY-F6O0XjO8z5XdOM8NPwmzLutucdw4-2W-y-PLjrTUfBpiata2ruHFrHOSkQxYD2A~Z-C~~~oldwMq9MRC87sKAbyWjRf3ptJ45vZBb7b0BsTspipRscLAPCCGbP8yE0uuR8l2TAZm4VwaGswqnOEIoPzZyuFQYUkhVt0-8~BAsST9JQdqBg4CiW2f5W1r3tat~3TbtiuNojFu99-KgW7vdTZtlGh3lz6yIM~RhuLL4ciyaRKbH7mZ-JAqlttG1X1rEJpliBCJWg__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#e76f51]/90 via-[#e76f51]/80 to-[#2a9d8f]/90" />
        
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
                className="bg-[#e76f51] hover:bg-[#d65d42] text-white text-2xl px-16 py-10 rounded-none font-display tracking-wide pulse-cta shadow-2xl w-full md:w-auto"
                onClick={() => {
                  // TODO: Integrar com Hotmart
                  alert("Redirecionando para checkout do Hotmart...");
                }}
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
      <footer className="bg-[#0a0a0a] text-white py-12 pb-20">
        <div className="container text-center">
          <p className="text-lg mb-4">
            © 2026 Fabricio Candido Xavier • Todos os direitos reservados
          </p>
          <p className="text-white/60 text-sm">
            contato@gestaofx.com.br
          </p>
        </div>
      </footer>
    </div>
  );
}
