import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="py-8 md:py-10 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Arredondado em Verde Escuro com Botão Verde Pulsante */}
        <div className="bg-[#0F392B] text-white rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
          
          {/* Círculos decorativos sutis */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-balance">
            Volte a ter o prazer de sentar à mesa com saúde e segurança.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto leading-relaxed">
            +150 receitas, cardápios prontos e contagem de carboidratos no seu celular.
          </p>

          <div className="mt-6 flex flex-col items-center">
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-3.5 text-sm sm:text-base font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 focus:outline-hidden btn-pulsing"
            >
              <span>QUERO ACESSAR O APP AGORA</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <div className="flex items-center gap-2 text-xs text-emerald-200 mt-3.5 font-medium">
              <span>Acesso imediato</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span>Plano Completo por apenas {CONFIG.PRICE_PREMIUM}</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span>Garantia incondicional de 7 dias</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
