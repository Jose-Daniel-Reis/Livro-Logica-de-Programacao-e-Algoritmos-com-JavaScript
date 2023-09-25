const prompt = require('prompt-sync')();
const pesoRacao = Number(prompt('Peso de ração em kg: '));
const pesoDiarioRacao = Number(prompt('Peso diário de ração em g: '));
const numeroDeDias = Math.floor((pesoRacao * 1000) / pesoDiarioRacao);
const sobra = (pesoRacao * 1000) % pesoDiarioRacao;
console.log(`Duração: ${numeroDeDias}`);
console.log(`Sobra: ${sobra}gramas`);
