const form = document.querySelector('form');
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  let troco;
  const valor = Number(form.inValor.value);
  if (valor < 1.0) {
    troco = 1.0 - valor;
    out1.textContent = `Tempo = 30`;
    out2.textContent = `valor insuficiente, faltam ${troco.toFixed(2)}`;
  } else if (valor >= 1.0 && valor < 1.75) {
    troco = valor - 1.0;
    out1.textContent = `Tempo = 30`;
    out2.textContent = `Troco R$ ${troco.toFixed(2)}`;
  } else if (valor >= 1.75 && valor < 3.0) {
    troco = valor - 1.75;
    out1.textContent = `Tempo = 60`;
    out2.textContent = `Troco R$ ${troco.toFixed(2)}`;
  } else if (valor >= 3.0) {
    troco = valor - 3.0;
    out1.textContent = `Tempo = 120`;
    out2.textContent = `Troco R$ ${troco.toFixed(2)}`;
  }
});
