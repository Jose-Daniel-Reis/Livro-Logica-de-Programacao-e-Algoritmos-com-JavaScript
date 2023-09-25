const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

form.addEventListener('submit', e => {
  const produto = form.inProduto.value;
  const preco = Number(form.inPreco.value);

  const duasUnidades = 2 * preco;
  const promocao = preco * 0.5;
  const valorFinal = duasUnidades + promocao;

  out1.textContent = `${produto} - Promoção: Leve 3 por R$: ${valorFinal}`;
  out2.textContent = ` o 3° produto custa apenas R$: ${promocao}`;
  e.preventDefault();
});
