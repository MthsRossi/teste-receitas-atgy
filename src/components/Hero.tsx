import React from 'react';
import { ArrowDown } from 'lucide-react';
import { IMAGES } from '../images';

interface HeroProps {
  onCtaClick: () => void;
  ctaRef?: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, ctaRef }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-10 bg-[#FAF9F6] text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* H1 Principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F392B] tracking-tight leading-[1.18] max-w-3xl text-balance">
          +150 Receitas e Cardápios para Pré-Diabéticos e Diabéticos
        </h1>

        {/* Subtítulo */}
        <p className="mt-2 text-xl sm:text-2xl font-black text-[#059669] tracking-tight">
          Coma com prazer. Controle a glicose sem passar fome.
        </p>

        {/* Mockup direto, sem card escuro */}
        <div className="w-full max-w-lg mt-6 mb-5">
          <img
            src={IMAGES.heroMockup}
            alt="Mockup premium +150 receitas para pré-diabéticos e diabéticos"
            className="w-full h-auto rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>

        {/* Botão CTA */}
        <div ref={ctaRef} className="flex flex-col items-center w-full sm:w-auto">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-9 py-3.5 text-base sm:text-lg font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-lg transition-all duration-150 tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2 focus:outline-hidden btn-pulsing"
          >
            <span>QUERO ACESSAR AGORA</span>
            <ArrowDown className="w-4 h-4 text-white" />
          </button>
          <p className="mt-2.5 text-xs text-neutral-500 font-semibold">
            Acesso imediato · Garantia de 7 dias · Celular e PDF
          </p>
        </div>

      </div>
    </section>
  );
};
