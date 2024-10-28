const notas = [6.7, 7, 3, 9, 7.3, 8.4, 5.3, 2.4];

for (i in notas) {
  console.log(i, notas[i]);
}


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

let xingamentosParaOVitor = ['Idiota', 'Estupido', 'ABUBABABA']

for(xingamentos in xingamentosParaOVitor){
  console.log(`${xingamentos} = ${xingamentosParaOVitor[xingamentos]}`)
}