const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

form.rbSim.addEventListener('click', () => {
  form.inPlanos.className = 'exibe';
});
form.rbNao.addEventListener('click', () => {
  form.inPlanos.className = 'oculta';
});

function calcularDesconto(numero, taxa) {
  const resultado = numero * (taxa / 100);
  return resultado;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const valor = form.inValor.valueAsNumber;
  let plano;

  if (form.rbNao.checked) {
    plano = 10;
  } else {
    const produto = form.inPlanos.value;
    plano = produto == 'amigo' ? 20 : 50;
  }

  const final = valor - calcularDesconto(valor, plano);
  out1.textContent = `Valor do desconto: ${calcularDesconto(valor, plano)}`;
  out2.textContent = `Valor a pagar R$: ${final}`;
});
