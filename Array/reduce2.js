const alunos = [
  { nome: "Joao", Nota: 7.7, bolsista: false },
  { nome: "Bob", Nota: 9.2, bolsista: true },
  { nome: "Maria", Nota: 6.5, bolsista: false },
  { nome: "Jorge", Nota: 7.9, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))