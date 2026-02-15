import { Card } from "@/components/ui/card";
import { Shield, RefreshCw, Lock } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/dNWc6PfqniulR6PtPMtBZN/sandbox/4QO3x4FRueuv3PVGIyZUVB-img-4_1771119205000_na1fn_dHJ1c3Qtc2FmZXR5LWNvbnRleHQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
          alt="Confianca e seguranca"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#2a9d8f] to-[#1a7a6e] border-4 border-[#0a0a0a] p-12 text-center scroll-reveal" id="guarantee-card">
            <Shield className="mx-auto text-white mb-6" size={80} />
            
            <h3 className="text-4xl font-display text-white mb-6">
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
            
            <p className="text-white/60 text-sm mt-8">
              Acreditamos tanto no valor deste conteúdo que assumimos todo o risco para você.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
