import { useEffect, useRef, useState } from 'react';
import { CLIENTES } from '../data/clientes';

/**
 * Esteira de logos em loop infinito. O trilho tem duas cópias seguidas da lista:
 * a animação anda metade do trilho e recomeça sem emenda.
 * `velocidade` é em px por segundo; passar o mouse pausa a faixa.
 */
function Esteira({ direcao, velocidade, deslocamento = 0, primeira = false }) {
  const trilhoRef = useRef(null);
  const [duracao, setDuracao] = useState(null);

  // Cada faixa começa num logo diferente para as linhas não ficarem alinhadas
  const inicio = deslocamento % CLIENTES.length;
  const girada = [...CLIENTES.slice(inicio), ...CLIENTES.slice(0, inicio)];
  const logos = direcao === 'direita' ? girada.reverse() : girada;

  useEffect(() => {
    const ajustarVelocidade = () => {
      const metade = trilhoRef.current.scrollWidth / 2;
      setDuracao(`${metade / velocidade}s`);
    };

    ajustarVelocidade();
    let temporizador;
    const aoRedimensionar = () => {
      clearTimeout(temporizador);
      temporizador = setTimeout(ajustarVelocidade, 200);
    };
    window.addEventListener('resize', aoRedimensionar);
    return () => {
      clearTimeout(temporizador);
      window.removeEventListener('resize', aoRedimensionar);
    };
  }, [velocidade]);

  const classes = ['esteira', primeira && 'esteira--primeira', duracao && 'rodando'].filter(Boolean).join(' ');

  return (
    <div className={classes} data-direcao={direcao} aria-hidden={primeira ? undefined : 'true'}>
      <ul className="esteira__trilho" ref={trilhoRef} style={duracao ? { '--duracao': duracao } : undefined}>
        {logos.map((cliente) => (
          <li key={cliente.src}>
            <img src={cliente.src} alt={primeira ? cliente.nome : ''} title={cliente.nome} width="90" height="90" />
          </li>
        ))}
        {logos.map((cliente) => (
          <li key={`copia-${cliente.src}`} aria-hidden="true">
            <img src={cliente.src} alt="" title={cliente.nome} width="90" height="90" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const CAMADA_DIVISOR = 'M1920 291C1656.8 169.2 1323.3 91 960 91S262.5 169.2 0 291v9h1920v-9z';

export default function Clientes() {
  return (
    <section className="clientes" id="clientes">
      <div className="clientes__faixa">
        <div className="container">
          <p className="clientes__chamada"><span>AMPLIE SEUS HORIZONTES</span></p>
          <h2 className="clientes__titulo"><span>CONHEÇA NOSSOS CLIENTES DE SUCESSO</span></h2>
        </div>
      </div>

      {/* Faixas alternando o sentido: esquerda, direita, esquerda */}
      <div className="clientes__esteiras">
        <Esteira direcao="esquerda" velocidade={24} primeira />
        <Esteira direcao="direita" velocidade={30} deslocamento={11} />
        <Esteira direcao="esquerda" velocidade={20} deslocamento={22} />
      </div>

      <div className="divisor-camadas" aria-hidden="true">
        {[1, 2, 3, 4].map((camada) => (
          <svg key={camada} className="divisor-camadas__camada" viewBox="0 91 1920 209" preserveAspectRatio="none">
            <path d={CAMADA_DIVISOR} />
          </svg>
        ))}
      </div>
    </section>
  );
}
