import React from 'react';
import { Gift, ShoppingBag, BookOpen, Sparkles, CupSoda, ClipboardList } from 'lucide-react';
import { IMAGES } from '../images';

interface BonusItem {
  id: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  originalPrice: string;
  description: string;
}

const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    image: IMAGES.bonusGuia,
    alt: 'Bônus 1 - Lista de Compras Inteligente',
    icon: ShoppingBag,
    title: 'Lista de Compras Inteligente',
    originalPrice: 'R$ 19,90',
    description: 'Lista organizada por setor do mercado para economizar e comprar apenas o que faz bem.',
  },
  {
    id: 'bonus-2',
    image: IMAGES.bonusFicha,
    alt: 'Bônus 2 - Guia de Rótulos Diet/Light',
    icon: BookOpen,
    title: 'Guia de Rótulos & Armadilhas',
    originalPrice: 'R$ 19,90',
    description: 'Identifique nomes ocultos do açúcar e produtos falsamente saudáveis.',
  },
  {
    id: 'bonus-3',
    image: IMAGES.bonusDoces,
    alt: 'Bônus 3 - Sobremesas Zero Açúcar',
    icon: Sparkles,
    title: 'Sobremesas & Doces Sem Culpa',
    originalPrice: 'R$ 29,90',
    description: '15 receitas de doces com adoçantes naturais e farinhas de baixo IG.',
  },
  {
    id: 'bonus-4',
    image: IMAGES.bonusChas,
    alt: 'Bônus 4 - Manual de Chás Matinais',
    icon: CupSoda,
    title: 'Manual de Chás & Shots Matinais',
    originalPrice: 'R$ 19,90',
    description: 'Combinações naturais para auxiliar a sensibilidade à insulina.',
  },
  {
    id: 'bonus-5',
    image: IMAGES.bonusDiario,
    alt: 'Bônus 5 - Diário Glicêmico Imprimível',
    icon: ClipboardList,
    title: 'Diário de Controle Glicêmico',
    originalPrice: 'R$ 14,90',
    description: 'Ficha para registrar medições e levar pronta na consulta médica.',
  },
];

export const BonusSection: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
          <Gift className="w-3.5 h-3.5 text-emerald-600" />
          <span>5 PRESENTES EXCLUSIVOS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          5 Bônus Gratuitos Inclusos
        </h2>

        {/* Grid de Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BONUSES.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-white border border-neutral-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col text-left relative group"
              >
                {/* Selo */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="bg-[#16a34a] text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    GRÁTIS
                  </span>
                </div>

                {/* Imagem completa sem corte */}
                <div className="w-full bg-[#F8FAFC] border-b border-neutral-100 flex items-center justify-center p-3">
                  <img
                    src={bonus.image}
                    alt={bonus.alt}
                    className="w-full h-auto max-h-56 object-contain group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  {/* Título com ícone */}
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-sm font-black text-neutral-900 line-clamp-1">
                      {bonus.title}
                    </h3>
                  </div>

                  {/* Preço riscado */}
                  <span className="text-xs text-neutral-400 font-bold line-through mb-1.5">
                    {bonus.originalPrice}
                  </span>

                  {/* Descrição curta */}
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
