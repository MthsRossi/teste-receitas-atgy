import React from 'react';
import { Gift, X, Check } from 'lucide-react';
import { CONFIG } from '../config';

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptDiscount: () => void;
  onContinueBasic: () => void;
}

export const DownsellModal: React.FC<DownsellModalProps> = ({
  isOpen,
  onClose,
  onAcceptDiscount,
  onContinueBasic,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="downsell-modal-title"
    >
      <div 
        className="relative w-full max-w-[370px] sm:max-w-[400px] bg-white border border-neutral-200/90 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-5 text-center my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar Compacto */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors focus:outline-hidden"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ícone de Presente Superior Compacto */}
        <div className="w-9 h-9 mx-auto rounded-full bg-emerald-50 text-[#16a34a] border border-emerald-100 flex items-center justify-center mb-2">
          <Gift className="w-4.5 h-4.5 text-[#16a34a]" />
        </div>

        {/* Título Principal */}
        <h3 id="downsell-modal-title" className="text-base sm:text-lg font-black text-neutral-900 tracking-tight leading-snug px-4">
          Espere! Temos uma oferta especial para sua saúde
        </h3>

        {/* Subtítulo */}
        <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-tight">
          Leve o Plano Completo com +150 receitas e bônus por valor exclusivo:
        </p>

        {/* Bloco de Preço */}
        <div className="mt-2.5">
          <span className="text-[11px] text-neutral-400 font-bold line-through">
            {CONFIG.PRICE_PREMIUM}
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#0F392B] tracking-tight leading-none">
            {CONFIG.PRICE_DISCOUNTED}
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#16a34a] uppercase mt-0.5 block">
            PAGAMENTO ÚNICO · ACESSO VITALÍCIO
          </span>
        </div>

        {/* Card Interno Compacto com Lista de Benefícios */}
        <div className="mt-3 bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-3 text-left">
          <ul className="space-y-1.5 text-[11px] font-bold text-neutral-800">
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="truncate">+150 RECEITAS POR REFEIÇÃO</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="truncate">CARDÁPIOS SEMANAIS BALANCEADOS</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="truncate">INCLUI TODOS OS 5 BÔNUS EXCLUSIVOS</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="truncate">DOCES, CHÁS, LISTA, RÓTULOS E DIÁRIO</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 stroke-[3]" />
              </div>
              <span className="truncate">ACESSO NO CELULAR, TABLET E COMPUTADOR</span>
            </li>
          </ul>
        </div>

        {/* Botão de Aceitar Desconto Verde */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={onAcceptDiscount}
            className="w-full py-3 px-3 text-xs sm:text-sm font-black text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-xl shadow-lg transition-all uppercase tracking-wider cursor-pointer btn-pulsing"
          >
            QUERO O COMPLETO POR {CONFIG.PRICE_DISCOUNTED}
          </button>

          {/* Botão de Continuar no Básico */}
          <button
            type="button"
            onClick={onContinueBasic}
            className="w-full py-2 text-[11px] font-bold text-neutral-400 hover:text-neutral-600 transition-colors uppercase tracking-wider cursor-pointer"
          >
            CONTINUAR NO PLANO BÁSICO ({CONFIG.PRICE_BASIC})
          </button>
        </div>

      </div>
    </div>
  );
};
