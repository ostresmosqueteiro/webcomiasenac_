document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('nav a[href^="#"]');
  var secoes = document.querySelectorAll("main section[id]");
  var anoAtual = document.getElementById("ano-atual");
  var botaoContato = document.getElementById("botao-contato");
  var mensagemStatus = document.getElementById("mensagem-status");
  var cards = document.querySelectorAll(".card");
  var horaTeste = document.getElementById("hora-teste");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  if (horaTeste) {
    horaTeste.textContent = new Date().toLocaleString("pt-BR");
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var alvo = document.querySelector(link.getAttribute("href"));

      if (!alvo) {
        return;
      }

      event.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function marcarLinkAtivo() {
    var idAtual = "inicio";

    secoes.forEach(function (secao) {
      var topo = secao.getBoundingClientRect().top;

      if (topo <= 140) {
        idAtual = secao.id;
      }
    });

    links.forEach(function (link) {
      link.classList.toggle("ativo", link.getAttribute("href") === "#" + idAtual);
    });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (item) {
        item.classList.remove("destacado");
      });

      card.classList.add("destacado");
    });
  });

  if (botaoContato && mensagemStatus) {
    botaoContato.addEventListener("click", function () {
      mensagemStatus.textContent = "Abrindo seu aplicativo de e-mail para enviar a mensagem.";
    });
  }

  marcarLinkAtivo();
  window.addEventListener("scroll", marcarLinkAtivo);
});
