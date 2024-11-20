Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let indicie = 1; indicie < this.length; indicie++){
        acumulador = callback(acumulador, this[indicie], indicie, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce2(soma))