const prompt = require('prompt-sync')();

const produto = prompt('Digite o nome do produto: ');
const numero = Number(prompt('Digite o número de etiquetas: '));

for (let i = 1; i <= numero / 2; i++) {
  console.log(`${produto.padEnd(29)} ${produto}`);
}
if (numero % 2 == 1) {
  console.log(`${produto}`);
}
