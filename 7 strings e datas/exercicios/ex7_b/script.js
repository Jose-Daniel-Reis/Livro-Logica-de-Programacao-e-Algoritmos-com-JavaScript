const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  e.preventDefault();

  const frase = form.inFrase.value;

  // for (let i = 0, j = frase.length - 1; i < frase.length; i++, j--) {
  //   if (frase[i] != frase[j]) {
  //     h3.textContent = `${frase.toUpperCase()} não é um palindromo.`;
  //   } else {
  //     h3.textContent = `${frase.toUpperCase()} é um palíndromo.`;
  //   }
  // }

  for (let i = 0, j = frase.length - 1; i < frase.length; i++, j--) {
    if (frase.charAt(i) != frase.charAt(j)) {
      h3.textContent = `${frase.toUpperCase()} não é um palindromo.`;
    } else {
      h3.textContent = `${frase.toUpperCase()} é um palíndromo.`;
    }
  }
});
