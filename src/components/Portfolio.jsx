import { useCallback, useEffect, useState } from 'react';
import { PORTFOLIO } from '../data/portfolio';

/** Visualização em tela cheia: setas (ou ← →) navegam, Esc ou clique fora fecha. */
function Visualizador({ indice, aoFechar, aoNavegar }) {
  const peca = PORTFOLIO[indice];

  useEffect(() => {
    const aoApertarTecla = (evento) => {
      if (evento.key === 'Escape') aoFechar();
      if (evento.key === 'ArrowLeft') aoNavegar(-1);
      if (evento.key === 'ArrowRight') aoNavegar(1);
    };
    document.addEventListener('keydown', aoApertarTecla);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoApertarTecla);
      document.body.style.overflow = '';
    };
  }, [aoFechar, aoNavegar]);

  return (
    <div className="visualizador" role="dialog" aria-modal="true" aria-label={peca.alt} onClick={aoFechar}>
      <button className="visualizador__fechar" type="button" aria-label="Fechar" autoFocus onClick={aoFechar}>×</button>

      <button
        className="visualizador__seta visualizador__seta--voltar"
        type="button"
        aria-label="Peça anterior"
        onClick={(evento) => { evento.stopPropagation(); aoNavegar(-1); }}
      >
        <svg viewBox="0 0 24 44" aria-hidden="true"><path d="M21 2 3 22l18 20" /></svg>
      </button>

      <figure className="visualizador__figura" onClick={(evento) => evento.stopPropagation()}>
        <img key={peca.src} src={peca.src} alt={peca.alt} />
        <figcaption>{peca.alt} <span>{indice + 1} / {PORTFOLIO.length}</span></figcaption>
      </figure>

      <button
        className="visualizador__seta visualizador__seta--avancar"
        type="button"
        aria-label="Próxima peça"
        onClick={(evento) => { evento.stopPropagation(); aoNavegar(1); }}
      >
        <svg viewBox="0 0 24 44" aria-hidden="true"><path d="M3 2l18 20L3 42" /></svg>
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [aberta, setAberta] = useState(null);

  const fechar = useCallback(() => setAberta(null), []);
  const navegar = useCallback((sentido) => {
    setAberta((atual) => (atual + sentido + PORTFOLIO.length) % PORTFOLIO.length);
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__titulo">NOSSO PORTFÓLIO</h2>

      <div className="portfolio__grade">
        {PORTFOLIO.map((peca, i) => (
          <button
            key={peca.src}
            className="portfolio__peca anima"
            data-anima="cresce"
            style={{ '--atraso': `${(i % 3) * 0.15}s` }}
            type="button"
            aria-label={`Ampliar: ${peca.alt}`}
            onClick={() => setAberta(i)}
          >
            <img src={peca.src} alt={peca.alt} loading="lazy" />
            <span className="portfolio__lupa" aria-hidden="true">Ver peça</span>
          </button>
        ))}
      </div>

      {aberta !== null && <Visualizador indice={aberta} aoFechar={fechar} aoNavegar={navegar} />}
    </section>
  );
}
