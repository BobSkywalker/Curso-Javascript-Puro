// Object.preventeextensions
const produto = Object.preventExtensions({
    nome: 'Omo',
    tipo: 'Sabao',
    preco: 1.99
})

console.log('extensivel', Object.isExtensible(produto))

produto.nome = 'borracha'

console.log(produto)

// Object.seal

const pessoa = {nome: 'julia', idade: 25}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'oa'
delete pessoa.nome
pessoa.idade = 23

console.log(pessoa)

// Object.freeze = selado + valores constantes