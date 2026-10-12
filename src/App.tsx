import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { WhatYouWillReceive } from './components/WhatYouWillReceive';
import { ThematicBlocks } from './components/ThematicBlocks';
import { StructureAndPractice } from './components/StructureAndPractice';
import { BonusSection } from './components/BonusSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DownsellModal } from './components/DownsellModal';
import { CheckoutNoticeModal } from './components/CheckoutNoticeModal';
import { CONFIG } from './config';
import { redirectWithParams } from './utils/urlParams';

export default function App() {
  const [isDownsellOpen, setIsDownsellOpen] = useState(false);

  const [noticeState, setNoticeState] = useState<{
    isOpen: boolean;
    planName: string;
    price: string;
    configKey: string;
  }>({
    isOpen: false,
    planName: '',
    price: '',
    configKey: '',
  });

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBasic = () => {
    setIsDownsellOpen(true);
  };

  const handleAcceptDiscount = () => {
    setIsDownsellOpen(false);
    if (CONFIG.CHECKOUT_URL_DISCOUNTED && CONFIG.CHECKOUT_URL_DISCOUNTED.trim() !== '') {
      redirectWithParams(CONFIG.CHECKOUT_URL_DISCOUNTED);
    } else {
      setNoticeState({
        isOpen: true,
        planName: 'Plano Premium (Oferta Especial)',
        price: CONFIG.PRICE_DISCOUNTED,
        configKey: 'CHECKOUT_URL_DISCOUNTED',
      });
    }
  };

  const handleContinueBasic = () => {
    setIsDownsellOpen(false);
    if (CONFIG.CHECKOUT_URL_BASIC && CONFIG.CHECKOUT_URL_BASIC.trim() !== '') {
      redirectWithParams(CONFIG.CHECKOUT_URL_BASIC);
    } else {
      setNoticeState({
        isOpen: true,
        planName: 'Plano Básico',
        price: CONFIG.PRICE_BASIC,
        configKey: 'CHECKOUT_URL_BASIC',
      });
    }
  };

  const handleSelectPremium = () => {
    if (CONFIG.CHECKOUT_URL_PREMIUM && CONFIG.CHECKOUT_URL_PREMIUM.trim() !== '') {
      redirectWithParams(CONFIG.CHECKOUT_URL_PREMIUM);
    } else {
      setNoticeState({
        isOpen: true,
        planName: 'Plano Premium',
        price: CONFIG.PRICE_PREMIUM,
        configKey: 'CHECKOUT_URL_PREMIUM',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111827]">
      {/* Faixa superior fixa no topo */}
      <TopBanner />

      {/* Conteúdo principal */}
      <main className="flex-1 pt-9 sm:pt-10">
        {/* 1. Hero Principal */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 2. O que você vai receber (Carrossel Infinito com as Folhas dos Roteiros) */}
        <WhatYouWillReceive />

        {/* 3. Blocos Temáticos */}
        <ThematicBlocks />

        {/* 4. Estrutura e Prática */}
        <StructureAndPractice />

        {/* 5. Bônus Gratuitos */}
        <BonusSection />

        {/* 6. Depoimentos */}
        <TestimonialsSection />

        {/* 7. Seção de Oferta */}
        <OfferSection
          onSelectBasic={handleSelectBasic}
          onSelectPremium={handleSelectPremium}
        />

        {/* 8. Garantia */}
        <GuaranteeSection />

        {/* 9. Perguntas Frequentes */}
        <FaqSection />

        {/* 10. CTA Final */}
        <FinalCta onCtaClick={scrollToOffer} />
      </main>

      <Footer />

      {/* Popup de Downsell com desconto do Premium por R$ 19,90 */}
      <DownsellModal
        isOpen={isDownsellOpen}
        onClose={() => setIsDownsellOpen(false)}
        onAcceptDiscount={handleAcceptDiscount}
        onContinueBasic={handleContinueBasic}
      />

      {/* Modal informativo quando links de checkout estiverem vazios */}
      <CheckoutNoticeModal
        isOpen={noticeState.isOpen}
        onClose={() => setNoticeState((prev) => ({ ...prev, isOpen: false }))}
        planName={noticeState.planName}
        price={noticeState.price}
        configKey={noticeState.configKey}
      />
    </div>
  );
}
