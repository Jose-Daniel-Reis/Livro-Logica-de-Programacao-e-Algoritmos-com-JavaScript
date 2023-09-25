const form = document.querySelector('form');
const out = document.querySelector('#out');

form.addEventListener('submit', e => {
  const valor = Number(form.inValor.value);
  const tempo = Number(form.inTempo.value);

  const calcPreco = Math.ceil(tempo / 15) * valor;

  out.textContent = `Valor a pagar: ${calcPreco}`;
  e.preventDefault();
});
