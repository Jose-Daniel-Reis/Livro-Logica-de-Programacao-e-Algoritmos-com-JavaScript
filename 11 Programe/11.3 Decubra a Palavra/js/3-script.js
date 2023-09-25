const form = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDicas = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadaste palavras para jogar");
    form.inLetra.disabled = true;
    form.btJogar.disabled = true;
    form.btVerDica.disabled = true;
  }

  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length;

  const numAleatorio = Math.floor(Math.random() * tam);

  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = "";

  for (const letra of palavraSorteada) {
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_";
    }
  }
  respPalavra.innerText = novaPalavra;
});

form.btVerDica.addEventListener("click", () => {
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica...");
    form.inLetra.focus();
    return;
  }

  respDicas.innerText = "*" + dicaSorteada;
  respErros.innerText += "*";

  const chances = Number(respChances.innerText) - 1;
  respChances.innerText = chances;

  trocarStatus(chances);

  verificarFim();

  form.inLetra.focus();
});

const trocarStatus = (num) => {
  if (num > 0) imgStatus.src = `img/status${num}.jpg`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const letra = form.inLetra.value.toUpperCase();

  let erros = respErros.innerText;
  let palavra = respPalavra.innerText;

  if (erros.includes(letra) || palavra.includes(letra)) {
    alert("Você já apostou essa letra.");
    form.inLetra.value = "";
    form.inLetra.focus();
    return;
  }

  if (palavraSorteada.includes(letra)) {
    let novaPalavra = "";

    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i);
      }
    }
    respPalavra.innerText = novaPalavra;
  } else {
    respErros.innerText += letra;
    const chances = Number(respChances.innerText) - 1;

    respChances.innerText = chances;

    trocarStatus(chances);
  }

  verificarFim();

  form.inLetra.value = "";
  form.inLetra.focus();
});

const verificarFim = () => {
  const chances = Number(respChances.innerText);

  if (chances == 0) {
    respMensagemFinal.className = "display-3 text-danger";
    respMensagemFinal.innerText = `Ah.. é ${palavraSorteada}. Você perdeu!`;
    concluirJogo();
  } else if (respPalavra.innerText == palavraSorteada) {
    respMensagemFinal.className = "dispaly-3 text-primary";
    respMensagemFinal.innerText = "Parabéns!! Você ganhou!";
    trocarStatus(4);
    concluirJogo();
  }
};

const concluirJogo = () => {
  respDicas.innerText = "* Clique no botão 'iniciar jogo' para jogar novamente";
  form.inLetra.disabled = true;
  form.btJogar.disabled = true;
  form.btVerDica.disabled = true;
};
