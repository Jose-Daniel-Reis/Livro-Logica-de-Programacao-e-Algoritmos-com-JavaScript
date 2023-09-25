const form = document.querySelector('form');
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const valor1 = Number(form.inValor1.value);
  const valor2 = Number(form.inValor2.value);
  const valor3 = Number(form.inValor3.value);

  if (
    valor1 + valor2 < valor3 ||
    valor1 + valor3 < valor2 ||
    valor2 + valor3 < valor1
  ) {
    out1.textContent = 'Os lados não formam um triângulo.';
  } else if (valor1 === valor2 && valor1 === valor3) {
    out1.textContent = 'Os lados podem formar um triângulo.';
    out2.textContent = 'Tipo: equilátero.';
  } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
    out1.textContent = 'Os lados podem formar um triângulo.';
    out2.textContent = 'Tipo: isósceles.';
  } else {
    out1.textContent = 'Os lados podem formar um triângulo.';
    out2.textContent = 'Tipo: escaleno.';
  }
});
