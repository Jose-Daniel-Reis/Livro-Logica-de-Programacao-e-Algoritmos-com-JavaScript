const form = document.querySelector('form');
const outResp1 = document.querySelector('#outResp1');
const outResp2 = document.querySelector('#outResp2');
const outResp3 = document.querySelector('#outResp3');

form.addEventListener('submit', e => {
  const veiculo = form.inVeiculo.value;
  const preco = Number(form.inPreco.value);

  const entrada = preco / 2;
  const parcela = preco / 2 / 12;

  outResp1.textContent = `Promoção: ${veiculo}`;
  outResp2.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
  outResp3.textContent = `+ 12x de R$ ${parcela.toFixed(2)}`;
  e.preventDefault();
});
