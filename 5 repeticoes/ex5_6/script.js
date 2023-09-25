const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const numero = Number(form.inNumero.value);

  let temDivisores = 0;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      temDivisores = 1;
    }
    console.log(temDivisores);
  }
  if (numero > 1 && !temDivisores) {
    h3.textContent = `${numero} é primo.`;
  } else {
    h3.textContent = `${numero} não é primo.`;
  }
  // form.inNumero.value = '';
  // form.inNumero.focus();
});
