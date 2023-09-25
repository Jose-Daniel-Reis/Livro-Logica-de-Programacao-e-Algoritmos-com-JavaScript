const mostraHora = () => {
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
};

setInterval(mostraHora, 5000);

// .padStart(2, 0) coloca um zero na frente de numeros com apenas um algarismo

setInterval(() => {
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}, 500);
