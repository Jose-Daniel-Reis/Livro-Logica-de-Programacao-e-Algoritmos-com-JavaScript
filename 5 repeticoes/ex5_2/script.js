const form = document.querySelector('form');
const pre = document.querySelector('h3');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const numero = Number(form.inNumero.value);
  let resposta = `Entre o ${numero} e 1: `;

  for (let i = numero; i > 1; i--) {
    resposta = resposta + i + ', ';
  }
  pre.textContent = resposta + '1.';
});
