const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  e.preventDefault();
  let pares = [];
  let impares = [];
  const mensagem = form.inMensagem.value;
  const copia = mensagem.slice();

  for (let i = 0; i < copia.length; i++) {
    if (i % 2 == 0) {
      pares.push(copia[i]);
    } else {
      impares.push(copia[i]);
    }
  }
  const criptografia = pares.join('') + impares.join('');
  h3.textContent = criptografia;
});

form.btDescrip.addEventListener('click', () => {
  const mensagem = form.inMensagem.value;

  h3.textContent = mensagem;
});
