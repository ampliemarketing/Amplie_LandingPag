(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Menu sanduíche (tablet/celular)
     ------------------------------------------------------------------ */
  var botaoMenu = document.querySelector('.topo__botao-menu');
  var menu = document.getElementById('menu');

  function fecharMenu() {
    menu.classList.remove('menu--aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
  }

  botaoMenu.addEventListener('click', function () {
    var abrir = !menu.classList.contains('menu--aberto');
    menu.classList.toggle('menu--aberto', abrir);
    botaoMenu.setAttribute('aria-expanded', String(abrir));
    botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  });

  menu.addEventListener('click', function (evento) {
    if (evento.target.closest('a')) fecharMenu();
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') fecharMenu();
  });

  /* ------------------------------------------------------------------
     Destaca no menu a seção que está na tela (igual às âncoras do Wix)
     ------------------------------------------------------------------ */
  var linksAncora = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));

  if ('IntersectionObserver' in window) {
    var observadorSecoes = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var id = '#' + entrada.target.id;
        linksAncora.forEach(function (link) {
          link.classList.toggle('ativo', link.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    linksAncora.forEach(function (link) {
      var secao = document.querySelector(link.getAttribute('href'));
      if (secao) observadorSecoes.observe(secao);
    });

    // No topo da página (hero) nenhum item fica destacado
    var hero = document.getElementById('inicio');
    new IntersectionObserver(function (entradas) {
      if (entradas[0].isIntersecting) {
        linksAncora.forEach(function (link) { link.classList.remove('ativo'); });
      }
    }, { rootMargin: '-45% 0px -50% 0px' }).observe(hero);
  }

  /* ------------------------------------------------------------------
     Leão do hero: mostra o PNG na hora e troca pelo GIF animado
     quando ele terminar de carregar (o GIF tem ~5,7 MB)
     ------------------------------------------------------------------ */
  var leao = document.querySelector('.hero__leao');
  if (leao && leao.dataset.gif && !reduzMovimento) {
    var gif = new Image();
    gif.onload = function () { leao.src = gif.src; };
    gif.src = leao.dataset.gif;
  }

  /* ------------------------------------------------------------------
     Esteiras de logos dos clientes — 3 faixas rodando sem parar a 20px/s
     (a do meio anda no sentido contrário, como no Wix)
     ------------------------------------------------------------------ */
  var VELOCIDADE_ESTEIRA = 20; // px por segundo
  var listaLogos = document.getElementById('logos-clientes');
  var esteiras = Array.prototype.slice.call(document.querySelectorAll('.esteira'));

  if (listaLogos) {
    var logos = Array.prototype.slice.call(listaLogos.children).map(function (item) {
      return item.cloneNode(true);
    });

    esteiras.forEach(function (esteira) {
      var trilho = esteira.querySelector('.esteira__trilho');
      var itens = logos.map(function (item) { return item.cloneNode(true); });
      if (esteira.dataset.direcao === 'direita') itens.reverse();

      // Duas cópias seguidas: a animação anda metade do trilho e recomeça sem emenda
      var copia = itens.map(function (item) {
        var clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelector('img').alt = '';
        return clone;
      });

      trilho.innerHTML = '';
      itens.concat(copia).forEach(function (item) { trilho.appendChild(item); });
    });

    var ajustarVelocidade = function () {
      esteiras.forEach(function (esteira) {
        var trilho = esteira.querySelector('.esteira__trilho');
        var metade = trilho.scrollWidth / 2;
        trilho.style.setProperty('--duracao', (metade / VELOCIDADE_ESTEIRA) + 's');
        esteira.classList.add('rodando');
      });
    };

    ajustarVelocidade();
    var temporizadorResize;
    window.addEventListener('resize', function () {
      clearTimeout(temporizadorResize);
      temporizadorResize = setTimeout(ajustarVelocidade, 200);
    });
  }

  /* ------------------------------------------------------------------
     Slider de parceiros: passar o mouse (ou segurar) nas setas rola a
     faixa continuamente; clicar avança/volta alguns logos.
     ------------------------------------------------------------------ */
  var janela = document.querySelector('.slider__janela');
  var rolagemAtiva = null;

  function rolarContinuo(sentido) {
    var ultimo = null;
    function passo(agora) {
      if (ultimo !== null) janela.scrollLeft += sentido * 0.35 * (agora - ultimo);
      ultimo = agora;
      rolagemAtiva = requestAnimationFrame(passo);
    }
    pararRolagem();
    rolagemAtiva = requestAnimationFrame(passo);
  }

  function pararRolagem() {
    if (rolagemAtiva) cancelAnimationFrame(rolagemAtiva);
    rolagemAtiva = null;
  }

  document.querySelectorAll('.slider__seta').forEach(function (seta) {
    var sentido = Number(seta.dataset.sentido);
    seta.addEventListener('mouseenter', function () { rolarContinuo(sentido); });
    seta.addEventListener('mouseleave', pararRolagem);
    seta.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter' && !evento.repeat) rolarContinuo(sentido);
    });
    seta.addEventListener('keyup', function (evento) {
      if (evento.key === 'Enter') pararRolagem();
    });
    seta.addEventListener('click', function (evento) {
      if (evento.detail === 0) return; // clique via teclado já é tratado acima
      pararRolagem();
      janela.scrollBy({ left: sentido * 411, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------------------------------
     Formulário de contato: o Wix guardava os envios no painel dele.
     Aqui os dados seguem para o WhatsApp da agência já preenchidos.
     ------------------------------------------------------------------ */
  var WHATSAPP = '5564992924785';
  var formulario = document.getElementById('formulario-contato');
  var status = formulario.querySelector('.formulario__status');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    var dados = new FormData(formulario);
    var mensagem = [
      'Olá! Vim pelo site da Amplie Marketing e quero falar com vocês.',
      '',
      'Nome: ' + dados.get('nome'),
      'Telefone: ' + dados.get('telefone'),
      'Email: ' + dados.get('email'),
      'Empresa: ' + dados.get('empresa'),
      'Rede social: ' + dados.get('rede_social')
    ].join('\n');

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(mensagem), '_blank', 'noopener');
    status.textContent = 'Obrigado pelo envio! Finalize a mensagem no WhatsApp.';
    formulario.reset();
  });

  /* ------------------------------------------------------------------
     Animações de entrada ao rolar (fade, flutuar, deslizar...)
     ------------------------------------------------------------------ */
  var animados = document.querySelectorAll('.anima');

  if (reduzMovimento || !('IntersectionObserver' in window)) {
    animados.forEach(function (el) { el.classList.add('visivel'); });
  } else {
    var observadorAnimacao = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observadorAnimacao.unobserve(entrada.target);
      });
    }, { threshold: 0.15 });

    animados.forEach(function (el) { observadorAnimacao.observe(el); });
  }
})();
