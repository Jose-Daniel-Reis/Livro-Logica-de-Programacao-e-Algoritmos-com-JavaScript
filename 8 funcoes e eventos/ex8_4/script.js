const form = document.querySelector('form');
const pre = document.querySelector('pre');

const itens = [];

form.rbPizza.addEventListener('click', () => {
  form.inBebida.className = 'oculta';
  form.inPizza.className = 'exibe';
});

form.rbBebida.addEventListener('click', () => {
  form.inPizza.className = 'oculta';
  form.inBebida.className = 'exibe';
});

form.inDetalhes.addEventListener('focus', () => {
  if (form.rbPizza.checked) {
    const pizza = form.inPizza.value;
    const num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4;
    form.inDetalhes.placeholder = `Até ${num} sabores`;
  }
});

form.inDetalhes.addEventListener('blur', () => {
  form.inDetalhes.placeholder = '';
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let produto;
  if (form.rbPizza.checked) {
    const num = form.inPizza.selectedIndex;
    produto = form.inPizza.options[num].text;
  } else {
    const num = form.inBebida.selectedIndex;
    produto = form.inBebida.options[num].text;
  }

  const detalhaes = form.inDetalhes.value;
  itens.push(produto + ' (' + detalhaes + ') ');
  pre.textContent = itens.join('\n');

  form.reset();
  form.rbPizza.dispatchEvent(new Event('click'));
});
