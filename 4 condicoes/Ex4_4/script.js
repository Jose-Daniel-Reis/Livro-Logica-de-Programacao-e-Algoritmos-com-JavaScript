const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  e.preventDefault();
  const horaBrasil = Number(form.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5;
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  h3.textContent = `Hora na França ${horaFranca.toFixed(2)}`;
});
