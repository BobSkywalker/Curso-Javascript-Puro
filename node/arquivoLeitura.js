const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... = menos interessante
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... = mais interessante
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) // Transforma uma string em um objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})