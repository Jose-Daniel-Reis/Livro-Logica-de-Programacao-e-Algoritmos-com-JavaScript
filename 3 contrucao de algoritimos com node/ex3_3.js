const prompt = require('prompt-sync')();
const salario = Number(prompt('Salário inicial R$: '));
const tempoMeses = Number(prompt('Tempo de trabalho (Meses): '));
const tempoAnos = tempoMeses / 12;
const quadrienios = Math.floor(tempoAnos / 4);
const reajusteSalarial = (quadrienios / 100) * salario + salario;
console.log(`Quadriênios ${quadrienios}`);
console.log(`Salário final R$: ${reajusteSalarial.toFixed(2)}`);
