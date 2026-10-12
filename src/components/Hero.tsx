import React from 'react';
import { ArrowDown, Utensils, HeartPulse, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';
import { IMAGES } from '../images';

interface HeroProps {
  onCtaClick: () => void;
  ctaRef?: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, ctaRef }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-10 bg-[#FAF9F6] text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Selo */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200/90 uppercase tracking-wider mb-3.5 shadow-2xs">
          <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
          <span>APP & GUIA DEFINITIVO PARA CONTROLE DA GLICEMIA</span>
        </div>

        {/* H1 Principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F392B] tracking-tight leading-[1.18] max-w-3xl text-balance">
          +150 Receitas e Cardápios para Pré-Diabéticos e Diabéticos
        </h1>

        {/* Subtítulo em destaque */}
        <p className="mt-2 text-xl sm:text-2xl font-black text-[#059669] tracking-tight">
          Coma com prazer. Controle a glicose sem passar fome.
        </p>

        {/* Mockup do App / Produto com Card Estilizado de Alta Conversão */}
        <div className="w-full max-w-3xl mt-5 mb-5 relative flex flex-col items-center">
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-emerald-900 to-[#0F392B] p-5 sm:p-7 text-white text-left">
            {/* Elementos visuais de destaque */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Acesso no Celular, Tablet e Computador</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black leading-tight text-white">
                  Tudo o que você precisa na palma da mão
                </h2>
                <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-100 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>+150 receitas divididas por refeição</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cardápios semanais prontos e balanceados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Lista de compras inteligente da feira e mercado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tabela de substituição e contagem de carboidratos</span>
                  </li>
                </ul>
              </div>

              {/* Imagem de Prato Saudável Apetitoso */}
              <div className="w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 shrink-0 relative group">
                <img
                  src={IMAGES.heroMockup}
                  alt="Pratos saudáveis e receitas para pré-diabéticos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Receitas práticas de 10 a 25 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed text-balance">
          Esqueça dietas sem graça e a dúvida do que pode ou não comer. Um método prático com receitas por refeição (café, almoço, jantar e lanches), cardápios semanais, listas de compras e contagem exata de carboidratos.
        </p>

        {/* Botão de Ação Verde Pulsante */}
        <div ref={ctaRef} className="mt-5 flex flex-col items-center w-full sm:w-auto">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-9 py-3.5 text-base sm:text-lg font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-lg transition-all duration-150 tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2 focus:outline-hidden btn-pulsing"
          >
            <span>QUERO ACESSAR O APP AGORA</span>
            <ArrowDown className="w-4 h-4 text-white" />
          </button>

          {/* Microcopy */}
          <p className="mt-2.5 text-xs text-neutral-500 font-semibold">
            Acesso imediato · Garantia incondicional de 7 dias · Celular e PDF
          </p>
        </div>

      </div>
    </section>
  );
};
