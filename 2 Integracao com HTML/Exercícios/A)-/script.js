const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

form.addEventListener('submit', e => {
  const medicamento = form.inMedicamento.value;
  const preco = Number(form.inPreco.value);
  const desconto = Math.floor(2 * preco);

  out1.textContent = `Promoção de ${medicamento}`;
  out2.textContent = `Leve 2 por apenas R$: ${desconto}`;
  e.preventDefault();
});
