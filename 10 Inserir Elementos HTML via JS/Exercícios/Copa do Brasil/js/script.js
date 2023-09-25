const form = document.querySelector("form");
const divForm = document.querySelector("#divForm");
const tabela = document.querySelector("table");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = form.inClube.value;

  const h5 = document.createElement("h5");

  const texto = document.createTextNode(clube);
  h5.appendChild(texto);

  h5.innerText = clube;

  divForm.appendChild(h5);
  console.log(texto);
  form.reset();
  form.inClube.focus();
});

btMontarTabelaJogos.addEventListener("click", () => {
  const times = document.querySelectorAll("h5");

  console.log(times.length);
  console.log(times);

  if (times.length % 2 == 0) {
    for (let i = 0; i < times.length; i = i + 2) {
      const linha = tabela.insertRow(-1);

      const col1 = linha.insertCell(0);
      const col2 = linha.insertCell(1);

      col1.innerHTML = times[i];
      col2.innerText = times[i + 1];
    }
  } else {
    alert("Falta adicionar um clube para gerar a tabela.");
  }
  form.btMontarTabelaJogos.disabled = true;
  form.btAdicionar.disabled = true;
});

const inserirLinha = () => {};

novosClubes.addEventListener("click", () => {
  location.reload();
});
