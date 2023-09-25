const form = document.querySelector('form');
const out1 = document.getElementById('out1');

function validarNome(nomeAluno) {
  if (!nomeAluno.includes(' ')) {
    alert('Nome incompleto!');
  }
}

function obterSobreNome(nomeAluno) {
  const partes = nomeAluno.split(' ');
  const ultimoNome = partes[partes.length - 1].toLowerCase();

  return ultimoNome;
}

function contarVogais(vogais) {
  let soma = 0;

  for (let i = 0; i < vogais.length; i++) {
    if (
      vogais.charAt(i) == 'a' ||
      vogais.charAt(i) == 'e' ||
      vogais.charAt(i) == 'i' ||
      vogais.charAt(i) == 'o' ||
      vogais.charAt(i) == 'u'
    ) {
      soma += 1;
    }
  }
  if (soma < 10) {
    soma = '0' + soma;
  }
  return soma;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value;

  const verifica = validarNome(nome);
  const sobreNome = obterSobreNome(nome);
  const letrasVogais = contarVogais(nome);

  out1.textContent = `${sobreNome}${letrasVogais}`;
});
