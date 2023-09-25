const form = document.querySelector('form');
const out = document.getElementById('out');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const permitida = Number(form.inPermitida.value);
  const condutor = Number(form.inCondutor.value);

  if (condutor > permitida && condutor <= permitida * 1.2) {
    out.textContent = `Situação: Infração leve`;
  } else if (condutor > permitida * 1.2) {
    out.textContent = `Situação: Infração grave`;
  } else {
    out.textContent = `Situação: Suave na nave`;
  }
});
