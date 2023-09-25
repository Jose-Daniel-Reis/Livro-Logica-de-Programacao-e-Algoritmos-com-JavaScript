const form = document.querySelector('form');
const imgClube = document.querySelector('#imgClube');
const divTitulo = document.querySelector('#divTitulo');

const trocarClube = () => {
  let clube;

  if (form.rbCruzeiro.checked) {
    clube = 'Cruzeiro';
  } else if (form.rbAtletico.checked) {
    clube = 'Atletico';
  } else {
    clube = 'America';
  }

  divTitulo.className = `row cores-${clube}`;

  imgClube.src = `img/${clube.toLowerCase()}.png`;
  imgClube.className = 'img-fluid';
  imgClube.alt = `Simbolo do ${clube}`;

  localStorage.setItem('clube', clube);
};

form.rbCruzeiro.addEventListener('change', trocarClube);
form.rbAtletico.addEventListener('change', trocarClube);
form.rbAmerica.addEventListener('change', trocarClube);

const verificarClube = () => {
  if (localStorage.getItem('clube')) {
    const clube = localStorage.getItem('clube');

    if (clube == 'Cruzeiro') {
      form.rbCruzeiro.checked = true;
    } else if (clube == 'Atletico') {
      form.rbAtletico.checked = true;
    } else {
      form.rbAmerica.checked = true;
    }
    trocarClube();
  }
};

window.addEventListener('load', verificarClube);
