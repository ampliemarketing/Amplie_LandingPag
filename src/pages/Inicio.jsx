import { useEffect } from 'react';
import Hero from '../components/Hero';
import Solucoes from '../components/Solucoes';
import QuemSomos from '../components/QuemSomos';
import Portfolio from '../components/Portfolio';
import Clientes from '../components/Clientes';
import Comparativo from '../components/Comparativo';
import Parceiros from '../components/Parceiros';
import Instagram from '../components/Instagram';
import TrabalheConosco from '../components/TrabalheConosco';

export default function Inicio() {
  useEffect(() => {
    document.title = 'Amplie Marketing | Agência de marketing digital | Rio Verde - GO';
  }, []);

  return (
    <>
      <Hero />
      <Solucoes />
      <QuemSomos />
      <Portfolio />
      <Clientes />
      <Comparativo />
      <Parceiros />
      <Instagram />
      <TrabalheConosco />
    </>
  );
}
