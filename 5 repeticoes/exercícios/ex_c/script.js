const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const numero = Number(form.inNumero.value);
  let somaDivisor = 0;
  let resposta = '';
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i == 0) {
      somaDivisor = somaDivisor + i;
      resposta = resposta + i + ', ';
    }
  }
  out1.textContent = `Divisores de ${numero}: ${resposta}  soma: ${somaDivisor}`;

  if (somaDivisor == numero) {
    out2.textContent = `${numero} é um número perfeito.`;
  } else {
    out2.textContent = `${numero} é um número imperfeito.`;
  }
});
