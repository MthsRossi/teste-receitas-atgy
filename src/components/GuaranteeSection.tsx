import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Horizontal com paleta Verde Nutrição e Segurança */}
        <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left shadow-xs">
          
          {/* Círculo do Escudo com 100% SEGURO */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#0F392B] text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-[10px] font-black font-mono text-emerald-700 uppercase tracking-wider mt-1">
              100% SEGURO
            </span>
          </div>

          {/* Texto da Garantia */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F392B] tracking-tight">
              7 Dias de Garantia Incondicional
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Se não gostar, devolvemos 100% do seu dinheiro com um e-mail. Sem burocracia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
