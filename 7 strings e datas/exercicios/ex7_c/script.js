const form = document.querySelector('form');
const out1 = document.querySelector('#out1');
const out2 = document.querySelector('#out2');

form.addEventListener('submit', e => {
  e.preventDefault(e);

  const data = form.inData.value;
  const valor = form.inValor.valueAsNumber;
  const prazo = new Date();

  const partes = data.split('-');
  prazo.getDate(Number(partes[2]));
  prazo.getMonth(Number(partes[1]) + 1);
  prazo.getFullYear(Number(partes[0]));

  let desconto = valor * 0.8;

  out1.textContent = `Data limite para pagamento com desconto: ${prazo}`;
  out2.textContent = `Valor com desconto R$: ${desconto}`;
});

const amanha = new Date();
const dia = amanha.getDate();
amanha.setFullYear(dia + 1);
console.log(amanha);
