const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');
const out3 = document.querySelector('#out3');

form.addEventListener('submit', e => {
  e.preventDefault();
  const saque = Number(form.inSaque.value);
  if (saque % 10 != 0) {
    alert('Valor inválido. Notas disponíveis : 10, 50 e 100');
    form.inSaque.focus();
    return;
  }
  const notas100 = Math.floor(saque / 100);
  let resto = saque % 100;
  const notas50 = Math.floor(resto / 50);
  resto = resto % 50;
  const notas10 = Math.floor(resto / 10);

  if (notas100 > 0) {
    out1.textContent = `Notas de 100: ${notas100}`;
  }
  if (notas50 > 0) {
    out2.textContent = `Notas de 50: ${notas50}`;
  }
  if (notas10 > 0) {
    out3.textContent = `Notas de 10: ${notas10}`;
  }
});
