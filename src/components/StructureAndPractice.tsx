import React from 'react';
import { Clock, Check, Salad } from 'lucide-react';
import { IMAGES } from '../images';

const CHECKLIST_PILLS = [
  'Contagem de carboidratos por porção',
  'Modo de preparo rápido (10 a 25 min)',
  'Ingredientes simples de achar no mercado',
  'Cardápios semanais prontos e balanceados',
  'Lista de compras semanal organizada',
  'Tabela prática de substituições inteligentes',
  'Formato compatível com celular e tablet',
  'Opção de imprimir fichas de receitas',
];

export const StructureAndPractice: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Coluna Esquerda: Mockup de Prato Nutritivo / App */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md flex flex-col items-center">
              <div className="w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100 relative group">
                <img
                  src={IMAGES.segundoMockup}
                  alt="Alimentação equilibrada e pratos ricos em nutrientes para diabéticos"
                  className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white bg-emerald-800/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Coma bem sem medo da balança ou da glicemia
                  </span>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-[#0F392B] uppercase tracking-wider">
                  Guia Prático Passo a Passo por Refeição
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Facilidade total & Checklist em Pills */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
              <Salad className="w-3.5 h-3.5 text-emerald-600" />
              <span>ROTINA DESCOMPLICADA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
              Facilidade total na sua cozinha
            </h2>

            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Sem termos complicados nem ingredientes caros. Praticidade real no seu dia a dia.
            </p>

            {/* Grid 2 colunas de Pills com Check */}
            <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHECKLIST_PILLS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-emerald-50/70 border border-emerald-200/80 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#0F392B]"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2 h-2 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>



          </div>

        </div>

      </div>
    </section>
  );
};
