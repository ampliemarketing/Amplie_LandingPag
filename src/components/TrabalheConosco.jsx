import { LINKS } from '../data/solucoes';

export default function TrabalheConosco() {
  return (
    <section className="trabalhe" aria-labelledby="titulo-trabalhe">
      <div className="container trabalhe__conteudo">
        <p className="trabalhe__chamada anima" data-anima="desliza"><span>QUER SER AMPLIE MARKETING ?</span></p>
        <h2 className="trabalhe__titulo anima" data-anima="desliza" id="titulo-trabalhe"><span>VENHA FAZER PARTE DA NOSSA EQUIPE</span></h2>
        <a className="botao-trabalhe anima elastico" data-anima="cresce" href={LINKS.trabalheConosco} target="_blank" rel="noopener">TRABALHE CONOSCO</a>
      </div>
    </section>
  );
}
