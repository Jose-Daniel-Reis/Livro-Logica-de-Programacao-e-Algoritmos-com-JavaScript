const form = document.querySelector('form');
const pre = document.querySelector('pre');

let atletas = [];

function retornarTracos(texto) {
  let tracos = '';

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) != ' ') {
      tracos += '-';
    } else {
      tracos += ' ';
    }
  }
  return tracos;
}

function categorizarAluno(idade) {
  let categoria = '';

  if (idade < 13) {
    categoria = 'Infantil';
  } else if (idade >= 13 && idade < 18) {
    categoria = 'Juvenil';
  } else {
    categoria = 'Adulto';
  }
  return categoria;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value;
  const idade = form.inIdade.valueAsNumber;

  const out1 = retornarTracos(nome);
  const out2 = categorizarAluno(idade);
  pre.textContent = `${nome}\n ${out1}\n ${out2}`;
});
