const form = document.querySelector("form");
const divVela = document.querySelector("#divVela");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const idade = form.inIdade.valueAsNumber;
  let unidade = 0;
  let dezena = 0;
  let centena = 0;

  if (idade < 0 || idade > 120) {
    alert("Idade inválida! Digite um valor entre 0 e 120");
  }

  if (idade < 10) {
    unidade = idade;
    mostrarVelas(unidade);
  } else if (idade >= 10 && idade < 100) {
    dezena = Math.floor(idade / 10);
    unidade = idade % 10;
    mostrarVelas(dezena);
    mostrarVelas(unidade);
  } else {
    centena = 1;
    dezena = Math.floor((idade - 100) / 10);
    unidade = (idade - 100) % 10;
    mostrarVelas(centena);
    mostrarVelas(dezena);
    mostrarVelas(unidade);
  }
  const br = document.createElement("br");
  divVela.appendChild(br);

  form.reset();
  form.inIdade.focus();
});

const mostrarVelas = (num) => {
  const alt0 = "Vela de zero ano";
  const alt1 = "Vela de um ano";
  const alt2 = "Vela de dois anos";
  const alt3 = "Vela de três anos";
  const alt4 = "Vela de qutro anos";
  const alt5 = "Vela de cinco anos";
  const alt6 = "vela de seis anos";
  const alt7 = "vela de sete anos";
  const alt8 = "vela de oito anos";
  const alt9 = "vela de nove anos";

  const definirVelas = (num, vela, textoAlt) => {
    const novaVela = document.createElement("img");

    novaVela.src = "image/" + vela;
    novaVela.textAlt = textoAlt;
    divVela.appendChild(novaVela);
  };

  if (num == 0) {
    definirVelas(0, "0.jpg", alt0);
  } else if (num == 1) {
    definirVelas(1, "1.jpg", alt1);
  } else if (num == 2) {
    definirVelas(2, "2.jpg", alt2);
  } else if (num == 3) {
    definirVelas(3, "3.jpg", alt3);
  } else if (num == 4) {
    definirVelas(4, "4.jpg", alt4);
  } else if (num == 5) {
    definirVelas(5, "5.jpg", alt5);
  } else if (num == 6) {
    definirVelas(6, "6.jpg", alt6);
  } else if (num == 7) {
    definirVelas(7, "7.jpg", alt7);
  } else if (num == 8) {
    definirVelas(8, "8.jpg", alt8);
  } else {
    definirVelas(9, "9.jpg", alt9);
  }
};

form.btNovasVelas.addEventListener("click", () => {
  location.reload();
});
