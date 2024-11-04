const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()

function executar() {
    const valor = 'Local'
    minhaFuncao()
}

executar()