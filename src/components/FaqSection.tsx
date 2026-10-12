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
    question: 'Como e por onde recebo o acesso ao material e app?',
    answer: 'O acesso completo é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento. Você recebe link direto para usar no celular, tablet ou computador.',
  },
  {
    id: 'faq-2',
    question: 'Serve tanto para pré-diabéticos quanto para diabéticos tipo 1 e tipo 2?',
    answer: 'Sim! As receitas foram desenvolvidas com base no controle de índice glicêmico e contagem de carboidratos líquidos, sendo perfeitas para manter a glicemia estável em qualquer estágio.',
  },
  {
    id: 'faq-3',
    question: 'Os ingredientes são caros ou difíceis de encontrar?',
    answer: 'De jeito nenhum. Todas as receitas usam alimentos simples encontrados em qualquer feira livre ou supermercado tradicional brasileiro (ovos, carnes, legumes, verduras, queijos, sementes e grãos acessíveis).',
  },
  {
    id: 'faq-4',
    question: 'O acesso tem mensalidade ou é pagamento único?',
    answer: 'É pagamento único! Sem nenhuma mensalidade, taxa oculta ou renovação. Você paga uma única vez e o acesso é seu para sempre.',
  },
  {
    id: 'faq-5',
    question: 'As receitas mostram a contagem de carboidratos?',
    answer: 'Sim! Cada receita possui a quantidade detalhada de carboidratos líquidos por porção para você ter total segurança e tranquilidade na sua rotina.',
  },
  {
    id: 'faq-6',
    question: 'Consigo acessar pelo celular mesmo sem entender muito de tecnologia?',
    answer: 'Com certeza. O aplicativo e o material são super intuitivos, com botões grandes, fotos ilustrativas e busca rápida por café, almoço, jantar ou lanche.',
  },
  {
    id: 'faq-7',
    question: 'Posso imprimir as receitas se preferir?',
    answer: 'Sim! Além de acessar na tela do celular, o material vem formatado para impressão caso você goste de ter as receitas e a lista de compras na geladeira ou na bancada.',
  },
  {
    id: 'faq-8',
    question: 'E se eu não gostar ou achar difícil?',
    answer: 'Você conta com a nossa Garantia Incondicional de 7 dias. Basta enviar um e-mail para o suporte e devolvemos 100% do seu valor investido, sem burocracia.',
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
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>OBJEÇÕES & DÚVIDAS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          Perguntas Frequentes
        </h2>

        {/* Lista de Acordeão */}
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
