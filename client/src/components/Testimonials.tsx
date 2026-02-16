import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "M.S.",
    role: "Recuperação há 6 meses",
    content: "Eu achava que era só eu que não conseguia parar. Ler este livro me fez entender que não é falta de caráter, é como o cérebro funciona. Pela primeira vez em anos, senti que alguém realmente entendia o que eu estava passando.",
    highlight: "Pela primeira vez, senti que alguém entendia"
  },
  {
    name: "R.L.",
    role: "Familiar de pessoa em recuperação",
    content: "Comprei para entender o que meu irmão estava passando. O livro me ajudou a parar de julgar e começar a apoiar de verdade. Hoje nossa relação está muito melhor e ele está em tratamento.",
    highlight: "Parei de julgar e comecei a apoiar de verdade"
  },
  {
    name: "A.P.",
    role: "Em processo de recuperação",
    content: "O capítulo sobre ansiedade foi um soco no estômago. Eu usava o jogo para fugir da ansiedade, mas só piorava tudo. Entender isso mudou minha perspectiva completamente. Hoje estou há 45 dias sem apostar.",
    highlight: "45 dias sem apostar"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#f5f1e8] to-white relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-96 opacity-15 pointer-events-none">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/4QO3x4FRueuv3PVGIyZUVB-img-3_1771119206000_na1fn_cmVjb3Zlcnktam91cm5leS1jb250ZXh0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
          alt="Jornada de recuperacao"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-headline text-[#0a0a0a] mb-4 text-center scroll-reveal" id="testimonials-title">
            QUEM LEU, <span className="text-[#2a9d8f]">TRANSFORMOU</span>
          </h2>
          
          <p className="text-center text-xl text-[#0a0a0a]/60 mb-16 scroll-reveal" id="testimonials-subtitle">
            Depoimentos reais de pessoas que deram o primeiro passo
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#0a0a0a] p-8 hover:shadow-2xl transition-shadow duration-300 scroll-reveal"
                id={`testimonial-${index + 1}`}
              >
                <Quote className="text-[#e76f51] mb-6" size={48} />
                
                <p className="text-lg leading-relaxed text-[#0a0a0a]/80 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t-2 border-[#0a0a0a]/10">
                  <p className="font-display text-xl text-[#0a0a0a] mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#0a0a0a]/60">
                    {testimonial.role}
                  </p>
                </div>
                
                <div className="mt-4 bg-[#2a9d8f]/10 border-l-4 border-[#2a9d8f] p-4">
                  <p className="text-sm font-bold text-[#2a9d8f]">
                    {testimonial.highlight}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-sm text-[#0a0a0a]/40 mt-12 scroll-reveal" id="testimonials-disclaimer">
            * Depoimentos anônimos preservados por questões de privacidade
          </p>
          
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 scroll-reveal" id="testimonials-cta-section">
            <div className="flex-1 flex justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357442783/wWjidIuoBmcbapBr.jpg"
                alt="E-book Best Seller"
                className="max-w-xs h-auto drop-shadow-2xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-subheadline text-[#0a0a0a] mb-6">Transforme sua vida com base em ciência e acolhimento</h3>
              <p className="text-lg text-[#0a0a0a]/80 mb-8">Mais de 1000 pessoas já transformaram suas vidas com este conteúdo. Seja o próximo a dar o primeiro passo.</p>
              <Button
                size="lg"
                className="bg-[#A89080] hover:bg-[#8B7355] text-white text-lg px-12 py-6 rounded-none font-display tracking-wide shadow-2xl"
                onClick={() => window.open('https://pay.hotmart.com/W104078613A', '_blank')}
              >
                COMPRAR AGORA - R$ 67,00
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
