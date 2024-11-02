const notas = [7.7, 4.4, 6.4, 2.1, 9.0, 10, 6.2, 5.9]

// Sem callback

let notasBaixar = []
for (let indice in notas) {
    if(notas[indice] < 7){
        notasBaixar.push(notas[indice])
    }
}

console.log(notasBaixar)

// Com callback

notasBaixar = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixar)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)