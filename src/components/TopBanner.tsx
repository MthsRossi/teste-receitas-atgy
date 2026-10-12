import React from 'react';
import { Clock } from 'lucide-react';

export const TopBanner: React.FC = () => {
  return (
    <aside 
      aria-label="Aviso de oferta por tempo limitado"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F392B] text-white text-xs sm:text-sm py-2.5 px-4 text-center border-b border-[#0A261D] shadow-xs flex items-center justify-center gap-2 font-medium"
    >
      <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
      <span>Oferta exclusiva de lançamento válida até 23:59 de hoje</span>
    </aside>
  );
};
