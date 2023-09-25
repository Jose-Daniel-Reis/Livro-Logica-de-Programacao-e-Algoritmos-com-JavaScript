const form = document.querySelector('form');
const out = document.getElementById('out');

form.addEventListener('submit', e => {
  e.preventDefault();
  const numero = Number(form.inNumero.value);

  if (numero % 2 === 0) {
    console.log('teste1');
    out.textContent = `${numero} é par.`;
  } else {
    console.log('teste2');
    out.textContent = `${numero} é ímpar.`;
  }
});
