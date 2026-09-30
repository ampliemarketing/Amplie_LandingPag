import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LINKS } from '../data/solucoes';

const ANCORAS = [
  { id: 'solucoes', rotulo: 'Soluções' },
  { id: 'quem-somos', rotulo: 'Quem Somos' },
  { id: 'portfolio', rotulo: 'Portifólio' },
  { id: 'clientes', rotulo: 'Clientes' },
  { id: 'contato', rotulo: 'Contato' },
];

/** Destaca no menu a seção que está na tela (igual às âncoras do Wix). */
function useSecaoAtiva(pagina) {
  const [secaoAtiva, setSecaoAtiva] = useState(null);

  useEffect(() => {
    setSecaoAtiva(null);
    if (!('IntersectionObserver' in window)) return undefined;

    // O hero (#inicio) entra na lista para que, no topo da página, nenhum item fique destacado
    const ids = ['inicio', ...ANCORAS.map((ancora) => ancora.id)];
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) setSecaoAtiva(entrada.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    ids.forEach((id) => {
      const secao = document.getElementById(id);
      if (secao) observador.observe(secao);
    });
    return () => observador.disconnect();
  }, [pagina]);

  return secaoAtiva;
}

/** Indica se a página já foi rolada e quanto dela já foi lida (0 a 1). */
function useRolagem() {
  const [rolagem, setRolagem] = useState({ rolado: false, progresso: 0 });

  useEffect(() => {
    let quadro = null;
    const medir = () => {
      quadro = null;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setRolagem({
        rolado: window.scrollY > 10,
        progresso: total > 0 ? Math.min(window.scrollY / total, 1) : 0,
      });
    };
    const aoRolar = () => {
      if (quadro === null) quadro = requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    return () => {
      if (quadro !== null) cancelAnimationFrame(quadro);
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
    };
  }, []);

  return rolagem;
}

export default function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();
  const naInicial = pathname === '/';
  const secaoAtiva = useSecaoAtiva(pathname);
  const { rolado, progresso } = useRolagem();

  useEffect(() => {
    const aoApertarTecla = (evento) => {
      if (evento.key === 'Escape') setMenuAberto(false);
    };
    document.addEventListener('keydown', aoApertarTecla);
    return () => document.removeEventListener('keydown', aoApertarTecla);
  }, []);

  const fecharAoClicarEmLink = (evento) => {
    if (evento.target.closest('a')) setMenuAberto(false);
  };

  return (
    <header className={rolado ? 'topo topo--rolado' : 'topo'}>
      <div className="topo__progresso" style={{ transform: `scaleX(${progresso})` }} aria-hidden="true" />
      <div className="container topo__conteudo">
        {naInicial ? (
          <a className="topo__logo" href="#inicio" aria-label="Amplie Marketing — início">
            <img src="/otimizadas/logo-topo.png" alt="Amplie Marketing" width="400" height="400" />
          </a>
        ) : (
          <Link className="topo__logo" to="/" aria-label="Amplie Marketing — início">
            <img src="/otimizadas/logo-topo.png" alt="Amplie Marketing" width="400" height="400" />
          </Link>
        )}

        <button
          className="topo__botao-menu"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="menu"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav
          className={menuAberto ? 'menu menu--aberto' : 'menu'}
          id="menu"
          aria-label="Menu principal"
          onClick={fecharAoClicarEmLink}
        >
          <ul>
            {ANCORAS.map(({ id, rotulo }) => (
              <li key={id}>
                {/* Na inicial a âncora é nativa; nas outras páginas o link volta para a inicial já na seção */}
                {naInicial
                  ? <a href={`#${id}`} className={secaoAtiva === id ? 'ativo' : undefined}>{rotulo}</a>
                  : <Link to={`/#${id}`}>{rotulo}</Link>}
              </li>
            ))}
            <li>
              <Link to={LINKS.ampliefilms} className={pathname === LINKS.ampliefilms ? 'ativo' : undefined}>Amplie Films</Link>
            </li>
            <li><a href="http://ampliechat.com.br" target="_blank" rel="noopener">Amplie Chat</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
