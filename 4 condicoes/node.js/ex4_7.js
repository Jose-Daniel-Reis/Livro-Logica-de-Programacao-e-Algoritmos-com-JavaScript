const prompt = require('prompt-sync')();
const pessoas = Number(prompt('N° de pessoas: '));
const peixes = Number(prompt('N° de peixes: '));
let pagar;
if (peixes <= pessoas) {
  pagar = pessoas * 20;
} else {
  pagar = pessoas * 20 + (peixes - pessoas) * 12;
}
console.log(`Valor a ser pago: ${pagar.toFixed(2)}`);
