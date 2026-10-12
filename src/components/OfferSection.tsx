import React, { useState, useEffect } from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

interface OfferSectionProps {
  onSelectBasic: () => void;
  onSelectPremium: () => void;
  offerRef?: React.RefObject<HTMLDivElement | null>;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  onSelectBasic,
  onSelectPremium,
  offerRef,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 28,
    seconds: 37,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative scroll-mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título da Seção */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          Escolha seu plano
        </h2>

        {/* Banner de tempo limite com countdown */}
        <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-neutral-100 text-neutral-800 border border-neutral-300">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            OFERTA EXPIRA EM: {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
          </span>
        </div>

        {/* Grade com 2 Planos */}
        <div 
          ref={offerRef}
          className="mt-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-end max-w-4xl mx-auto text-left"
        >
          
          {/* Plano Básico - R$ 10,00 (Somente 50 Receitas) */}
          <div className="md:col-span-5 bg-white border border-neutral-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-neutral-900">Plano Básico</h3>
              <p className="text-xs text-neutral-500 mt-0.5">Acesso rápido ao essencial.</p>

              <div className="mt-3 pb-3 border-b border-neutral-100">
                <span className="text-3xl font-black text-neutral-900">{CONFIG.PRICE_BASIC}</span>
                <span className="text-xs text-neutral-500 block mt-0.5">Pagamento único</span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-center gap-2.5 font-bold text-neutral-900">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0 stroke-[3]" />
                  <span>50 receitas selecionadas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Acesso imediato no e-mail</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>Formato digital para celular</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onSelectBasic}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-md transition-all cursor-pointer text-center uppercase tracking-wider btn-pulsing"
              >
                Quero agora
              </button>
            </div>
          </div>

          {/* Plano Premium - R$ 27,90 (Mais Escolhido - +150 Receitas + Cardápios + App + 2 Bônus) */}
          <div className="md:col-span-7 bg-white border-2 border-[#0F392B] rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col justify-between relative">
            
            {/* Tag Mais Escolhido em Verde Esmeralda */}
            <div className="absolute -top-3.5 right-6">
              <span className="bg-[#16a34a] text-white text-[11px] font-black tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md">
                MAIS ESCOLHIDO
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-[#0F392B]">Plano Completo Premium</h3>
                <span className="text-xs font-bold text-emerald-600">+150 Receitas + 5 Bônus</span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Acesso completo com aplicativo, cardápios semanais, lista de compras e 5 bônus.
              </p>

              <div className="mt-3 pb-3 border-b border-neutral-100">
                <span className="text-3xl sm:text-4xl font-black text-[#0F392B]">
                  {CONFIG.PRICE_PREMIUM}
                </span>
                <span className="text-xs text-neutral-500 block mt-0.5">
                  Pagamento único · Sem mensalidade
                </span>
              </div>

              {/* Checklist 2 Colunas */}
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-neutral-700">
                <li className="flex items-center gap-2 font-bold text-neutral-900">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0 stroke-[3]" />
                  <span>+150 receitas por refeição</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Acesso imediato no e-mail</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Cardápios semanais prontos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Café, almoço, jantar e lanches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Contagem de carboidratos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Tabela de substituições</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>No celular, tablet e PC</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Acesso vitalício</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#0F392B]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bônus 1: Lista de Compras</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#0F392B]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bônus 2: Guia de Rótulos</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#0F392B]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bônus 3: Sobremesas Sem Açúcar</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#0F392B]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bônus 4: Manual Chás & Shots</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#0F392B] sm:col-span-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bônus 5: Diário de Controle Glicêmico Imprimível</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onSelectPremium}
                className="w-full py-3.5 px-6 text-sm sm:text-base font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-hidden uppercase tracking-wider btn-pulsing"
              >
                <span>Quero agora</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <p className="mt-2 text-center text-[11px] text-neutral-400 font-medium">
                Garantia incondicional de 7 dias · Entrega imediata
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
