import { Card } from "@/components/ui/card";
import { Shield, RefreshCw, Lock } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#1e3a8a] border-4 border-[#0a0a0a] p-12 text-center scroll-reveal" id="guarantee-card">
            <Shield className="mx-auto text-white mb-6" size={80} />
            
            <h3 className="text-4xl font-display text-white mb-6 tracking-wider">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Se por qualquer motivo você sentir que este material não está te ajudando, 
              basta enviar um e-mail dentro de 7 dias e devolvemos <strong>100% do seu investimento</strong>, 
              sem perguntas, sem burocracia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <RefreshCw className="mx-auto text-white mb-4" size={40} />
                <p className="text-white font-bold">Devolução Total</p>
                <p className="text-white/70 text-sm mt-2">100% do valor de volta</p>
              </div>
              
              <div className="text-center">
                <Lock className="mx-auto text-white mb-4" size={40} />
                <p className="text-white font-bold">Compra Segura</p>
                <p className="text-white/70 text-sm mt-2">Plataforma Hotmart</p>
              </div>
              
              <div className="text-center">
                <Shield className="mx-auto text-white mb-4" size={40} />
                <p className="text-white font-bold">Risco Zero</p>
                <p className="text-white/70 text-sm mt-2">Você não perde nada</p>
              </div>
            </div>
            
            <p className="text-white/70 text-sm mt-8 italic">
              Acreditamos tanto no valor deste conteúdo que assumimos todo o risco para você.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
