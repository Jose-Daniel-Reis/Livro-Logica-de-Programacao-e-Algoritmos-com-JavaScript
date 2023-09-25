const form = document.querySelector('form');
const h3 = document.querySelector('h3');
console.log(null || 'string');
form.addEventListener('submit', e => {
  e.preventDefault();

  const senha = form.inSenha.value;
  const erros = [];

  if (senha.length < 8 || senha > 15) {
    erros.push('A senha deve possuir entre 8 e 15 caracteres.');
  }

  if (senha.match(/[0-9]/g) == null) {
    erros.push('A senha deve possuir pelo menos um valor numérico.');
  }

  if (!senha.match(/[a-z]/g)) {
    erros.push('A senha deve possuir pelo menos uma letra minúscula.');
  }
  if (!senha.match(/[A-Z]/g)) {
    erros.push('A senha deve possuir pelo menos uma letra maiúscula.');
  }
  if (!senha.match(/[\W|_]/g)) {
    erros.push('A senha deve possuir pelo menos um símbolo.');
  }

  if (erros.length == 0) {
    h3.textContent = 'Senha válida';
  } else {
    h3.textContent = `Erro! A senha deve ${erros.join(', ')}`;
  }
  form.inSenha.value = '*'.repeat(senha.length);
});
