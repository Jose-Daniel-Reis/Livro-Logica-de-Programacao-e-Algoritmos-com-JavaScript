const prompt = require('prompt-sync')();

const parcelas = Number(prompt('Número de parcelas: '));

const data = new Date();

for (let i = 0; i < parcelas; i++) {
  data.setMonth(data.getMonth() + 1);

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  console.log(`${i + 1}ª parcela: ${dia}/${mes}/${ano}`);
}
