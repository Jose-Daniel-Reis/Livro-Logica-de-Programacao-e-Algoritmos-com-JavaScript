const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  const numero = Number(form.inNumero.value);
  const raiz = Math.sqrt(numero, 2);
  e.preventDefault();
  if (Number.isInteger(raiz)) {
    h3.textContent = `Raiz quadrada de ${numero} é ${raiz}`;
  } else {
    h3.textContent = `${numero} não possui raiz quadrada.`;
  }
});
