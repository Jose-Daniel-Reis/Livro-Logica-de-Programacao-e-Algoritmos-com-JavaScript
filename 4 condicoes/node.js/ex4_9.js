const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um valor na casa da centena: '));
if (numero < 100 || numero >= 1000) {
  console.log('Valor inválido!');
  return;
}
const num1 = Math.floor(numero / 100);
const aux = numero % 100;
const num2 = Math.floor(aux / 10);
const num3 = aux % 10;
console.log(`${num3}${num2}${num1}`);
