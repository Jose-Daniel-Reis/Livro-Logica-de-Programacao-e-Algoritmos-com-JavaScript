const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value;

  const partes = nome.split(' ');

  let email = '';

  const tam = partes.length;

  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);
  }

  email += partes[tam - 1] + '@empresa.com';

  h3.textContent = `E-mail: ${email.toLocaleLowerCase()}`;
});
