import { useEffect, useRef, useState } from 'react';
import Instagram from '../components/Instagram';
import { ETAPAS, LINK_CONTATO, SERVICOS, VIDEOS_CARROSSEL, VIDEO_DESTAQUE } from '../data/amplieFilms';
import '../styles/amplie-films.css';

function IconePlay() {
  return (
    <span className="video__play" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
    </span>
  );
}

/**
 * Mostra a capa com botão de play; ao clicar, troca pelo vídeo tocando com controles.
 * Só um vídeo toca por vez: `tocando`/`aoTocar` vêm do componente pai.
 */
function Video({ video, className, tocando, aoTocar }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!tocando && videoRef.current) videoRef.current.pause();
  }, [tocando]);

  return (
    <div className={`video ${className}`}>
      {tocando ? (
        <video ref={videoRef} src={video.src} poster={video.capa} controls autoPlay playsInline />
      ) : (
        <button type="button" className="video__capa" onClick={aoTocar} aria-label={`Assistir: ${video.titulo}`}>
          <img src={video.capa} alt="" loading="lazy" />
          <IconePlay />
        </button>
      )}
    </div>
  );
}

function Carrossel({ tocando, setTocando }) {
  const janelaRef = useRef(null);
  const [limites, setLimites] = useState({ inicio: true, fim: false });

  const atualizarLimites = () => {
    const janela = janelaRef.current;
    setLimites({
      inicio: janela.scrollLeft <= 2,
      fim: janela.scrollLeft + janela.clientWidth >= janela.scrollWidth - 2,
    });
  };

  useEffect(() => {
    atualizarLimites();
    window.addEventListener('resize', atualizarLimites);
    return () => window.removeEventListener('resize', atualizarLimites);
  }, []);

  const rolar = (sentido) => {
    const janela = janelaRef.current;
    const passo = janela.querySelector('.video').offsetWidth + 10;
    janela.scrollBy({ left: sentido * passo, behavior: 'smooth' });
  };

  return (
    <div className="carrossel">
      <button className="carrossel__seta carrossel__seta--voltar" type="button" aria-label="Vídeos anteriores" onClick={() => rolar(-1)} hidden={limites.inicio}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
      </button>

      <div className="carrossel__janela" ref={janelaRef} onScroll={atualizarLimites}>
        {VIDEOS_CARROSSEL.map((video) => (
          <Video
            key={video.src}
            video={video}
            className="video--vertical"
            tocando={tocando === video.src}
            aoTocar={() => setTocando(video.src)}
          />
        ))}
      </div>

      <button className="carrossel__seta carrossel__seta--avancar" type="button" aria-label="Próximos vídeos" onClick={() => rolar(1)} hidden={limites.fim}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
    </div>
  );
}

