const form = document.querySelector('form');
const pre = document.querySelector('pre');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const numero = Number(form.inNumero.value);
  const anos = Number(form.inAno.value);
  let nTotal = numero;
  let resposta = '';
  for (i = 1; i <= anos; i++) {
    resposta = resposta + i + '° Ano: ' + nTotal + 'chinchilas' + '\n';
    nTotal = nTotal * 3;
  }
  pre.textContent = resposta;
});
