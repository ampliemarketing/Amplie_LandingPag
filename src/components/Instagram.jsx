/** `compacto` usa a versão menor da seção, no tamanho dos títulos da página Amplie Films. */
export default function Instagram({ compacto = false }) {
  return (
    <section className={compacto ? 'instagram instagram--compacto' : 'instagram'} aria-labelledby="titulo-instagram">
      <h2 className="instagram__titulo anima" data-anima="flutua" id="titulo-instagram">NOS SIGA NO INSTAGRAM</h2>
      <div className="instagram__feed">
        <a className="instagram__perfil" href="https://www.instagram.com/amplie_marketing/" target="_blank" rel="noopener">@amplie_marketing</a>
      </div>
    </section>
  );
}
