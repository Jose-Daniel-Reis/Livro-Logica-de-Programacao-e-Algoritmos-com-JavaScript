const prompt = require('prompt-sync')();
const bairro = prompt('Bairro de Entrega: ');
let texaEntrega;
switch (bairro) {
  case 'Centro':
    texaEntrega = 5.0;
    break;
  case 'Fragata':
    texaEntrega = 7.0;
    break;
  case 'Três Vendas':
    texaEntrega = 7.0;
    break;
  case 'Laranjal':
    texaEntrega = 10.0;
    break;

  default:
    texaEntrega = 8.0;
    break;
}
alert(`Taxa de entrega: ${texaEntrega.toFixed(2)}`);
