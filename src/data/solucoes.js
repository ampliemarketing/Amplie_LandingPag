const SITE_WIX = 'https://ampliemarketingmkt.wixsite.com/my-site-1';

export const LINKS = {
  ampliefilms: '/amplie-films',
  trabalheConosco: `${SITE_WIX}/trabalhe-conosco`,
};

// `titulo` é uma lista de linhas: cada item vira uma linha separada por <br>
export const SOLUCOES = [
  {
    classe: 'card--redes',
    link: `${SITE_WIX}/redes-sociais`,
    icone: { src: '/icones/redes-sociais.svg', largura: 81, altura: 89 },
    titulo: ['REDES', 'SOCIAIS'],
    texto: ['Criação e gerenciamento de perfis, produção de conteúdo e monitoramento de resultados.'],
  },
  {
    classe: 'card--videos',
    atraso: '.5s',
    link: LINKS.ampliefilms,
    icone: { src: '/icones/videos-publicitarios.svg', largura: 80, altura: 89 },
    titulo: ['VÍDEOS', 'PUBLICITÁRIOS'],
    texto: ['Gravação, edição, e elaboração de roteiros criativos, que informam e convertem, impulsionando o alcance e o engajamento da sua marca.'],
  },
  {
    classe: 'card--sites',
    atraso: '1s',
    link: `${SITE_WIX}/sites-e-e-commerces`,
    icone: { src: '/icones/sites-lojas.svg', largura: 88, altura: 98 },
    titulo: ['SITES E LOJAS VIRTUAIS'],
    texto: ['Desenvolvimento personalizado, otimização para SEO e gerenciamento de conteúdo.'],
  },
  {
    classe: 'card--trafego',
    atraso: '1s',
    link: `${SITE_WIX}/tr%C3%A1fego-pago`,
    icone: { src: '/icones/trafego-pago.svg', largura: 81, altura: 77 },
    titulo: ['TRÁFEGO', 'PAGO'],
    texto: ['Criação e gerenciamento de campanhas, monitoramento e otimização, e', 'análise de resultados.'],
  },
  {
    classe: 'card--identidade',
    atraso: '1.6s',
    link: `${SITE_WIX}/identidade-visual`,
    icone: { src: '/icones/identidade-visual.svg', largura: 88, altura: 88 },
    titulo: ['IDENTIDADE', 'VISUAL'],
    texto: ['A essência da sua marca. Elementos visuais que a definem e conectam com o público.'],
  },
  {
    classe: 'card--assessoria',
    atraso: '2s',
    link: `${SITE_WIX}/assessoria-de-marketing`,
    icone: { src: '/icones/assessoria.svg', largura: 88, altura: 77 },
    titulo: ['ASSESSORIA DE MARKETING'],
    texto: ['O Norte para o seu Sucesso Digital! Experiência e expertise que te guiam no caminho certo.'],
  },
];
