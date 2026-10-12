import React from 'react';
import { UtensilsCrossed, Flame, Clock, Sparkles } from 'lucide-react';
import { RECEITAS_PREVIEW } from '../images';

export const WhatYouWillReceive: React.FC = () => {
  // Duplicamos a lista para criar o loop contínuo e infinito
  const carouselItems = [...RECEITAS_PREVIEW, ...RECEITAS_PREVIEW];

  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
          <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-600" />
          <span>CARDÁPIO PRÁTICO & SABOROSO</span>
        </div>

        {/* Título Principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          Veja o que você vai saborear no dia a dia
        </h2>

        {/* Subtítulo Descritivo */}
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Receitas planejadas para não elevar a glicose: fotos reais, modo de preparo passo a passo, contagem exata de carboidratos líquidos e tempo de cozinha de 10 a 25 minutos.
        </p>
      </div>

      {/* Container do Carrossel Infinito */}
      <div className="relative w-full overflow-hidden py-2 select-none">
        {/* Máscara suave à esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        {/* Máscara suave à direita */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        {/* Trilho de Cards de Receitas passando infinitamente */}
        <div className="animate-infinite-scroll flex items-center gap-4 sm:gap-6">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[240px] sm:w-[280px] bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden shrink-0 flex flex-col text-left group hover:shadow-md transition-shadow"
            >
              <div className="w-full h-36 relative overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-[#0F392B]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  {item.carbs}
                </span>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <h4 className="font-bold text-xs sm:text-sm text-neutral-900 line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-semibold">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    {item.glycemicIndex}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <Clock className="w-3 h-3" />
                    {item.prepTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
