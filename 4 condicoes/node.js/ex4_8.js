const prompt = require('prompt-sync')();
const total = Number(prompt('Valor total da compra: '));
const aux = Math.floor(total / 20);
let parcelas;
let valorParcela;
if (aux == 0) {
  parcelas = 1;
} else if (aux > 6) {
  parcelas = 6;
} else {
  parcelas = aux;
}

valorParcela = total / parcelas;

console.log(`Número de parcelas ${parcelas},
Valor da parcela: ${valorParcela}`);
