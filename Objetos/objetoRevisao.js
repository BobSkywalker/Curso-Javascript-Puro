// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const Fuscao = {
    modelo: 'Fusca',
    valor: 80000,
    propietario: {
        nome: 'Bob',
        idade: '15',
        endereco: {
            logradouro: 'Rua ABC',
            numero: '123'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 49
    }, {
        nome: 'Ana',
        idade: 94
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

Fuscao.propietario.endereco.numero = 1000
Fuscao['propietario']['endereco']['longradouro'] = 'AV Giagnte'
console.log(Fuscao)

delete Fuscao.condutores
delete Fuscao.propietario.endereco
delete Fuscao.calcularValorSeguro

console.log(Fuscao)
console.log(Fuscao.condutores)