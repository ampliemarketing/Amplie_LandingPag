// Cada linha compara a Amplie com as outras agências; `ajuste` alinha alguns itens como no Wix
const LINHAS = [
  {
    amplie: 'Equipe experiente, dedicada e SEMPRE interna.',
    outras: 'Terceirização frequente para reduzir custos, equipe menos experiente.',
  },
  {
    amplie: 'Alinhamento e sucesso.',
    outras: 'Escopo padrão e acompanhamento limitado.',
    ajuste: 'comparativo__item--desce-12',
  },
  {
    amplie: 'Estratégia sob medida para as necessidades do seu negócio.',
    outras: 'Pacotes padronizados com pouca flexibilidade.',
  },
  {
    amplie: 'Marcos de desempenho imbatíveis e ROI positivo comprovado.',
    outras: 'Sem metas claras e mensuráveis, resultados incertos.',
  },
  {
    amplie: 'Sem taxas ocultas e todos os dados são seus.',
    outras: 'Taxas escondidas e falta de transparência sobre os dados.',
    ajuste: 'comparativo__item--desce-3',
  },
];

export default function Comparativo() {
  return (
    <section className="comparativo" aria-label="Amplie Marketing x outras agências">
      <div className="container comparativo__conteudo">
        <img className="comparativo__icone comparativo__icone--check anima elastico" data-anima="gira" src="/icones/check.svg" alt="" width="138" height="114" />
        <h2 className="comparativo__marca comparativo__marca--amplie anima" data-anima="desliza">AMPLIE<br />MARKETING</h2>
        <span className="comparativo__versus anima" data-anima="flutua" aria-hidden="true">x</span>
        <h2 className="comparativo__marca comparativo__marca--outras anima" data-anima="desliza">OUTRAS AGÊNCIAS</h2>
        <img className="comparativo__icone comparativo__icone--xis anima elastico" data-anima="gira" src="/icones/xis.svg" alt="" width="120" height="120" />

        <div className="comparativo__linhas">
          {LINHAS.flatMap(({ amplie, outras, ajuste }) => [
            <p key={`amplie-${amplie}`} className={['comparativo__item comparativo__item--amplie', ajuste, 'anima'].filter(Boolean).join(' ')} data-anima="desliza">
              {amplie}
            </p>,
            <p key={`outras-${outras}`} className="comparativo__item comparativo__item--outras anima" data-anima="desliza">
              {outras}
            </p>,
          ])}
        </div>
      </div>
    </section>
  );
}
