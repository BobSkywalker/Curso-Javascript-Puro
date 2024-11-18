// Exemplo de como o MAP Funciona

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let indice = 0; indice < this.length; indice++){
        newArray.push(callback(this[indice], indice, this))
    }
    return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "KItLapis", "preco": 34.45 }',
];

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map(apenasPreco);

console.log(resultado);
