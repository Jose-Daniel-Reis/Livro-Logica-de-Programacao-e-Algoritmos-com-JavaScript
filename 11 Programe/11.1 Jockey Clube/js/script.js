const form = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const apostas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cavalo = form.inCavalo.valueAsNumber;
  const valor = form.inValor.valueAsNumber;

  apostas.push({ cavalo, valor });
  let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

  for (const aposta of apostas) {
    lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
    lista += `- R$: ${aposta.valor.toFixed(2)}\n`;
  }
  respLista.innerText = lista;

  form.reset();
  form.inCavalo.focus();
});

const obterCavalo = (num) => {
  const posicao = num - 1;
  return cavalos[posicao];
};

form.inCavalo.addEventListener("blur", () => {
  if (form.inCavalo.value == "") {
    respCavalo.innerText = "";
    return;
  }
  const numCavalo = form.inCavalo.valueAsNumber;

  if (!validarCavalo(numCavalo)) {
    alert("N° do cavalo inválido.");
    form.inCavalo.focus();
    return;
  }
  const nome = obterCavalo(numCavalo);
  const contaNum = contarApostas(numCavalo);
  const total = totalizadorApostas(numCavalo);

  respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(
    2
  )})`;
});

const validarCavalo = (num) => {
  return num >= 1 && num <= cavalos.length;
};

const contarApostas = (num) => {
  let contador = 0;

  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      contador++;
    }
  }
  return contador;
};

const totalizadorApostas = (num) => {
  let total = 0;

  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      total += aposta.valor;
    }
  }
  return total;
};

form.inCavalo.addEventListener("focus", () => {
  form.inCavalo.value = "";
  respCavalo.innerText = "";
});

form.btResumo.addEventListener("click", () => {
  const somaApostas = [0, 0, 0, 0, 0, 0];

  for (const aposta of apostas) {
    somaApostas[aposta.cavalo - 1] += aposta.valor;
  }
  let resposta = `N° Cavalo..............R$ Apostado\n${"-".repeat(34)}\n`;
  cavalos.forEach((cavalo, i) => {
    resposta += `${i + 1} ${cavalo.padEnd(20)}`;
    resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
  });
  respLista.innerText = resposta;
});

form.btGanhador.addEventListener("click", () => {
  const ganhador = Number(prompt("N° Cavalo Ganhador: "));

  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inválido");
    return;
  }
  const total = apostas.reduce(
    (acumulador, aposta) => acumulador + aposta.valor,
    0
  );

  let resumo = `Resultado Final do Páreo\n${"-".repeat(26)}\n`;

  resumo += `N° total de apostas: ${apostas.length}\n`;
  resumo += `Total geral R$: ${total.toFixed(2)}\n\n`;
  resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
  resumo += `N° de apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total apostado R$: ${totalizadorApostas(ganhador).toFixed(2)}`;

  respLista.innerText = resumo;

  form.btApostar.disable = true;
  form.btGanhador.disable = true;
  form.btNovo.focus();
});

form.btNovo.addEventListener("click", () => window.location.reload());
