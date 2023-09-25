const form = document.querySelector('form');
const pre = document.querySelector('pre');

const listaClubes = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const clube = form.inClube.value;
  listaClubes.push(clube);

  form.reset();
  form.inClube.focus();
  form.btListar.dispatchEvent(new Event('click'));
});

form.btListar.addEventListener('click', () => {
  if (listaClubes.length == 0) {
    alert('Não há clubes na lista');
    return;
  }
  let lista = [];
  for (const clube of listaClubes) {
    lista += clube + '\n';
  }
  pre.textContent = lista;
});

form.btTabela.addEventListener('click', () => {
  if (listaClubes.length % 2 != 0) {
    alert('O número de clubes deve ser par.');
    return;
  }
  let lista2 = [];
  for (
    let i = 0, j = listaClubes.length - 1;
    i < listaClubes.length / 2, j >= listaClubes.length / 2;
    i++, j--
  ) {
    lista2 += listaClubes[i] + ' x ' + listaClubes[j] + '\n';
  }
  pre.textContent = lista2;
});
