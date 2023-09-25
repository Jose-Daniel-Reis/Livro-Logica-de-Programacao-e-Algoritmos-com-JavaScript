const prompt = require('prompt-sync')();
console.log(
  'Informe o nome e a nota dos alunos, digite fim no nome para encerrar a lista.'
);
const alunos = [];
do {
  const nome = prompt('Digite o nome do aluno: ');
  if (nome == 'fim') {
    break;
  }
  const nota = Number(prompt('Digite a nota do aluno: '));
  alunos.push({ nome, nota });
  console.log('Aluno cadastrado!');
} while (true);
console.log('-'.repeat(40));

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);
console.log(`Maior nota: ${maior}`);

if (maior >= 7) {
  const destaques = alunos.filter(aluno => aluno.nota == maior);
  for (const destaque of destaques) {
    console.log(`- ${destaque.nome}`);
  }
} else {
  console.log('Não há destaques na turma');
}
