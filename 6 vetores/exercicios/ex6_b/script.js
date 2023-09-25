const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

const numeros = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const numero = form.inNumero.valueAsNumber;

  if (numeros.includes(numero)) {
    alert('Esse número já foi digitado, digite outro.');
  } else {
    numeros.push(numero);
  }
  form.reset();
  form.inNumero.focus();
  out1.textContent = `Números: ${numeros.join(', ')}`;
});

form.btVerificar.addEventListener('click', () => {
  const numeros2 = numeros.slice();
  numeros2.sort((a, b) => a - b);
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] != numeros2[i]) {
      out2.textContent = 'Atenção! Os números estão fora de ordem.';
    } else {
      out2.textContent = 'Os números estão em ordem.';
    }
  }
});
