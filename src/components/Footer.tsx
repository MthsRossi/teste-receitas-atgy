import React from 'react';
import { CONFIG } from '../config';

export const Footer: React.FC = () => {
  const hasSupport = Boolean(CONFIG.SUPPORT_EMAIL && CONFIG.SUPPORT_EMAIL.trim());
  const hasTerms = Boolean(CONFIG.TERMS_URL && CONFIG.TERMS_URL.trim());
  const hasPrivacy = Boolean(CONFIG.PRIVACY_URL && CONFIG.PRIVACY_URL.trim());
  const hasAnyLinks = hasSupport || hasTerms || hasPrivacy;

  return (
    <footer className="bg-white text-neutral-500 py-8 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 text-center">
      <div className="max-w-4xl mx-auto space-y-2">
        
        {/* Título do produto */}
        <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
          +150 Receitas e Cardápios para Pré-Diabéticos e Diabéticos
        </h3>

        {/* Subtítulo / Descrição */}
        <p className="text-xs text-neutral-500">
          Aplicativo e guia digital com receitas balanceadas por refeição, cardápios semanais, contagem de carboidratos e lista de compras.
        </p>

        {/* Links legais e de suporte (exibidos APENAS se preenchidos) */}
        {hasAnyLinks && (
          <div className="pt-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-neutral-500">
            {hasSupport && (
              <a
                href={`mailto:${CONFIG.SUPPORT_EMAIL}`}
                className="hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                Suporte: {CONFIG.SUPPORT_EMAIL}
              </a>
            )}
            {hasTerms && (
              <a
                href={CONFIG.TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                Termos de Uso
              </a>
            )}
            {hasPrivacy && (
              <a
                href={CONFIG.PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                Política de Privacidade
              </a>
            )}
          </div>
        )}

        {/* Aviso de saúde responsável */}
        <p className="text-[10px] text-neutral-400 max-w-2xl mx-auto pt-2">
          Este material é educativo e não substitui acompanhamento médico ou nutricional.
        </p>

        {/* Direitos autorais */}
        <div className="pt-2.5 border-t border-neutral-100 text-[11px] text-neutral-400">
          © 2026 · Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
