import React from 'react';
import { Gift, ShoppingBag, BookOpen, Sparkles, CupSoda, ClipboardList } from 'lucide-react';
import { IMAGES } from '../images';

interface BonusItem {
  id: string;
  badge: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  originalPrice: string;
  description: string;
  highlight: string;
}

const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    badge: 'GRÁTIS HOJE',
    image: IMAGES.bonusGuia,
    alt: 'Bônus 1 - Lista Inteligente de Compras para Feira e Supermercado',
    icon: ShoppingBag,
    title: 'Lista de Compras Inteligente',
    originalPrice: 'R$ 19,90',
    description: 'Chega de dúvidas no corredor do mercado. Uma lista organizada por setor (hortifrúti, açougue, temperos e grãos) para economizar e levar apenas o que faz bem.',
    highlight: '*Pronto para levar no celular (WhatsApp) ou imprimir.',
  },
  {
    id: 'bonus-2',
    badge: 'GRÁTIS HOJE',
    image: IMAGES.bonusFicha,
    alt: 'Bônus 2 - Guia Rápido de Rótulos & Armadilhas dos Produtos "Diet/Light"',
    icon: BookOpen,
    title: 'Guia Rápido de Rótulos & Armadilhas',
    originalPrice: 'R$ 19,90',
    description: 'Descubra os nomes ocultos do açúcar nos produtos industriais e aprenda em menos de 1 minuto a identificar se um produto é verdadeiramente seguro.',
    highlight: '*Evite alimentos falsamente saudáveis que disparam a insulina.',
  },
  {
    id: 'bonus-3',
    badge: 'GRÁTIS HOJE',
    image: IMAGES.bonusDoces,
    alt: 'Bônus 3 - Guia de Sobremesas & Doces Zero Açúcar que Não Elevam a Glicose',
    icon: Sparkles,
    title: 'Sobremesas & Doces Sem Culpa',
    originalPrice: 'R$ 29,90',
    description: 'Mousses, bolos fofinhos, tortas e brigadeiros adaptados com farinhas de baixo índice glicêmico e adoçantes naturais seguros para matar a vontade de doce.',
    highlight: '*15 receitas exclusivas de doces testadas e aprovadas.',
  },
  {
    id: 'bonus-4',
    badge: 'GRÁTIS HOJE',
    image: IMAGES.bonusChas,
    alt: 'Bônus 4 - Manual de Chás & Shots Matinais Hipoglicemiantes',
    icon: CupSoda,
    title: 'Manual de Chás & Shots Matinais',
    originalPrice: 'R$ 19,90',
    description: 'Combinações naturais comprovadas (como canela-do-ceilão, pata-de-vaca, gengibre e vinagre de maçã) para auxiliar a sensibilidade à insulina e digestão.',
    highlight: '*Modo de infusão correto e os melhores horários do dia.',
  },
  {
    id: 'bonus-5',
    badge: 'GRÁTIS HOJE',
    image: IMAGES.bonusDiario,
    alt: 'Bônus 5 - Diário de Monitoramento Glicêmico & Sintomas Imprimível',
    icon: ClipboardList,
    title: 'Diário de Controle Glicêmico',
    originalPrice: 'R$ 14,90',
    description: 'Ficha prática para registrar suas medições em jejum e pós-prandiais, relacionando diretamente o que comeu com sua estabilidade glicêmica ao longo das semanas.',
    highlight: '*Excelente para levar pronto na sua próxima consulta médica.',
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
          5 Bônus Gratuitos Inclusos no Plano Completo
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Garantindo seu acesso hoje, você libera 5 materiais complementares de alto valor (avaliados em mais de R$ 100) sem pagar nenhum centavo a mais.
        </p>

        {/* Grade de Cards dos Bônus (1ª linha com 3 cards, 2ª linha com 2 cards centralizados) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BONUSES.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-white border border-neutral-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left relative overflow-hidden group"
              >
                {/* Selo Verde Superior */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="bg-[#16a34a] text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    {bonus.badge}
                  </span>
                </div>

                <div>
                  {/* Foto do Mockup */}
                  <div className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-100 bg-[#F8FAFC] mb-4 flex items-center justify-center shadow-2xs">
                    <img
                      src={bonus.image}
                      alt={bonus.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Título com ícone */}
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-base font-black text-neutral-900 line-clamp-1">
                      {bonus.title}
                    </h3>
                  </div>

                  {/* Preço riscado */}
                  <div className="mb-1.5">
                    <span className="text-xs text-neutral-400 font-bold line-through">
                      {bonus.originalPrice}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {bonus.description}
                  </p>

                  <p className="mt-2 text-[11px] text-neutral-400 italic">
                    {bonus.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F392B]">
                    Incluso sem custo adicional.
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
