import { linkWhatsapp } from '../data/contato';

const LINK = linkWhatsapp('Olá! Vim pelo site da Amplie Marketing e quero falar com vocês.');

export default function BotaoWhatsapp() {
  return (
    <a className="botao-whatsapp" href={LINK} target="_blank" rel="noopener" aria-label="Falar com a Amplie no WhatsApp">
      <img src="/icones/whatsapp.svg" alt="" width="30" height="30" />
      <span className="botao-whatsapp__texto">Fale conosco</span>
    </a>
  );
}
