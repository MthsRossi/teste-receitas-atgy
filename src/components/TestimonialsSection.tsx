import React from 'react';
import { Users, Phone, Video, CheckCheck, Mic } from 'lucide-react';
import { IMAGES } from '../images';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF9F6] border-t border-neutral-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0F392B] border border-emerald-200 uppercase tracking-wider mb-3">
          <Users className="w-3.5 h-3.5 text-emerald-600" />
          <span>DEPOIMENTOS REAIS DE QUEM ADOTOU O CARDÁPIO</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F392B] tracking-tight">
          Vidas Transformadas & Glicemia Controlada
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Veja o que dizem as pessoas que estavam no pré-diabetes ou diabetes e voltaram a comer com prazer e tranquilidade.
        </p>

        {/* 3 WhatsApp Chat Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          
          {/* WhatsApp Card 1 - Juliana */}
          <div className="bg-white rounded-2xl border border-neutral-300 shadow-sm overflow-hidden flex flex-col text-left">
            <div className="bg-[#075E54] text-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0">
                  <img
                    src={IMAGES.avatarJuliana}
                    alt="Juliana Mendes - Reverteu Pré-Diabetes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Juliana Mendes, 52 anos</h4>
                  <p className="text-[10px] text-emerald-200 leading-none">Diagnóstico Pré-Diabetes</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Video className="w-3.5 h-3.5" />
                <Phone className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="whatsapp-chat-bg p-3 flex-1 flex flex-col gap-2 text-xs text-neutral-800">
              <div className="bg-white rounded-lg p-2.5 shadow-2xs max-w-[90%] self-start rounded-tl-xs">
                <p className="leading-snug">
                  Gente, passei aqui pra agradecer! Minha glicemia em jejum caiu de 118 para 89 em apenas 3 semanas seguindo os cardápios. O pão de frigideira virou meu vício! 🥰🙌
                </p>
                <div className="text-[9px] text-neutral-400 text-right mt-0.5">10:14</div>
              </div>

              <div className="bg-[#DCF8C6] rounded-lg p-2.5 shadow-2xs max-w-[90%] self-end rounded-tr-xs">
                <p className="leading-snug">
                  Que notícia incrível, Juliana! Fico muito feliz! O segredo é comer gostoso mantendo os carboidratos certos. Parabéns pela dedicação!
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-neutral-500 mt-0.5">
                  <span>10:18</span>
                  <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            <div className="bg-[#F0F0F0] px-3 py-1.5 flex items-center gap-2 border-t border-neutral-200">
              <div className="bg-white rounded-full px-3 py-0.5 text-[11px] text-neutral-400 flex-1">
                Mensagem
              </div>
              <div className="w-5.5 h-5.5 rounded-full bg-[#075E54] flex items-center justify-center text-white">
                <Mic className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* WhatsApp Card 2 - Camilo */}
          <div className="bg-white rounded-2xl border border-neutral-300 shadow-sm overflow-hidden flex flex-col text-left">
            <div className="bg-[#075E54] text-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0">
                  <img
                    src={IMAGES.avatarCamilo}
                    alt="Carlos Oliveira - Diabético Tipo 2 há 6 anos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Carlos Oliveira, 58 anos</h4>
                  <p className="text-[10px] text-emerald-200 leading-none">Diabetes Tipo 2</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Video className="w-3.5 h-3.5" />
                <Phone className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="whatsapp-chat-bg p-3 flex-1 flex flex-col gap-2 text-xs text-neutral-800">
              <div className="bg-white rounded-lg p-2.5 shadow-2xs max-w-[90%] self-start rounded-tl-xs">
                <p className="leading-snug">
                  A lista de compras e a tabela de substituições me salvaram. Eu achava que nunca mais ia poder comer sobremesa na vida. O mousse de cacau é espetacular!
                </p>
                <div className="text-[9px] text-neutral-400 text-right mt-0.5">16:40</div>
              </div>

              <div className="bg-[#DCF8C6] rounded-lg p-2.5 shadow-2xs max-w-[90%] self-end rounded-tr-xs">
                <p className="leading-snug">
                  Sensacional, Carlos! Comer bem sem culpa é o verdadeiro caminho para manter a hemoglobina glicada baixa para sempre!
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-neutral-500 mt-0.5">
                  <span>16:45</span>
                  <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            <div className="bg-[#F0F0F0] px-3 py-1.5 flex items-center gap-2 border-t border-neutral-200">
              <div className="bg-white rounded-full px-3 py-0.5 text-[11px] text-neutral-400 flex-1">
                Mensagem
              </div>
              <div className="w-5.5 h-5.5 rounded-full bg-[#075E54] flex items-center justify-center text-white">
                <Mic className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* WhatsApp Card 3 - Fernando */}
          <div className="bg-white rounded-2xl border border-neutral-300 shadow-sm overflow-hidden flex flex-col text-left">
            <div className="bg-[#075E54] text-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0">
                  <img
                    src={IMAGES.avatarFernando}
                    alt="Fernando Santos - Eliminou 8kg comendo bem"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Fernando Santos, 46 anos</h4>
                  <p className="text-[10px] text-emerald-200 leading-none">Emagreceu 7kg e reduziu medicação</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Video className="w-3.5 h-3.5" />
                <Phone className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="whatsapp-chat-bg p-3 flex-1 flex flex-col gap-2 text-xs text-neutral-800">
              <div className="bg-white rounded-lg p-2.5 shadow-2xs max-w-[90%] self-start rounded-tl-xs">
                <p className="leading-snug">
                  Doutor elogiou meus exames na semana passada. Menos 7kg e a glicada bateu 5.6%! O cardápio semanal facilitou toda a rotina da minha casa. Recomendo de olhos fechados.
                </p>
                <div className="text-[9px] text-neutral-400 text-right mt-0.5">19:05</div>
              </div>

              <div className="bg-[#DCF8C6] rounded-lg p-2.5 shadow-2xs max-w-[90%] self-end rounded-tr-xs">
                <p className="leading-snug">
                  Resultado maravilhoso, Fernando! Quando a família inteira come com saúde e sabor, tudo fica mais leve. Muito orgulho! 👏
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-neutral-500 mt-0.5">
                  <span>19:08</span>
                  <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            <div className="bg-[#F0F0F0] px-3 py-1.5 flex items-center gap-2 border-t border-neutral-200">
              <div className="bg-white rounded-full px-3 py-0.5 text-[11px] text-neutral-400 flex-1">
                Mensagem
              </div>
              <div className="w-5.5 h-5.5 rounded-full bg-[#075E54] flex items-center justify-center text-white">
                <Mic className="w-3 h-3" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
