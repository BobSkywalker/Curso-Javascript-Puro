// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 5999, 0.3)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return(salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Jao', 1200, 4)
const f2 = criarFuncionario('Mary', 1400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON.info)