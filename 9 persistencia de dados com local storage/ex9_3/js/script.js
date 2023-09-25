const form = document.querySelector('form');
const pre = document.querySelector('pre');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value;
  const peso = Number(form.inPeso.value);

  if (verApostaExistente(peso)) {
    alert('Alguém já apostou esse valor, tente outro.');
    form.inPeso.focus();
    return;
  }

  if (localStorage.getItem('melanciaNome')) {
    const melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome;
    const melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso;
    localStorage.setItem('melanciaNome', melanciaNome);
    localStorage.setItem('melanciaPeso', melanciaPeso);
  } else {
    localStorage.setItem('melanciaNome', nome);
    localStorage.setItem('melanciaPeso', peso);
  }

  mostrarApostas();
  form.reset();
  form.inNome.focus();
});

const verApostaExistente = peso => {
  if (localStorage.getItem('melanciaPeso')) {
    const pesos = localStorage.getItem('melanciaPeso').split(';');
    return pesos.includes(peso.toString());
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  if (!localStorage.getItem('melanciaNome')) {
    pre.textContent = '';
    return;
  }

  const nomes = localStorage.getItem('melanciaNome').split(';');
  const pesos = localStorage.getItem('melanciaPeso').split(';');

  let linhas = '';

  for (let i = 0; i < nomes.length; i++) {
    linhas += nomes[i] + '-' + pesos[i] + 'g \n';
  }

  pre.textContent = linhas;
};

window.addEventListener('load', mostrarApostas);

form.btVencedor.addEventListener('click', () => {
  if (!localStorage.getItem('melanciaNome')) {
    alert('Não há apostas cadastradas.');
    return;
  }
  const pesoCorreto = Number(prompt('Qual o peso correto da melancia?'));

  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  const nomes = localStorage.getItem('melanciaNome').split(';');
  const pesos = localStorage.getItem('melanciaPeso').split(';');

  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);

  for (let i = 0; i < nomes.length; i++) {
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    const diAposta = Math.abs(Number(pesos[i] - pesoCorreto));

    if (diAposta < difVencedor) {
      vencedorNome = nomes[i];
      vencedorPeso = Number(pesos[i]);
    }
  }

  let mensagem = 'Resultado - Peso Correto: ' + pesoCorreto + 'g';
  mensagem += '\n ----------------------------------';
  mensagem += '\nVencedor: ' + vencedorNome;
  mensagem += '\nAposta: ' + vencedorPeso + 'g';
  alert(mensagem);
});

form.btLimpar.addEventListener('click', () => {
  if (confirm('Confirma que deseja a exclusão de todas as apostas?')) {
    localStorage.removeItem('melanciaNome');
    localStorage.removeItem('melanciaPeso');
    mostrarApostas();
  }
});
