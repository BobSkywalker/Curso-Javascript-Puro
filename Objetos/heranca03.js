const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
filha1.corCabelo = 'Preto'

console.log(filha1)

const filha2 = Object.create(pai, {
    nome:'Bia',
    corCabelo: 'Marrom'
})

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)