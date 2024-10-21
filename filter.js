const numeros = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 18]
const result = numeros.filter(divisao)

function divisao(numeros) {
   if (numeros % 2 === 0){
    return true
   }
}
console.log(result)