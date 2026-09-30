import { useEffect, useRef } from 'react';
import { PARCEIROS } from '../data/parceiros';

/**
 * Slider de parceiros: passar o mouse (ou segurar Enter) nas setas rola a
 * faixa continuamente; clicar avança/volta alguns logos.
 */
function useRolagemContinua(janelaRef) {
  const quadroRef = useRef(null);

  const parar = () => {
    if (quadroRef.current) cancelAnimationFrame(quadroRef.current);
    quadroRef.current = null;
  };

  const rolar = (sentido) => {
    let ultimo = null;
    const passo = (agora) => {
      if (ultimo !== null) janelaRef.current.scrollLeft += sentido * 0.35 * (agora - ultimo);
      ultimo = agora;
      quadroRef.current = requestAnimationFrame(passo);
    };
    parar();
    quadroRef.current = requestAnimationFrame(passo);
  };

  useEffect(() => parar, []);

  return { rolar, parar };
}

function Seta({ sentido, rotulo, caminho, rolagem, janelaRef }) {
  const classe = sentido < 0 ? 'slider__seta--voltar' : 'slider__seta--avancar';

  return (
    <button
      className={`slider__seta ${classe}`}
      type="button"
      aria-label={rotulo}
      onMouseEnter={() => rolagem.rolar(sentido)}
      onMouseLeave={rolagem.parar}
      onKeyDown={(evento) => {
        if (evento.key === 'Enter' && !evento.repeat) rolagem.rolar(sentido);
      }}
      onKeyUp={(evento) => {
        if (evento.key === 'Enter') rolagem.parar();
      }}
      onClick={(evento) => {
        if (evento.detail === 0) return; // clique via teclado já é tratado acima
        rolagem.parar();
        janelaRef.current.scrollBy({ left: sentido * 411, behavior: 'smooth' });
      }}
    >
      <svg viewBox="0 0 24 44" aria-hidden="true"><path d={caminho} /></svg>
    </button>
  );
}

export default function Parceiros() {
  const janelaRef = useRef(null);
  const rolagem = useRolagemContinua(janelaRef);

  return (
    <section className="parceiros" aria-labelledby="titulo-parceiros">
      <h2 className="parceiros__titulo anima" data-anima="flutua" id="titulo-parceiros">NOSSOS PARCEIROS</h2>

      <div className="slider">
        <Seta sentido={-1} rotulo="Voltar parceiros" caminho="M21 2 3 22l18 20" rolagem={rolagem} janelaRef={janelaRef} />
        <div className="slider__janela" tabIndex={0} aria-label="Logos dos parceiros" ref={janelaRef}>
          <ul className="slider__trilho">
            {PARCEIROS.map((parceiro, i) => (
              <li key={i}>
                <img src={parceiro.src} alt={parceiro.nome} width="107" height="107" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
        <Seta sentido={1} rotulo="Avançar parceiros" caminho="M3 2l18 20L3 42" rolagem={rolagem} janelaRef={janelaRef} />
      </div>

      <svg className="divisor divisor--parceiros" viewBox="0 91 1920 209" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1920 291C1656.8 169.2 1323.3 91 960 91S262.5 169.2 0 291v9h1920v-9z" />
      </svg>
    </section>
  );
}
