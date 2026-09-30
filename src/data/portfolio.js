const PASTA = '/portifolio/';

// Use nomes de arquivo simples (sem espaços, vírgulas ou emojis): nomes copiados
// direto do Instagram quebram o carregamento das imagens no servidor.
export const PORTFOLIO = [
  { arquivo: 'alto-da-serra.jpg', alt: 'Alto da Serra — Últimos lotes disponíveis (Imobilial)' },
  { arquivo: 'tinta-piau.webp', alt: 'Tinta Acrílica PVA Piau — Master Tintas' },
  { arquivo: 'dia-do-motorista.webp', alt: 'Feliz dia do motorista — Metta' },
  { arquivo: 'lavieen-ultramed.webp', alt: 'Alugue o Lavieen e leve o Ultramed — 3T' },
  { arquivo: 'natacao.jpg', alt: 'Como incentivar as crianças a praticar natação?' },
  { arquivo: 'drogashop.webp', alt: 'Mega Promoção DrogaShop' },
  { arquivo: 'alliance.webp', alt: 'Alliance — Confiabilidade que gera produtividade' },
  { arquivo: 'agrofort.webp', alt: 'Agrofort — Como funciona o serviço de Cotações e Compras?' },
  { arquivo: 'logotipo.webp', alt: 'Criamos seu logotipo profissional — Amplie Marketing' },
].map(({ arquivo, alt }) => ({ src: PASTA + arquivo, alt }));
