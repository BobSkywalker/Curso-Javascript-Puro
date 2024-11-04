function criarProduto(nome, preço) {
    return { 
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook Positivo', 6199.49))
console.log(criarProduto('Notebook Dell', 2599.49))
console.log(criarProduto('Notebook Acer', 3099.49))