import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <footer className="rodape" id="contato">
      <div className="container rodape__conteudo">
        <Link className="rodape__logo anima" data-anima="flutua" to="/#inicio">
          <img src="/do-wix/logo-rodape.png" alt="Logo agência" width="153" height="153" loading="lazy" />
        </Link>

        <div className="rodape__bloco rodape__bloco--contato anima" data-anima="flutua">
          <p className="rodape__rotulo">CONTATO</p>
          <p className="rodape__linha">
            <img className="rodape__icone" src="/icones/whatsapp.svg" alt="" width="18" height="18" />
            <a href="https://wa.me/5564992924785" target="_blank" rel="noopener">(64) 9 9292-4785</a>
          </p>
          <p className="rodape__linha">
            <img className="rodape__icone" src="/icones/email.svg" alt="" width="18" height="14" />
            <a href="mailto:ampliemarketing.mkt@gmail.com">ampliemarketing.mkt@gmail.com</a>
          </p>
        </div>

        <div className="rodape__bloco rodape__bloco--endereco anima" data-anima="flutua">
          <p className="rodape__rotulo">ENDEREÇO</p>
          <p className="rodape__endereco">
            <img className="rodape__icone" src="/icones/localizacao.svg" alt="" width="14" height="18" />
            R. Tupiniquins, Q 31 - L 11 - Parque Laranjeiras, Rio Verde - GO, 75908-210
          </p>
        </div>

        <p className="rodape__copyright">
          <a href="https://www.instagram.com/amplie_marketing/" target="_blank" rel="noopener">© 2024 Orgulhosamente criado por Amplie Marketing</a>
        </p>
      </div>
    </footer>
  );
}
