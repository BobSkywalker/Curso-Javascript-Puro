// Game RPG

class heroi {
  constructor(vida, dano) {
    this.vida = vida
    this.dano = dano
  }
  espada(dano) {}
  escudo(vida) {}
  recuperarVida(vida) {
    this.vida = this.vida + Math.random() * 16;
  }
}

class boss {
  constructor(vida, dano) {
    this.vida = vida
    this.dano = dano
  }
  chute(dano) {}
  ataque(dano) {}
}

class criatura {
  constructor(vida, dano = 5) {
    this.vida = vida
    this.dano = dano
    this.tipo = this.gerarTipo()
  }
  ataque(dano) {
    this.vida = this.vida - this.dano;
  }
  fugir() {}
  gerarTipo() {
    const tipos = ["voador", "bola", "terrestre", "gordo"];
    const random = Math.floor(Math.random() * tipos.length)
    return tipos[random]
  }
}

class game {
  constructor(score) {
    this.score = score
  }
  gerarCriaturas() {
    
  }
  start() {}
  turn() {}
  checkUpPlayerStatus() {}
}

const player = new heroi();
const vilao = new boss();
const creature = new criatura();

