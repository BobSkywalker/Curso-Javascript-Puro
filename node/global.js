// console.log(global)

global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Global'
}

Object.freeze(global.MinhaApp)