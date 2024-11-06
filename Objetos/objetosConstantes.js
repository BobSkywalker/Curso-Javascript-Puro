// Pessoa -> 123 -> {...}
const pessoa = {nome: 'Jao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

const pessoaConstante = Object.freeze({nome: 'Jao'})
console.log(pessoaConstante)
