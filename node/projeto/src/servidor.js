const porta = 3030; // Necessario criar quando crio algo relacionado a web !

const express = require("express");
const app = express();
const bancoDeDados = require('./bancoDeDados')

app.use('/produtos', (req, res, next) => {
  console.log('Middleware 1 ...')
  next()
});

app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