export default function AmplieFilms() {
  const [tocando, setTocando] = useState(null);

  useEffect(() => {
    document.title = 'Amplie Films | Amplie Marketing';
  }, []);

  return (
    <div className="films">
      {/* ============================== LOGO ============================== */}
      <section className="films-logo">
        <h1 className="anima" data-anima="fade">
          <img src="/amplie-films/logo.webp" alt="Amplie Films" width="803" height="314" />
        </h1>
      </section>

      {/* ============================== O QUE É ============================== */}
      <section className="films-sobre">
        <div className="films-container">
          <h2 className="films-titulo anima" data-anima="flutua">
            O QUE É A <mark>AMPLIE FILMS</mark> ?
          </h2>
          <div className="films-sobre__conteudo">
            <img className="films-sobre__ilustracao anima" data-anima="desliza" src="/amplie-films/o-que-e.svg" alt="" width="429" height="422" />
            <div className="films-texto anima" data-anima="flutua">
              <p>A Amplie Films nasceu como uma extensão da Amplie Marketing para suprir a demanda por produções audiovisuais de alto padrão. Com uma equipe altamente qualificada e estrutura profissional de ponta, a produtora se destacou rapidamente no mercado, oferecendo excelência em cada etapa — da criação à finalização.</p>
              <p>Mais do que vídeos e fotos, a Amplie entrega experiências visuais sofisticadas, criativas e impactantes, sendo a escolha ideal para marcas e profissionais que exigem qualidade superior e resultados concretos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== VÍDEOS ============================== */}
      <section className="films-videos">
        <h2 className="films-titulo films-titulo--claro anima" data-anima="flutua">
          CONFIRA UM POUCO DOS VÍDEOS<br />PRODUZIDOS PELA <mark>AMPLIE FILMS</mark>
        </h2>

        <div className="films-videos__conteudo">
          <Carrossel tocando={tocando} setTocando={setTocando} />
          <Video
            video={VIDEO_DESTAQUE}
            className="video--destaque anima"
            tocando={tocando === VIDEO_DESTAQUE.src}
            aoTocar={() => setTocando(VIDEO_DESTAQUE.src)}
          />
        </div>
      </section>

      {/* ============================== FILMAGEM AÉREA ============================== */}
      <section className="films-drone">
        <div className="films-container">
          <h2 className="films-titulo films-titulo--menor anima" data-anima="flutua">
            FILMAGEM AÉREA PROFISSIONAL QUE <mark>AMPLIA</mark><br />A VISÃO E O IMPACTO DO SEU PROJETO
          </h2>
          <img className="films-drone__ilustracao anima" data-anima="cresce" src="/amplie-films/drone.webp" alt="" width="451" height="298" loading="lazy" />
          <p className="films-texto films-drone__texto anima" data-anima="fade">
            A Amplie Marketing realiza filmagens aéreas com drones profissionais, captando imagens estáveis e de alta qualidade para valorizar seu projeto com ângulos únicos e impacto visual.
          </p>
        </div>
      </section>

      {/* ============================== FLUXO DE PRODUÇÃO ============================== */}
      <section className="films-fluxo">
        <h2 className="films-titulo films-titulo--claro anima" data-anima="flutua">
          Nosso Fluxo de Produção<br />Audiovisual de <mark>Excelência</mark>
        </h2>

        <ol className="fluxo">
          {ETAPAS.map((etapa, i) => (
            <li key={etapa} className="fluxo__etapa anima" data-anima="cresce" style={{ '--atraso': `${i * 0.25}s` }}>
              <span className="fluxo__numero">{i + 1}</span>
              <span className="fluxo__nome">{etapa}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ============================== SERVIÇOS ============================== */}
      <section className="films-servicos">
        <div className="films-container">
          <h2 className="films-titulo anima" data-anima="flutua">
            O QUE A <mark>AMPLIE FILMS</mark> OFERECE<br />NOS SEUS VÍDEOS PUBLICITÁRIOS
          </h2>

          <ul className="servicos">
            {SERVICOS.map((servico, i) => (
              <li key={servico.ilustracao} className="servico anima" data-anima="flutua" style={{ '--atraso': `${i * 0.2}s` }}>
                <img className="servico__ilustracao" src={servico.ilustracao} alt="" loading="lazy" />
                <h3 className="servico__titulo">{servico.titulo[0]}<br />{servico.titulo[1]}</h3>
                <p className="servico__texto">{servico.texto}</p>
              </li>
            ))}
          </ul>

          <a className="films-botao anima elastico" data-anima="cresce" href={LINK_CONTATO} target="_blank" rel="noopener">
            Entre em contato conosco
          </a>
        </div>
      </section>

      {/* ============================== CRIATIVIDADE E ESTRATÉGIA ============================== */}
      <section className="films-criatividade">
        <div className="films-container">
          <h2 className="films-titulo anima" data-anima="flutua">CRIATIVIDADE<br />E ESTRATÉGIA</h2>
          <div className="films-criatividade__conteudo">
            <p className="films-texto anima" data-anima="desliza">
              Nossa equipe de especialistas em produção de vídeo combina criatividade, técnica e estratégia para desenvolver vídeos publicitários que destacam a essência da sua marca e comunicam suas mensagens de forma eficaz. Trabalhamos desde o conceito inicial até a produção final, garantindo um resultado que impressiona e engaja.
            </p>
            <img className="films-criatividade__ilustracao anima" data-anima="cresce" src="/amplie-films/criatividade.svg" alt="" width="454" height="464" loading="lazy" />
          </div>
        </div>
      </section>

      <Instagram compacto />
    </div>
  );
}
