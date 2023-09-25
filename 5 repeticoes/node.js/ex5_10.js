const prompt = require('prompt-sync')();
const valor = Number(prompt('Digite o valor total da compra: '));
const parcelas = Number(prompt('Digite o número desejado de parcelas: '));

const valorParcela = Math.floor(valor / parcelas);
const valorUltimaParcela = valorParcela + (valor % parcelas);

for (let i = 1; i < parcelas; i++) {
  console.log(`Valor parcela ${i} R$: ${valorParcela}`);
}

console.log(`Valor última parcela R$: ${valorUltimaParcela}`);
