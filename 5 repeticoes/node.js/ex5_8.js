const prompt = require('prompt-sync')();
console.log('Programa Anos da Copa do Mundo. Digite 0 para sair!');
console.log('----------------------------------------------');
do {
  const ano = Number(prompt('Digite um ano: '));

  if (ano == 0) {
    break;
  } else if (ano == 1942 || ano == 1946) {
    console.log(`Não houve copa em ${ano}`);
  } else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`Sim! Houve copa em ${ano}`);
  } else {
    console.log(`Não... ${ano} não houve copa`);
  }
} while (true);
