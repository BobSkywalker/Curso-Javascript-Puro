const valores = [1, 2, 3, 4, 5]

console.log(valores[2], valores[1], valores[4])
console.log(valores[5]) // Vai dar Undefined ou Empty item pois o elemento 5 não tem um valor 

valores[6] = 10
console.log(valores[6])
console.log(valores.length)

valores.push({id: 3}, false, null, 'Teste')
console.log(valores) 

console.log(valores.pop())
delete valores[2]
console.log(valores)

console.log(typeof valores)