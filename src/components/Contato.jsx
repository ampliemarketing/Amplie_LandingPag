import { useState } from 'react';

const WHATSAPP = '5564992924785';

const CAMPOS = [
  { nome: 'nome', rotulo: 'Nome', tipo: 'text', autoComplete: 'name' },
  { nome: 'telefone', rotulo: 'Telefone', tipo: 'tel', autoComplete: 'tel' },
  { nome: 'email', rotulo: 'Email', tipo: 'email', autoComplete: 'email' },
  { nome: 'empresa', rotulo: 'Empresa', tipo: 'text', autoComplete: 'organization' },
  { nome: 'rede_social', rotulo: 'Rede social', tipo: 'text', classe: 'campo--rede' },
];

/**
 * Formulário de contato: o Wix guardava os envios no painel dele.
 * Aqui os dados seguem para o WhatsApp da agência já preenchidos.
 */
export default function Contato() {
  const [status, setStatus] = useState('');

  const enviar = (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    const dados = new FormData(formulario);
    const mensagem = [
      'Olá! Vim pelo site da Amplie Marketing e quero falar com vocês.',
      '',
      `Nome: ${dados.get('nome')}`,
      `Telefone: ${dados.get('telefone')}`,
      `Email: ${dados.get('email')}`,
      `Empresa: ${dados.get('empresa')}`,
      `Rede social: ${dados.get('rede_social')}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
    setStatus('Obrigado pelo envio! Finalize a mensagem no WhatsApp.');
    formulario.reset();
  };

  return (
    <section className="contato" id="contato">
      <div className="container contato__conteudo">
        <h2 className="contato__titulo">Entre em contato{' '}</h2>

        <form className="formulario" id="formulario-contato" onSubmit={enviar}>
          {CAMPOS.map((campo) => (
            <label key={campo.nome} className={`campo ${campo.classe ?? `campo--${campo.nome}`}`}>
              <span className="campo__rotulo">
                {campo.rotulo} <span className="campo__obrigatorio" aria-hidden="true">*</span>
              </span>
              <input type={campo.tipo} name={campo.nome} autoComplete={campo.autoComplete} required />
            </label>
          ))}

          <button className="formulario__enviar" type="submit">Enviar</button>
          <p className="formulario__status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}
