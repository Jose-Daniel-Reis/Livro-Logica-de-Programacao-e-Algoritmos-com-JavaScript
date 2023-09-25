const form = document.querySelector('form');
const pre = document.querySelector('pre');

const candidatos = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value;
  const nota = form.inAcertos.valueAsNumber;

  candidatos.push({ nome, nota });

  form.reset();
  form.inNome.focus();
  form.btListar.dispatchEvent(new Event('click'));
  console.log(candidatos);
});

form.btListar.addEventListener('click', () => {
  const lista = candidatos.reduce(
    (aux, candidato) =>
      aux + candidato.nome + ' - ' + candidato.nota + ' acertos' + '\n',
    ''
  );
  pre.textContent = lista;
});

form.btAprovados.addEventListener('click', () => {
  const notaCorte = Number(prompt('Digite a nota de corte dos candidatos: '));
  let aprovados = '';
  const lista2 = candidatos.filter(aux => aux.nota >= notaCorte);

  lista2.sort((a, b) => b.nota - a.nota);

  for (const candidato of lista2) {
    aprovados += `${candidato.nome} - ${candidato.nota} acertos\n`;
  }

  pre.textContent = aprovados;
});
