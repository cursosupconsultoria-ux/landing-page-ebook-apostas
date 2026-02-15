import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const chapters = [
  {
    number: 1,
    title: "Quando o Jogo Deixa de Ser Jogo",
    description: "O início quase sempre é inocente. Entenda o ponto de virada e o autoengano mais comum."
  },
  {
    number: 2,
    title: "A Mente, a Dopamina e o Ciclo do Vício",
    description: "O mecanismo que prende: recompensa variável, por que a força de vontade falha e o embotamento emocional."
  },
  {
    number: 3,
    title: "A Armadilha Invisível: Quando a Mente Começa a Mentir",
    description: "Racionalização, autoengano, quando o jogo vira identidade e o isolamento silencioso."
  },
  {
    number: 4,
    title: "O Silêncio de Quem Sofre",
    description: "Vergonha, medo e o peso de pedir ajuda. Por que o silêncio aprisiona e não protege."
  },
  {
    number: 5,
    title: "A Ansiedade Como Combustível",
    description: "Quando o jogo vira anestesia emocional. O ciclo invisível da ansiedade e o que acontece no corpo."
  },
  {
    number: 6,
    title: "Quando a Conta Chega",
    description: "O impacto real do vício: financeiro, nos relacionamentos e a dívida invisível de culpa e vergonha."
  },
  {
    number: 7,
    title: "O Primeiro Passo Não É Parar — É Entender",
    description: "Por que tentar parar à força falha. O papel da consciência e o erro de tentar controlar tudo sozinho."
  },
  {
    number: 8,
    title: "Retomar o Controle: Um Dia de Cada Vez",
    description: "A regra do dia possível, criando nova estrutura e o papel das recaídas no processo."
  },
  {
    number: 9,
    title: "Reconstruindo a Confiança",
    description: "Por dentro e por fora. A primeira confiança que precisa voltar é a sua. Como reconquistar a confiança dos outros."
  },
  {
    number: 10,
    title: "O Próximo Passo: Escolher-se Todos os Dias",
    description: "A verdade que ninguém gosta de ouvir. A decisão que muda tudo e exercícios práticos finais."
  }
];

export default function BookContents() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#f5f1e8]">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-reveal" id="contents-header">
            <BookOpen className="mx-auto text-[#10b981] mb-6" size={64} />
            <h2 className="text-headline text-[#0a0a0a] mb-4">
              O QUE VOCÊ VAI <span className="text-[#10b981]">DESCOBRIR</span>
            </h2>
            <p className="text-xl text-[#0a0a0a]/60">
              10 capítulos que vão mudar sua compreensão sobre o vício em apostas
            </p>
          </div>
          
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#0a0a0a] p-8 hover:shadow-xl transition-all duration-300 hover:translate-x-2 scroll-reveal"
                id={`chapter-${chapter.number}`}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#e76f51] via-[#2563eb] to-[#10b981] rounded-lg flex items-center justify-center">
                      <span className="text-3xl font-display text-white">
                        {chapter.number}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display text-[#0a0a0a] mb-3 leading-tight">
                      {chapter.title}
                    </h3>
                    <p className="text-lg text-[#0a0a0a]/70 leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center scroll-reveal" id="contents-footer">
            <Card className="bg-gradient-to-br from-[#10b981] via-[#14b8a6] to-[#06b6d4] border-4 border-[#0a0a0a] p-8 inline-block">
              <p className="text-white text-2xl font-display">
                <span className="text-5xl font-bold">57</span> PÁGINAS DE CONTEÚDO TRANSFORMADOR
              </p>
              <p className="text-white/80 mt-2">
                + Exercícios práticos + Exemplos reais + Orientações aplicáveis
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
