const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

let resposta = '';
let numContas = 0;
let valTotal = 0;

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const descricao = form.inDescricao.value;
  const valor = Number(form.inValor.value);

  numContas++;
  valTotal = valTotal + valor;
  resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n';

  out1.textContent = `${resposta}`;
  out2.textContent = `${numContas} conta(s) - Total R$: ${valTotal.toFixed(2)}`;

  form.inDescricao.value = '';
  form.inValor.value = '';
  form.inDescricao.focus();
});
