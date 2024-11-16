function aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Ate mais', 456)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Bemvindo', 123)
const aula4 = novo(aula, 'atemais', 456)

console.log(aula3, aula4)