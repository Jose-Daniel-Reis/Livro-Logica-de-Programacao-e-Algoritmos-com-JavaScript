const form = document.querySelector('form');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

form.addEventListener('submit', e => {
  const titulo = form.inTitulo.value;
  const duracao = Number(form.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  h3.textContent = titulo;
  h4.textContent = `A duração do filme é de ${horas} horas e ${minutos} minutos`;
  e.preventDefault();
});
