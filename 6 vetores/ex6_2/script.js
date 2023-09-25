const form = document.querySelector('form');
const outErros = document.querySelector('#outErros');
const outChances = document.querySelector('#outChances');
const outDica = document.querySelector('#outDica');

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

form.addEventListener('submit', e => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);
  if (numero == sorteado) {
    outDica.textContent = `Parabéns! Número sorteado: ${sorteado}`;
    form.btSubmit.disable = true;
    form.btNovo.className = 'exibe';
  } else {
    if (erros.includes(numero)) {
      alert(`${numero} já foi apostado! Tente outro!`);
    } else {
      erros.push(numero);
      const numErros = erros.length;
      const numChances = chances - numErros;
      outErros.textContent = `${numErros} (${erros.join(', ')})`;
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert('Suas chances acabaram!');
        form.btSubmit.disable = true;
        form.btNovo.className = 'exibe';
        outDica.textContent = `Game Over! Número sorteado: ${sorteado}`;
      } else {
        const dica = numero < sorteado ? 'maior' : 'menor';
        outDica.textContent = `Dica: Tente um número ${dica} e que ${numero}`;
      }
    }
  }
  form.inNumero.value = '';
  form.inNumero.focus();
});
form.btNovo.addEventListener('click', () => {
  location.reload();
});
