import React from 'react';
import { 
  Coffee, 
  Utensils, 
  Moon, 
  Apple, 
  CalendarDays, 
  ShoppingCart, 
  Repeat, 
  Calculator,
  ShieldCheck
} from 'lucide-react';

interface BlockItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  coverImage?: string;
}

const BLOCKS: BlockItem[] = [
  {
    id: 'cafe',
    title: 'Café da Manhã Energético',
    description: 'Pães de frigideira low carb, omeletes especiais, panquecas de aveia e bebidas que evitam picos de glicemia logo no início do dia.',
    icon: Coffee,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    coverImage: '/images/cafe.svg',
  },
  {
    id: 'almoco',
    title: 'Almoço Completo e Nutritivo',
    description: 'Combinações ricas em fibras, carnes nobres, peixes, vegetais da estação e grãos integrais selecionados para manter a curva glicêmica plana.',
    icon: Utensils,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    coverImage: '/images/almoco.svg',
  },
  {
    id: 'jantar',
    title: 'Jantar Leve & Caldos Noturnos',
    description: 'Sopas reconfortantes, saladas saciantes e proteínas de fácil digestão para garantir uma boa noite de sono com glicose controlada até a manhã.',
    icon: Moon,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-700',
    coverImage: '/images/jantar.svg',
  },
  {
    id: 'lanches',
    title: 'Lanches Práticos & Salgados',
    description: 'Opções rápidas para beliscar sem culpa no trabalho ou em casa, com farinhas funcionais e gorduras de qualidade.',
    icon: Apple,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-700',
    coverImage: '/images/lanche.svg',
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas & Doces Sem Açúcar',
    description: 'Mousses, doces funcionais e receitas adocicadas com eritritol e xilitol para saciar a vontade de doce sem perigo.',
    icon: ShoppingCart,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-700',
    coverImage: '/images/sobremesa.svg',
  },
  {
    id: 'substituicao',
    title: 'Tabela de Substituições Inteligentes',
    description: 'Descubra como trocar arroz branco, farinhas refinadas e condimentos por versões anti-pico glicêmico.',
    icon: Repeat,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    coverImage: '/images/substituicoes.svg',
  },
];

export const ThematicBlocks: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>ESTRUTURA PEDAGÓGICA NUTRICIONAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed text-balance">
            Explore um acervo de receitas e ferramentas desenvolvidas para facilitar seu dia a dia e manter a saúde sob controle absoluto.
          </p>
        </div>

        {/* Grade 3x2 de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.id}
                className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left group"
              >
                {/* Imagem de Capa do Bloco */}
                {block.coverImage && (
                  <div className="w-full h-32 sm:h-36 overflow-hidden bg-emerald-950/10 border-b border-neutral-100">
                    <img
                      src={block.coverImage}
                      alt={block.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Ícone Circular e Título */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-full ${block.iconBg} ${block.iconColor} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0F392B] transition-colors leading-snug">
                      {block.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">
                    {block.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Observação após os cards */}
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Receitas testadas com foco em saciedade, controle glicêmico e ingredientes acessíveis do mercado brasileiro.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
