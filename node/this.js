console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // Fora de uma func aponta pra exports

function logThis(){
    console.log('Dentro de uma função ....')
    console.log(this === exports) // Dentro da func nao aponta pra exports
    console.log(this === module.exports) // Falso tamem
    console.log(this === global) // Dentro de uma func o this APONTA para o GLOBAL

    this.perigo = '....' // CUIDADO nesse caso o perigo esta indo para o escopo global, this === global em uma func
}

logThis()