const alunos = [
    {nome: 'Joao', Nota: 7.7, bolsista: false},
    {nome: 'Bob', Nota: 9.2, bolsista: true},
    {nome: 'Maria', Nota: 6.5, bolsista: false},
    {nome: 'Jorge', Nota: 7.9, bolsista: true}
]

const resultado = alunos.map(a => a.Nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)