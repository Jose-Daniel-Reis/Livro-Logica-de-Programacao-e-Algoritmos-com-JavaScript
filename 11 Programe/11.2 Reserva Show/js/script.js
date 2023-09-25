const form = document.querySelector("form");
const divPalco = document.querySelector("#divPalco");

const poltronas = 384;

const reservadas = [];

window.addEventListener("load", () => {
  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  for (let i = 1; i <= poltronas; i++) {
    const figure = document.createElement("figure");
    const imgStatus = document.createElement("img");

    imgStatus.src = ocupadas.includes(i.toString())
      ? "img/ocupada.png"
      : "img/disponivel.png";
    imgStatus.className = "poltrona";
    const figureCap = document.createElement("figcaption");

    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

    const num = document.createTextNode(`[${zeros}${i}]`);

    figureCap.appendChild(num);
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    if (i % 24 == 12) figure.style.marginRight = "60px";

    divPalco.appendChild(figure);

    i % 48 == 0 && divPalco.appendChild(document.createElement("br"));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const poltrona = form.inPoltrona.valueAsNumber;

  if (poltrona > poltronas) {
    alert("Informe um número válido de poltrona.");
    form.inPoltrona.value = "";
    form.inPoltrona.focus();
    return;
  }

  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  if (ocupadas.includes(poltrona.toString())) {
    alert(`Poltrona ${poltrona} ja está ocupada...`);
    form.inPoltrona.value = "";
    form.inPoltrona.focus();
    return;
  }

  const imgPoltrona = divPalco.querySelectorAll("img")[poltrona - 1];

  imgPoltrona.src = "./img/reservada.png";

  reservadas.push(poltrona);

  form.inPoltrona.value = "";
  form.inPoltrona.focus();
});

form.btConfirtmar.addEventListener("click", () => {
  if (reservadas.length == 0) {
    alert("Não há poltronas reservadas.");
    form.inPoltrona.focus();
    return;
  }

  const ocupadas = localStorage.getItem("teatroOCupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  for (let i = reservadas.length - 1; i >= 0; i--) {
    ocupadas.push(reservadas[i]);

    const imgPoltrona = divPalco.querySelectorAll("img")[reservadas[i] - 1];

    imgPoltrona.src = "./img/ocupada.png";

    reservadas.pop();
  }
  localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});
