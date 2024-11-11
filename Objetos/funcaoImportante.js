const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${[chave]}: ${[valor]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/10/2001'
})

pessoa.dataNascimento = '01/02/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015 ES6)

const obj1 = {a: 1}
const obj2 = {b: 2}
const obj3 = {c: 3, a: 4}

const objr = Object.assign(obj1, obj2, obj3)
console.log(objr)

Object.freeze(obj1)
obj1.a = 2
console.log(obj1)