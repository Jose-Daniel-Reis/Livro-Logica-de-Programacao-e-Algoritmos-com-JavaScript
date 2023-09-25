const form = document.querySelector('form');
const span = document.querySelector('span');
const pre = document.querySelector('pre');

const pacientes = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = form.inPaciente.value;
  pacientes.push(nome);
  let lista = '';
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  pre.textContent = lista;
  form.inPaciente.value = '';
  form.inPaciente.focus();
});

form.btUrgencia.addEventListener('click', () => {
  if (!form.checkValidity()) {
    alert('Informe o nome do paciente que será atendido com urgência.');
    form.inPaciente.focus();
    return;
  }
  const nome = form.inPaciente.value;
  pacientes.unshift(nome);
  let lista = '';
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  pre.textContent = lista;
  form.inPaciente.value = '';
  form.inPaciente.focus();
});

form.btAtender.addEventListener('click', () => {
  if (pacientes.length == 0) {
    alert('Não há pacientes na fila.');
    form.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift();
  span.textContent = atender;
  let lista = '';
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  pre.textContent = lista;
});
