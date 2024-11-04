console.log(soma(2, 6))
// console.log(sub(5, 2)) / Vai dar erro
// console.log(mult(5, 6)) / Erro tambem

// function declaration
function soma(x, y) {
    return x + y
}


// function expresion
const subtracao = function (x, y) {
    return x - y
}

console.log(subtracao(5, 2))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(5, 6))