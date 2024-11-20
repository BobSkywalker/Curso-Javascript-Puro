const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //Este modulo tem uma Arrow Function, e para funcionar devo chamar a função no final com ()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)