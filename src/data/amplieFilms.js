import { linkWhatsapp } from './contato';

// Vídeos em public/amplieFilms e capas em public/amplie-films/capas (mesmo nome, .jpg).
// Use nomes de arquivo simples: sem espaços, vírgulas ou emojis.
const video = (arquivo, titulo) => ({
  src: `/amplieFilms/${arquivo}.mp4`,
  capa: `/amplie-films/capas/${arquivo}.jpg`,
  titulo,
});

export const VIDEOS_CARROSSEL = [
  video('aniversario-noah', 'Aniversário de 3 anos do Noah'),
  video('parto-dr-ricardo', 'Registrando o milagre da vida — parto com o Dr. Ricardo'),
  video('depoimento-dr-ricardo', 'Feedback do Dr. Ricardo Abou'),
  video('amor-de-mae', 'Um vídeo que eternizou o amor de mãe'),
  video('contemplo-interiores', 'Gravação na Contemplo Interiores'),
  video('ipacol-tecnoshow', 'Ipacol na Tecnoshow Comigo'),
  video('manhoso-pet', 'Vídeo para a Manhoso Pet'),
  video('depoimento-clientes', 'O reconhecimento de quem caminha com a gente'),
  video('seminario-hemoterapia', '2º Seminário em Hemoterapia e Segurança Transfusional'),
];

export const VIDEO_DESTAQUE = video('comigo-aereo', 'Filmagem aérea — Comigo Implementos Agrícolas');

export const ETAPAS = [
  'Briefing Criativo',
  'Desenvolvimento de Roteiro',
  'Produção e Gravação',
  'Edição Profissional',
  'Aprovação e Entrega',
];

export const SERVICOS = [
  {
    titulo: ['PRODUÇÃO', 'DE VÍDEOS'],
    ilustracao: '/amplie-films/producao-de-videos.svg',
    texto: 'Com uma equipe experiente e equipamentos de última geração, produzimos vídeos de alta qualidade que refletem a identidade e os valores da sua marca.',
  },
  {
    titulo: ['EDIÇÃO E', 'PÓS-PRODUÇÃO'],
    ilustracao: '/amplie-films/edicao.svg',
    texto: 'Editamos e finalizamos seus vídeos com técnicas avançadas de pós-produção, incluindo efeitos visuais, animações e trilhas sonoras, para garantir um acabamento profissional e impactante.',
  },
  {
    titulo: ['VÍDEOS', 'INSTITUCIONAIS'],
    ilustracao: '/amplie-films/institucionais.svg',
    texto: 'Produzimos vídeos institucionais que apresentam sua empresa, seus valores e sua missão de maneira clara e envolvente, fortalecendo sua imagem corporativa.',
  },
  {
    titulo: ['VÍDEO', 'DE PRODUTO'],
    ilustracao: '/amplie-films/video-de-produto.svg',
    texto: 'Criamos vídeos que destacam as características e benefícios dos seus produtos, ajudando a aumentar o interesse e a conversão de vendas.',
  },
];

export const LINK_CONTATO = linkWhatsapp('Olá, gostaria de iniciar uma parceria...');
