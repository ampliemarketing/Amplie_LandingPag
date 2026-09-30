/*
 * Conteúdo das páginas de cada card de "Amplie suas soluções".
 * Nos títulos: `\n` quebra a linha e *texto* ganha o fundo de destaque.
 * Imagens em public/solucoes/<página>/ (use nomes simples, sem espaços ou emojis).
 */

const IMG = '/solucoes';

const VANTAGENS = {
  profissionalismo: { icone: `${IMG}/vantagens/profissionalismo.svg`, titulo: ['PROFISSIONALISMO'] },
  visibilidade: { icone: `${IMG}/vantagens/visibilidade.svg`, titulo: ['AUMENTO DA', 'VISIBILIDADE'] },
  horas: { icone: `${IMG}/vantagens/24-horas.svg`, titulo: ['24 HORAS'] },
  global: { icone: `${IMG}/vantagens/presenca-global.svg`, titulo: ['PRESENÇA', 'GLOBAL'] },
};

export const PAGINAS_SOLUCOES = {
  'redes-sociais': {
    tituloAba: 'Redes Sociais | Amplie Marketing',
    destaque: 'lilas',
    intro: {
      titulo: 'GESTÃO DE REDES SOCIAIS',
      ilustracao: `${IMG}/redes-sociais/ilustracao.svg`,
      texto: ['A tendência atual é aproximar o seu negócio do consumidor final. Por isso, a Amplie Marketing, uma agência especializada em gerenciamento de redes sociais, oferece as melhores soluções para que sua marca se destaque nessas plataformas.'],
    },
    galeria: {
      titulo: 'CONFIRA UM POUCO DO NOSSO PORTFÓLIO DE\nCLIENTES QUE FAZEM SUA GESTÃO COM A *AMPLIE*',
      formato: 'celular',
      imagens: [
        { src: `${IMG}/redes-sociais/metta.webp`, alt: 'Instagram da Metta Distribuidora de Peças' },
        { src: `${IMG}/redes-sociais/drogashop.webp`, alt: 'Instagram da DrogaShop Rio Verde' },
        { src: `${IMG}/redes-sociais/nelore.webp`, alt: 'Instagram do Nelore Supermercado' },
        { src: `${IMG}/redes-sociais/contemplo.webp`, alt: 'Instagram da Contemplo Interiores' },
      ],
    },
    cards: {
      titulo: 'VANTAGENS DE TER AS REDES SOCIAIS DO SEU\nNEGÓCIO ESTRATEGICAMENTE GERENCIADAS',
      corTitulos: 'roxo',
      itens: [
        { ...VANTAGENS.profissionalismo, texto: 'Sua empresa com um visual chamativo e atraente transmitirá profissionalismo aos seus clientes e futuros parceiros.' },
        { ...VANTAGENS.visibilidade, texto: 'Redes bem organizadas e atualizadas podem gerar uma maior visibilidade e alcance da sua marca ao público alvo.' },
        { ...VANTAGENS.horas, texto: 'Suas redes estão sempre ativas e captando cliques de eventuais clientes que tenham interesse no seu serviço ofertado.' },
        { ...VANTAGENS.global, texto: 'Uma boa gestão de rede social pode expandir sua marca para uma larga escala sem travas de região.' },
      ],
    },
  },

  'sites-e-lojas-virtuais': {
    tituloAba: 'Sites e E-commerces | Amplie Marketing',
    destaque: 'lilas',
    intro: {
      titulo: 'CRIAMOS SITES COM EXPERIÊNCIAS ÚNICAS\nQUE GARANTEM MAIS CONVERSÕES',
      ilustracao: `${IMG}/sites/ilustracao.svg`,
      texto: ['Quer melhorar o visual da sua página ou criar um site funcional? Somos uma agência especializada em desenvolvimento web, pronta para oferecer as melhores soluções.'],
      lista: ['Desenvolvimento Web e Design de Layout', 'Institucionais', 'Landing Pages', 'E-commerce'],
    },
    galeria: {
      titulo: 'CONFIRA NOSSO PORTFÓLIO DE CLIENTES QUE\nADERIRAM AOS SITES EM SUAS EMPRESAS',
      formato: 'site',
      imagens: [
        { src: `${IMG}/sites/amplie-chat.webp`, alt: 'Site do Amplie Chat' },
        { src: `${IMG}/sites/simone-oliveira.webp`, alt: 'Site da Simone Oliveira Art Gallery' },
        { src: `${IMG}/sites/imobilial.webp`, alt: 'Site da Imobilial Imóveis' },
        { src: `${IMG}/sites/alliance.webp`, alt: 'Site da Alliance' },
      ],
    },
    cards: {
      titulo: 'VANTAGENS DE ESTAR COM A PRESENÇA\nONLINE *AMPLIADA*',
      corTitulos: 'roxo',
      itens: [
        { ...VANTAGENS.profissionalismo, texto: 'Sua empresa com um visual chamativo e atraente transmitirá profissionalismo aos seus clientes e futuros parceiros.' },
        { ...VANTAGENS.visibilidade, texto: 'Um site bem organizado e atualizado pode gerar uma maior visibilidade e alcance da sua marca ao público alvo.' },
        { ...VANTAGENS.horas, texto: 'Seu site está sempre ativo e captando cliques de eventuais clientes que tenham interesse no seu serviço ofertado.' },
        { ...VANTAGENS.global, texto: 'Um bom site ou loja virtual pode expandir seu comércio local para algo global sem travas de região.' },
      ],
    },
  },

  'trafego-pago': {
    tituloAba: 'Tráfego Pago | Amplie Marketing',
    destaque: 'rosa',
    intro: {
      titulo: '*AMPLIE SEUS RESULTADOS* COM\nTRÁFEGO PAGO PROFISSIONAL',
      ilustracao: `${IMG}/trafego-pago/ilustracao.svg`,
      texto: ['Sabemos que uma estratégia de tráfego pago bem executada pode ser a chave para acelerar o crescimento do seu negócio. Utilizando a ferramenta da Meta, oferecemos soluções de tráfego pago profissionais que garantem maior visibilidade e retorno sobre o investimento.'],
    },
    galeria: {
      titulo: 'CONFIRA UM POUCO DAS NOSSAS\nCAMPANHAS DE TRÁFEGO PAGO',
      formato: 'larga',
      imagens: [{ src: `${IMG}/trafego-pago/campanhas.webp`, alt: 'Painel de campanhas de tráfego pago no Gerenciador de Anúncios da Meta' }],
    },
    bloco: {
      titulo: 'FERRAMENTA DA META\nPRECISÃO E EFICIÊNCIA',
      texto: 'A ferramenta da Meta, amplamente reconhecida e utilizada no mercado, permite a criação de campanhas altamente segmentadas e eficazes. Com ela, alcançamos seu público-alvo com precisão, maximizando os resultados e otimizando o desempenho das suas campanhas.',
      imagem: { src: `${IMG}/trafego-pago/meta.webp`, alt: 'Meta' },
    },
    cards: {
      titulo: 'O QUE A *AMPLIE* OFERECE COM\nO TRÁFEGO PAGO',
      corTitulos: 'escuro',
      itens: [
        { icone: '/amplie-films/producao-de-videos.svg', titulo: ['CRIAÇÃO', 'DE ANÚNCIOS'], texto: 'Produzimos anúncios criativos e impactantes, que capturam a atenção do público e estimulam a interação e conversão.' },
        { icone: '/amplie-films/edicao.svg', titulo: ['OTIMIZAÇÃO', 'CONTÍNUA'], texto: 'Monitoramos e ajustamos suas campanhas em tempo real, utilizando dados e insights para melhorar continuamente o desempenho e maximizar o retorno sobre o investimento.' },
        { icone: '/amplie-films/institucionais.svg', titulo: ['PLANEJAMENTO', 'DE CAMPANHAS'], texto: 'Desenvolvemos e executamos campanhas online que maximizam a visibilidade da sua marca e impulsionam o engajamento.' },
        { icone: '/amplie-films/video-de-produto.svg', titulo: ['SEGMENTAÇÃO', 'AVANÇADA'], texto: 'Utilizando os recursos da ferramenta da Meta, segmentamos seu público com base em dados demográficos, interesses, comportamentos e muito mais, garantindo que suas mensagens cheguem às pessoas certas.' },
      ],
    },
  },

  'identidade-visual': {
    tituloAba: 'Identidade Visual | Amplie Marketing',
    destaque: 'lilas',
    intro: {
      titulo: 'IDENTIDADE VISUAL\nA ESSÊNCIA DE SUA MARCA',
      ilustracao: `${IMG}/identidade-visual/ilustracao.svg`,
      texto: ['Acreditamos que uma identidade visual forte é a base para qualquer marca de sucesso. É através dela que sua empresa comunica seus valores, diferencia-se no mercado e cria uma conexão emocional com seu público.'],
    },
    galeria: {
      titulo: 'CONFIRA AS IDENTIDADES VISUAIS\nDESENVOLVIDAS PELA *AMPLIE*',
      formato: 'quadrado',
      imagens: [
        { src: `${IMG}/identidade-visual/river-cril.webp`, alt: 'Embalagem da Tinta Emborrachada River Cril' },
        { src: `${IMG}/identidade-visual/secmagry.webp`, alt: 'Caderno com a identidade da SecMagry' },
        { src: `${IMG}/identidade-visual/nelore.webp`, alt: 'Caneca com a marca Nelore Supermercados' },
        { src: `${IMG}/identidade-visual/afa.webp`, alt: 'Marca AFA do Brasil em um tablet' },
      ],
    },
    bloco: {
      titulo: 'CONSTRUINDO SUA\nIDENTIDADE VISUAL',
      texto: 'Combinando criatividade e estratégia, nossa equipe de designers e especialistas em branding trabalha para criar uma identidade visual que seja autêntica, memorável e alinhada com os objetivos do seu negócio.',
      imagem: { src: `${IMG}/identidade-visual/leao-foguete.webp`, alt: 'Leão mascote da Amplie em um foguete' },
    },
    cards: {
      titulo: 'OFERECEMOS SERVIÇOS ESPECIALIZADOS PARA\nDESENVOLVER A SUA IDENTIDADE VISUAL',
      corTitulos: 'escuro',
      itens: [
        { icone: `${IMG}/identidade-visual/manual.svg`, titulo: ['MANUAL DE', 'IDENTIDADE VISUAL'], texto: 'Elaboramos um guia completo com todas as diretrizes de uso da marca, garantindo consistência em todas as aplicações e materiais de comunicação.' },
        { icone: `${IMG}/identidade-visual/paleta.svg`, titulo: ['PALETA DE CORES E', 'TIPOGRAFIA'], texto: 'Selecionamos cores e tipografias que reforçam a personalidade da sua marca e criam uma identidade coesa e impactante.' },
        { icone: `${IMG}/identidade-visual/design.svg`, titulo: ['DESIGN', 'PROFISSIONAL'], texto: 'Sua identidade visual criada por profissionais altamente capacitados e graduados na área, que sempre entregam o melhor design em suas criações.' },
        { icone: `${IMG}/identidade-visual/aplicacao.svg`, titulo: ['APLICAÇÃO', 'DE MARCA'], texto: 'Orientamos e supervisionamos a aplicação correta da identidade visual em diferentes meios e plataformas, garantindo uma comunicação uniforme e eficaz.' },
      ],
    },
  },

  'assessoria-de-marketing': {
    tituloAba: 'Assessoria de Marketing | Amplie Marketing',
    destaque: 'lilas',
    intro: {
      titulo: 'ASSESSORIA DE MARKETING O NORTE PARA\nO SEU SUCESSO DIGITAL!',
      ilustracao: `${IMG}/assessoria/ilustracao.svg`,
      texto: ['Entendemos que o caminho para o sucesso digital pode ser desafiador e cheio de obstáculos. Por isso, oferecemos uma assessoria de marketing completa, focada em guiar sua empresa rumo aos seus objetivos com segurança e eficácia.'],
    },
    bloco: {
      titulo: 'EXPERIÊNCIA E EXPERTISE',
      texto: 'Com anos de experiência no mercado, nossa equipe de especialistas possui o conhecimento necessário para desenvolver estratégias personalizadas e eficientes. Estamos comprometidos em entender as particularidades do seu negócio para oferecer soluções que realmente façam a diferença.',
      imagem: { src: `${IMG}/assessoria/expertise.svg`, alt: '' },
    },
    cards: {
      titulo: 'SERVIÇOS OFERECIDOS',
      corTitulos: 'escuro',
      itens: [
        { icone: `${IMG}/assessoria/planejamento.svg`, titulo: ['PLANEJAMENTO', 'ESTRATÉGICO'], texto: 'Desenvolvemos planos de marketing detalhados, alinhados com os objetivos e metas da sua empresa, garantindo um crescimento sustentável e contínuo.' },
        { icone: `${IMG}/assessoria/conteudo.svg`, titulo: ['MARKETING', 'DE CONTEÚDO'], texto: 'Produzimos conteúdo de qualidade, que educa, informa e converte, posicionando sua marca como autoridade no seu segmento.' },
        { icone: `${IMG}/assessoria/campanhas.svg`, titulo: ['CAMPANHAS', 'PUBLICITÁRIAS'], texto: 'Planejamos e executamos campanhas publicitárias em diversas plataformas, sempre focando em maximizar o retorno sobre o investimento (ROI).' },
        { icone: `${IMG}/assessoria/analise.svg`, titulo: ['ANÁLISE', 'DE MERCADO'], texto: 'Realizamos pesquisas e análises para compreender melhor o seu público-alvo, concorrentes e tendências do mercado, permitindo decisões informadas e assertivas.' },
      ],
    },
  },
};
