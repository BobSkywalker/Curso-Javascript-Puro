function Carro(velocidade = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log()   