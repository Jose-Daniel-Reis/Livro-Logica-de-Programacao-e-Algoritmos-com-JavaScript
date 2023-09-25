const prompt = require('prompt-sync')();
const valor1 = Number(prompt('Didite o primeiro valor: '));
const valor2 = Number(prompt('Didite o segundo valor: '));
const valor3 = Number(prompt('Didite o terceiro valor: '));

if (
  valor1 + valor2 < valor3 ||
  valor1 + valor3 < valor2 ||
  valor2 + valor3 < valor1
) {
  console.log('Os lados não formam um triângulo.');
} else if (valor1 === valor2 && valor1 === valor3) {
  console.log('Os lados podem formar um triângulo.');
  console.log('Tipo: equilátero.');
} else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
  console.log('Os lados podem formar um triângulo.');
  console.log('Tipo: isósceles.');
} else {
  console.log('Os lados podem formar um triângulo.');
  console.log('Tipo: escaleno.');
}
