import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como recebo o acesso?',
    answer: 'Imediatamente por e-mail após a confirmação do pagamento.',
  },
  {
    id: 'faq-2',
    question: 'Serve para pré-diabéticos e diabéticos tipo 2?',
    answer: 'Sim! Receitas com controle de IG e contagem de carboidratos, ideais para ambos.',
  },
  {
    id: 'faq-3',
    question: 'Os ingredientes são caros?',
    answer: 'Não. Usamos alimentos simples de feira e supermercado brasileiro.',
  },
  {
    id: 'faq-4',
    question: 'Tem mensalidade?',
    answer: 'Não. Pagamento único, acesso vitalício.',
  },
  {
    id: 'faq-5',
    question: 'Mostra a contagem de carboidratos?',
    answer: 'Sim, cada receita tem carboidratos líquidos por porção.',
  },
  {
    id: 'faq-6',
    question: 'Funciona no celular?',
    answer: 'Sim, app intuitivo com fotos e busca rápida por refeição.',
  },
  {
    id: 'faq-7',
    question: 'Posso imprimir?',
    answer: 'Sim, formato pronto para impressão.',
  },
  {
    id: 'faq-8',
    question: 'E se eu não gostar?',
    answer: 'Garantia de 7 dias. Devolvemos 100% sem burocracia.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          Perguntas Frequentes
        </h2>

        {/* Acordeão */}
        <div className="mt-6 space-y-2.5 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-neutral-900 hover:text-emerald-700 transition-colors cursor-pointer focus:outline-hidden"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
