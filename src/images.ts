/**
 * Dados de demonstração e imagens temáticas de receitas com baixo índice glicêmico
 * para pré-diabéticos e diabéticos.
 */

export const IMAGES = {
  // Mockup do App / Material completo
  heroMockup: '/images/mockup_premium.png',
  segundoMockup: '/images/mockup_receber.png',
  bonusGuia: '/images/bonus_1_lista_compras.png',
  bonusFicha: '/images/bonus_2_rotulos.png',
  bonusDoces: '/images/bonus_3_sobremesas.png',
  bonusChas: '/images/bonus_4_chas.png',
  bonusDiario: '/images/bonus_5_diario.png',
  // Covers por refeição
  coverCafe: '/images/cafe.svg',
  coverAlmoco: '/images/almoco.svg',
  coverJantar: '/images/jantar.svg',
  coverLanche: '/images/lanche.svg',
  coverSobremesa: '/images/sobremesa.svg',
  coverSubstituicoes: '/images/substituicoes.svg',
  avatarJuliana: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  avatarCamilo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  avatarFernando: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
} as const;

export interface ReceitaPreview {
  id: string;
  title: string;
  category: string;
  carbs: string;
  glycemicIndex: string;
  prepTime: string;
  image: string;
}

export const RECEITAS_PREVIEW: ReceitaPreview[] = [
  {
    id: '1',
    title: 'Omelete Cremosa de Espinafre e Queijo Branco',
    category: 'Café da Manhã',
    carbs: '2g carboidratos',
    glycemicIndex: 'Índice Glicêmico Baixíssimo',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    title: 'Salmão Grelhado com Legumes no Vapor e Ervas',
    category: 'Almoço Completo',
    carbs: '4g carboidratos',
    glycemicIndex: 'Zero Pico de Insulina',
    prepTime: '20 min',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '3',
    title: 'Frango com Crosta de Gergelim e Brócolis',
    category: 'Jantar Leve',
    carbs: '5g carboidratos',
    glycemicIndex: 'Alta Saciedade Noturna',
    prepTime: '25 min',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '4',
    title: 'Pão de Frigideira Low Carb de Sementes',
    category: 'Café da Manhã & Lanches',
    carbs: '3g carboidratos',
    glycemicIndex: 'Sem Farinha de Trigo',
    prepTime: '8 min',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '5',
    title: 'Bowl Verde com Abacate, Ovo Poché e Castanhas',
    category: 'Almoço & Lanche',
    carbs: '6g carboidratos',
    glycemicIndex: 'Fibras e Gorduras Boas',
    prepTime: '12 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '6',
    title: 'Mousse de Cacau 100% com Abacate e Canela',
    category: 'Sobremesa Segura',
    carbs: '4g carboidratos',
    glycemicIndex: 'Adoçado sem Açúcar',
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '7',
    title: 'Sopa Reconfortante de Abóbora com Gengibre e Frango',
    category: 'Jantar Termogênico',
    carbs: '7g carboidratos',
    glycemicIndex: 'Controle Glicêmico Noturno',
    prepTime: '20 min',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '8',
    title: 'Wrap de Folhas com Pasta de Atum e Iogurte',
    category: 'Lanche Rápido',
    carbs: '2g carboidratos',
    glycemicIndex: 'Zero Farinha Branca',
    prepTime: '7 min',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
  },
];
