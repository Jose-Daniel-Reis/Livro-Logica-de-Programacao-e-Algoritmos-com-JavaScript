const prompt = require('prompt-sync')();
const valor = Number(prompt('Valor: '));

let troco;
if (valor < 1.0) {
  troco = 1.0 - valor;
  console.log(`Tempo = 30`);
  console.log(`valor insuficiente, faltam ${troco.toFixed(2)}`);
} else if (valor >= 1.0 && valor < 1.75) {
  troco = valor - 1.0;
  console.log(`Tempo = 30`);
  console.log(`Troco R$ ${troco.toFixed(2)}`);
} else if (valor >= 1.75 && valor < 3.0) {
  troco = valor - 1.75;
  console.log(`Tempo = 60`);
  console.log(`Troco R$ ${troco.toFixed(2)}`);
} else if (valor >= 3.0) {
  troco = valor - 3.0;
  console.log(`Tempo = 120`);
  console.log(`Troco R$ ${troco.toFixed(2)}`);
}
