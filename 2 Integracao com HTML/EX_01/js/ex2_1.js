const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', erst => {
  const nome = form.inNome.value;
  h3.innerHTML = `Olá ${nome}`;
  erst.preventDefault();
});
