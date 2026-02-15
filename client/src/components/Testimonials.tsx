import { Card } from "@/components/ui/card";
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
    <section className="py-32 bg-gradient-to-b from-[#f5f1e8] to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-headline text-[#0a0a0a] mb-4 text-center scroll-reveal" id="testimonials-title">
            QUEM LEU, <span className="text-[#10b981]">TRANSFORMOU</span>
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
                <Quote className="text-[#10b981] mb-6" size={48} />
                
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
                
                <div className="mt-4 bg-[#10b981]/10 border-l-4 border-[#10b981] p-4">
                  <p className="text-sm font-bold text-[#10b981]">
                    {testimonial.highlight}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-sm text-[#0a0a0a]/40 mt-12 scroll-reveal" id="testimonials-disclaimer">
            * Depoimentos anônimos preservados por questões de privacidade
          </p>
        </div>
      </div>
    </section>
  );
}
