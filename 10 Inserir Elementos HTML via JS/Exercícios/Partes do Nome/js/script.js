const form = document.querySelector("form");
const divForm = document.querySelector("#divForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;

  const partes = nome.split(" ");

  for (let i = 0; i < partes.length; i++) {
    const num = (Math.random() * 10).toFixed(0);
    const cor = "classe" + num;
    const texto = document.createElement("h3");
    texto.className = cor;
    texto.textContent = partes[i];
    divForm.appendChild(texto);
  }
});
