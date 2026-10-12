import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  price?: string;
  configKey?: string;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({
  isOpen,
  onClose,
  planName = 'Plano',
  price = '',
  configKey = 'CHECKOUT_URL_PREMIUM',
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-notice-title"
    >
      <div 
        className="relative w-full max-w-md bg-white border border-neutral-200 rounded-3xl shadow-2xl p-6 sm:p-7 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors focus:outline-hidden"
          aria-label="Fechar aviso"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B2545] flex items-center justify-center shrink-0 border border-blue-100">
            <AlertCircle className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 id="checkout-notice-title" className="text-base font-black text-neutral-900">
              Checkout em configuração
            </h3>
            <p className="text-xs text-neutral-500 font-medium">
              {planName} {price ? `· ${price}` : ''}
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-neutral-600 space-y-3 leading-relaxed">
          <p>
            A constante <code className="px-1.5 py-0.5 rounded bg-neutral-100 text-[#0B2545] font-mono text-xs font-bold">{configKey}</code> em <code className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800 font-mono text-xs">src/config.ts</code> está vazia no momento.
          </p>
          <p>
            Para ativar as vendas deste plano, abra o arquivo <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded text-neutral-800 font-bold">src/config.ts</code> e cole a URL do checkout da sua plataforma (Kiwify, Hotmart, Eduzz, etc.).
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0B2545] hover:bg-[#07182E] rounded-xl transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
