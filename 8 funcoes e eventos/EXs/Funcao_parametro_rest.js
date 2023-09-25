const calcularMedia = (...notas) => {
  const num = notas.length;
  if (num == 0) {
    console.log('Informe pelo menos uma nota.');
    return;
  }

  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }

  const media = soma / num;
  console.log(`Media: ${media.toFixed(1)}`);
};

console.log(calcularMedia(6, 7, 25));
