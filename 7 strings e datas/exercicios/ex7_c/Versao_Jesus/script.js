const form = document.querySelector("form");
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);

  const data = new Date(form.inData.value);
  const valor = form.inValor.valueAsNumber;

  // Variavel para receber a data somada aos dias
  const dataNova = new Date();
  // Variavel recebendo a data somada aos 90 dias
  dataNova.setDate(data.getUTCDate() + 90);
  
  // Recupera o 0 na frente do mês e dia para que não fique como nesse exemplo (7/3/2023)
  let dia = String(dataNova.getUTCDate()).padStart(2, "0");
  let mes = String(dataNova.getUTCMonth() + 1).padStart(2, "0");
  let ano = dataNova.getUTCFullYear();

  const fullDate = dia + "/" + mes + "/" + ano;

  let desconto = valor * 0.8;

  out1.textContent = `Data limite para pagamento com desconto: ${fullDate}`;
  out2.textContent = `Valor com desconto R$: ${desconto}`;
});
