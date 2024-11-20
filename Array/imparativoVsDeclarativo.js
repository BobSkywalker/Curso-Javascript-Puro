const alunos = [
    {nome: 'joao', nota: 7.9},
    {nome: 'Maria', nota: 9.9}
]

// Imperativo

// Como se fosse uma forma de ensinar a alguem 

let total1 = 0
for(let indice = 0; indice < alunos.length; indice++){
    total1 += alunos[indice].nota
}
console.log(total1 / alunos.length)

// Declarativa

// Declarativa tem um melhor reuso doque foi criado

const getNota = aluno => aluno.nota // Pode ser reusada
const soma = (total, atual) => total + atual // Agrega valores
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)