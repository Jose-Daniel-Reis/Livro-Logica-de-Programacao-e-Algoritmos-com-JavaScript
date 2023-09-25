const form = document.querySelector('form');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = form.inNome.value;
  const nota1 = Number(form.inNota1.value);
  const nota2 = Number(form.inNota2.value);

  const mediaNotas = (nota1 + nota2) / 2;
  h3.textContent = `Média das Notas ${mediaNotas}`;
  if (mediaNotas < 4) {
    h4.textContent = `Ops ${nome}, você foi reprovado.`;
    h4.style.color = 'red';
  } else if (mediaNotas >= 4 && mediaNotas < 7) {
    h4.textContent = `Ops ${nome}, você está de exame especial.`;
    h4.style.color = 'green';
  } else {
    h4.textContent = `Parabéns ${nome}, você foi aprovado!`;
    h4.style.color = 'blue';
  }
});
