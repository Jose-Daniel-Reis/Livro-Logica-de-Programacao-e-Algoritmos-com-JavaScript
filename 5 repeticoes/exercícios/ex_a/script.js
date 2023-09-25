const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const fruta = form.inFruta.value;
  const numero = Number(form.inNumero.value);
  let resposta = '';
  for (let i = 1; i < numero; i++) {
    resposta = resposta + `${fruta}*`;
  }

  h3.textContent = resposta + `${fruta}`;
});
