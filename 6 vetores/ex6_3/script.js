const form = document.querySelector('form');
const pre = document.querySelector('pre');
const carros = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const modelo = form.inModelo.value;
  const preco = Number(form.inPreco.value);
  carros.push({ modelo, preco });
  form.inModelo.value = '';
  form.inPreco.value = '';
  inModelo.focus();
  form.btListar.dispatchEvent(new Event('click'));
});

form.btListar.addEventListener('click', () => {
  if (carros.length == 0) {
    alert('Não há carros na lista.');
    return;
  }
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador + carro.modelo + ' - R$: ' + carro.preco.toFixed(2) + '\n',
    ''
  );
  pre.textContent = `Lista dos carros cadastrados\n ${'-'.repeat(40)} \n
  ${lista}`;
});

form.btFiltrar.addEventListener('click', () => {
  const maximo = Number(prompt('Qual o valor máximo pretendido?'));
  if (maximo == 0 || isNaN(maximo)) {
    return;
  }
  const carrosFilter = carros.filter(carro => carro.preco <= maximo);
  if (carrosFilter.length == 0) {
    alert(
      'Não há carros disponíveis com preço igual ou inferior ao solicitado.'
    );
    return;
  }
  let lista = '';
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  pre.textContent = `Carros até R$: ${maximo.toFixed(2)}\n ${'-'.repeat(40)}\n
  ${lista}`;
});

form.btSimular.addEventListener('click', () => {
  const desconto = Number(prompt('Taxa de desconto: '));
  if (desconto == 0 || isNaN(desconto)) {
    return;
  }
  const carrosDesc = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto) / 100,
  }));
  let lista = '';
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  pre.textContent = `Carros com desconto: ${desconto}%\n
  ${'-'.repeat(40)}\n${lista}`;
});
