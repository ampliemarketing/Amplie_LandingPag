import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAnimacoesAoRolar } from './hooks/useAnimacoesAoRolar';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import BotaoWhatsapp from './components/BotaoWhatsapp';
import Inicio from './pages/Inicio';
import AmplieFilms from './pages/AmplieFilms';
import PaginaSolucao from './pages/PaginaSolucao';

/** Ao trocar de página, vai para a seção do link (#solucoes...) ou para o topo. */
function useRolarAoNavegar() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const secao = hash && document.getElementById(hash.slice(1));
    if (secao) secao.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
}

export default function App() {
  const { pathname } = useLocation();
  useRolarAoNavegar();
  useAnimacoesAoRolar(pathname);

  return (
    <>
      <Topo />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/amplie-films" element={<AmplieFilms />} />
          <Route path="/:slug" element={<PaginaSolucao />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Rodape />
      <BotaoWhatsapp />
    </>
  );
}
