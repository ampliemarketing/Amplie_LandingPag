import { Fragment, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PAGINAS_SOLUCOES } from '../data/paginasSolucoes';
import { linkWhatsapp } from '../data/contato';
import '../styles/pagina-solucao.css';

const LINK_CONTATO = linkWhatsapp('Olá, gostaria de iniciar uma parceria...');

/** Renderiza os títulos dos dados: `\n` vira quebra de linha e *texto* vira destaque. */
function Titulo({ texto, className = 'sol-titulo' }) {
  const linhas = texto.split('\n');
  return (
    <h2 className={`${className} anima`} data-anima="flutua">
      {linhas.map((linha, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linha.split(/\*([^*]+)\*/).map((parte, j) => (j % 2 ? <mark key={j}>{parte}</mark> : parte))}
        </Fragment>
      ))}
    </h2>
  );
}

function Intro({ intro }) {
  return (
    <section className="sol-intro">
      <div className="sol-container">
        <Titulo texto={intro.titulo} className="sol-titulo sol-titulo--pagina" />
        <div className="sol-duas-colunas">
          <img className="sol-intro__ilustracao anima" data-anima="desliza" src={intro.ilustracao} alt="" />
          <div className="sol-texto anima" data-anima="flutua">
            {intro.texto.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}
            {intro.lista && (
              <ul className="sol-lista">
                {intro.lista.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria({ galeria }) {
  return (
    <section className="sol-galeria">
      <Titulo texto={galeria.titulo} />
      <ul className={`sol-galeria__grade sol-galeria__grade--${galeria.formato}`}>
        {galeria.imagens.map((imagem, i) => (
          <li key={imagem.src} className="sol-galeria__item anima" data-anima="cresce" style={{ '--atraso': `${i * 0.15}s` }}>
            <img src={imagem.src} alt={imagem.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Bloco({ bloco }) {
  return (
    <section className="sol-bloco">
      <div className="sol-container">
        <Titulo texto={bloco.titulo} />
        <div className="sol-duas-colunas sol-duas-colunas--invertido">
          <p className="sol-texto anima" data-anima="desliza">{bloco.texto}</p>
          <img className="sol-bloco__imagem anima" data-anima="cresce" src={bloco.imagem.src} alt={bloco.imagem.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Cards({ cards }) {
  return (
    <section className="sol-cards">
      <div className="sol-container">
        <Titulo texto={cards.titulo} />
        <ul className={`sol-cards__grade sol-cards__grade--${cards.corTitulos}`}>
          {cards.itens.map((item, i) => (
            <li key={item.icone} className="sol-card anima" data-anima="flutua" style={{ '--atraso': `${i * 0.2}s` }}>
              <img className="sol-card__icone" src={item.icone} alt="" loading="lazy" />
              <h3 className="sol-card__titulo">
                {item.titulo.map((linha, j) => <Fragment key={linha}>{j > 0 && <br />}{linha}</Fragment>)}
              </h3>
              <p className="sol-card__texto">{item.texto}</p>
            </li>
          ))}
        </ul>

        <a className="sol-botao anima elastico" data-anima="cresce" href={LINK_CONTATO} target="_blank" rel="noopener">
          Entre em contato conosco
        </a>
      </div>
    </section>
  );
}

export default function PaginaSolucao() {
  const { slug } = useParams();
  const pagina = PAGINAS_SOLUCOES[slug];

  useEffect(() => {
    if (pagina) document.title = pagina.tituloAba;
  }, [pagina]);

  if (!pagina) return <Navigate to="/" replace />;

  return (
    <div className={`sol sol--destaque-${pagina.destaque}`}>
      <Intro intro={pagina.intro} />
      {pagina.galeria && <Galeria galeria={pagina.galeria} />}
      {pagina.bloco && <Bloco bloco={pagina.bloco} />}
      <Cards cards={pagina.cards} />
    </div>
  );
}
