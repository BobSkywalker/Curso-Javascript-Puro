const aprovados = ['Agata', 'Lorenzo', 'Daniel', 'Marcos']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)