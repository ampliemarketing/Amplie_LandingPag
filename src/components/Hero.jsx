import { useEffect, useState } from 'react';

const LEAO_PNG = '/leao-animado-3-unscreen_edited.png';
const LEAO_GIF = '/do-wix/leao-foguete.gif';

export default function Hero() {
  const [leao, setLeao] = useState(LEAO_PNG);

  // Mostra o PNG na hora e troca pelo GIF animado quando ele terminar de carregar (o GIF tem ~5,7 MB)
  useEffect(() => {
    const gif = new Image();
    gif.onload = () => setLeao(LEAO_GIF);
    gif.src = LEAO_GIF;
    return () => { gif.onload = null; };
  }, []);

  return (
    <section className="hero" id="inicio">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/do-wix/hero-planeta.jpg"
        aria-hidden="true"
      >
        <source src="/do-wix/hero-planeta.mp4" type="video/mp4" />
      </video>

      <div className="container hero__conteudo">
        <h1 className="hero__titulo anima" data-anima="fade">
          <span className="hero__marca"><mark>Amplie Marketing</mark>:</span> Aumente sua presença online com soluções completas em marketing digital
        </h1>
        <p className="hero__subtitulo anima" data-anima="desliza" style={{ '--atraso': '.5s' }}>
          Agência especializada em gerar resultados reais no digital, com estratégia, criatividade e performance para impulsionar o crescimento da sua marca.
        </p>
        <img
          className="hero__leao anima"
          data-anima="desliza"
          src={leao}
          alt="leão mascote"
          width="360"
          height="360"
        />
      </div>
    </section>
  );
}
