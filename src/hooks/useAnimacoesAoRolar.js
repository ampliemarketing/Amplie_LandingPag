import { useEffect } from 'react';

/**
 * Animações de entrada ao rolar (fade, flutuar, deslizar...).
 * Todo elemento com a classe `anima` ganha `visivel` quando aparece na tela.
 * `pagina` faz a busca pelos elementos recomeçar a cada troca de página.
 */
export function useAnimacoesAoRolar(pagina) {
  useEffect(() => {
    const animados = document.querySelectorAll('.anima');

    if (!('IntersectionObserver' in window)) {
      animados.forEach((el) => el.classList.add('visivel'));
      return undefined;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.15 });

    animados.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [pagina]);
}
