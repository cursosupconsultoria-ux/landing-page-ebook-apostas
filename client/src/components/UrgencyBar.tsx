import { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

export default function UrgencyBar() {
  const [viewers, setViewers] = useState(0);
  const [sales, setSales] = useState(0);

  useEffect(() => {
    // Simular visualizações em tempo real (entre 15-25)
    const baseViewers = 15 + Math.floor(Math.random() * 10);
    setViewers(baseViewers);

    // Simular vendas recentes (entre 3-8)
    const baseSales = 3 + Math.floor(Math.random() * 5);
    setSales(baseSales);

    // Atualizar visualizações a cada 5-10 segundos
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(12, Math.min(30, newValue));
      });
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#e76f51] to-[#d65d42] text-white py-3 z-50 shadow-2xl">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Eye size={20} className="animate-pulse" />
            <span>
              <strong className="font-display text-lg">{viewers}</strong> pessoas visualizando agora
            </span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-white/30" />
          
          <div className="flex items-center gap-2">
            <TrendingUp size={20} />
            <span>
              <strong className="font-display text-lg">{sales}</strong> cópias vendidas nas últimas 24h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
