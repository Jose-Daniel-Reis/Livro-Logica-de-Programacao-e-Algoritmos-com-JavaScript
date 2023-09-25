const form = document.querySelector('form');
const span = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  const fruta = form.inFruta.value.toUpperCase();

  let resposta = '';

  for (const letra of fruta) {
    if (letra == fruta.charAt(0)) {
      resposta += fruta.charAt(0);
    } else {
      resposta += '_';
    }
  }
  span.textContent = resposta;
  form.inFruta.value = '*'.repeat(fruta.length);
});
