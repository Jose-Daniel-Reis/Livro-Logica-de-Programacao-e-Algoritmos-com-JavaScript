const prompt = require('prompt-sync')();
console.log('Informe o valor do saque ou 0 para sair.');
const saques = [];
do {
  const valor = Number(prompt('Digite o valor a ser sacado:'));
  if (valor == 0) {
    break;
  }
  saques.push(valor);
  if (valor % 10 == 0) {
    console.log('Saque realizado com sucesso.');
  } else {
    console.log('Valor inválido. Apenas multiplos de 10.');
  }
} while (true);

const saquesValidos = saques.filter(saque => saque % 10 == 0);
for (saque of saquesValidos) {
  console.log(`${saque}`);
}
const somaSaques = saquesValidos.reduce((soma, saque) => soma + saque, 0);
console.log(`Valor total dos saques: R$ ${somaSaques}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`N° de tentativas de saques inválidos: ${saquesInvalidos}`);
