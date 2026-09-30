import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LINKS, SOLUCOES } from '../data/solucoes';

function ComQuebras({ linhas }) {
  return linhas.map((linha, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {linha}
    </Fragment>
  ));
}

export default function Solucoes() {
  return (
    <section className="solucoes" id="solucoes">
      <div className="container solucoes__conteudo">
        <h2 className="solucoes__titulo anima" data-anima="desliza">AMPLIE SUAS SOLUÇÕES</h2>

        {SOLUCOES.map((solucao) => {
          // Links que começam com "/" são páginas deste site; os demais continuam no Wix
          const interno = solucao.link.startsWith('/');
          const Destino = interno ? Link : 'a';
          const props = interno ? { to: solucao.link } : { href: solucao.link };
          return (
          <Destino
            key={solucao.classe}
            className={`card ${solucao.classe} anima`}
            data-anima="fade"
            style={solucao.atraso ? { '--atraso': solucao.atraso } : undefined}
            {...props}
          >
            <img
              className="card__icone"
              src={solucao.icone.src}
              alt=""
              width={solucao.icone.largura}
              height={solucao.icone.altura}
            />
            <h3 className="card__titulo"><ComQuebras linhas={solucao.titulo} /></h3>
            <p className="card__texto"><ComQuebras linhas={solucao.texto} /></p>
          </Destino>
          );
        })}

        <a className="botao-contorno solucoes__botao anima elastico" data-anima="flutua" href={LINKS.trabalheConosco}>
          VAMOS TRABALHAR JUNTOS
        </a>
      </div>

      <svg className="divisor divisor--solucoes" viewBox="0 100 1920 200" preserveAspectRatio="none" aria-hidden="true">
        <path d="m0 300 503.884-200L1920 300H0z" />
      </svg>
    </section>
  );
}
