const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');
const out3 = document.querySelector('#out3');

form.addEventListener('submit', e => {
  e.preventDefault();

  const modelo = form.inModelo.value;
  const ano = Number(form.inAno.value);
  const preco = Number(form.inPreco.value);

  const classificacao = classificarVeiculo(ano);
  const entrada = calcularEntrada(preco, classificacao);
  const parcela = (preco - entrada) / 10;

  out1.textContent = modelo + ' - ' + classificacao;
  out2.textContent = `entrada R$: ${entrada}`;
  out3.textContent = `+10 de R$: ${parcela}`;
});

const classificarVeiculo = ano => {
  const anoAtual = new Date().getFullYear();

  let classif;

  if (ano == anoAtual) {
    classif = 'Novo';
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = 'Seminovo';
  } else {
    classif = 'Usado';
  }
  return classif;
};

const calcularEntrada = (valor, status) => {
  status == 'Novo' ? valor * 0.5 : valor * 0.3;
};
