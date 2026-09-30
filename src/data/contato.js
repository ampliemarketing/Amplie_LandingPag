export const WHATSAPP = '5564992924785';

/** Link do WhatsApp da agência já com a mensagem preenchida. */
export function linkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
