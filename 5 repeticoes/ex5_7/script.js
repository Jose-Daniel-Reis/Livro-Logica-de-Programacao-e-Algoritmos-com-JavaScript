const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const numero = Number(form.inNumero.value);
  let estrelas = '';
  for (let i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + '*';
    } else {
      estrelas = estrelas + '-';
    }
  }
  h3.textContent = estrelas;
});
