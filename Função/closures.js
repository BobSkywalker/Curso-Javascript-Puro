// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função

// Contexto lexico em ação

const normal = 'Global'

function fora() {
    const normal = 'Local'
    function dentro() {
        return normal
    }
    return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao())