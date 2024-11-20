require('./global')

console.log(MinhaApp.saudacao()) 
// Use global em certas situações de exeção
console.log(global.MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // Cuidado com o ESCOPO GLOBAL
console.log(MinhaApp.nome)