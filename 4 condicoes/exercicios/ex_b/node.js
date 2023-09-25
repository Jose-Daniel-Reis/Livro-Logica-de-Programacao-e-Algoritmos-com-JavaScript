const prompt = require('prompt-sync')();
const permitida = Number(prompt('Velocidade permitida: '));
const condutor = prompt('Velocidade do condutor: ');

if (condutor > permitida && condutor <= permitida * 1.2) {
  console.log(`Situação: Infração leve`);
} else if (condutor > permitida * 1.2) {
  console.log(`Situação: Infração grave`);
} else {
  console.log(`Situação: Suave na nave`);
}
