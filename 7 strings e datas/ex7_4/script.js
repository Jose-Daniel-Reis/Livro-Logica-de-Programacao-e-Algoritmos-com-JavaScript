const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.inNome.value.trim();

  if (!nome.includes(' ')) {
    alert('Informe o nome completo!');
    return;
  }

  const priEspaco = nome.indexOf(' ');
  const ultEspaco = nome.lastIndexOf(' ');

  const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  h3.textContent = `Crachá: ${cracha}`;
  console.log(cracha);
});
