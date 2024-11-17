// Game RPG

const prompt = require("prompt-sync")()


class Heroi {
  constructor(dano, vida = 25) {
    this.vida = vida;
    this.dano = dano;
    this.healingUses = 0;
    this.specialBuildUp = 0;
  }
  espada() {
    const fator = Math.floor(Math.random() * 100);
    if (fator <= 15) {
      return 9 + this.gerarCritico();
    } else {
      return 9;
    }
  }
  escudo(dano) {
    const danoAplicado = (75 / 100) * dano;
    this.vida = this.vida - danoAplicado;
  }
  recuperarVida() {
    if (this.healingUses <= 3) {
      let vidaRandom = 0;
      while (vidaRandom < 9) {
        vidaRandom = Math.floor(Math.random() * 16);
      }
      this.vida = this.vida + vidaRandom;
    } else {
      console.log("Se lascou");
    }
  }
  gerarCritico(dano) {
    return (75 / 100) * dano + dano;
  }
}

class Boss {
  constructor(vida, dano) {
    this.vida = vida;
    this.dano = dano;
  }
  retornarInformacoes() {
    return `${this.vida}`;
  }
  chute(dano) {}
  ataque(dano) {}
}

class Criatura {
  constructor(dano = 5) {
    this.vida = this.gerarVida();
    this.dano = dano;
    this.tipo = this.gerarTipo();
  }
  ataque() {
    return 5;
  }
  fugir() {}
  gerarTipo() {
    const tipos = ["voador", "bola", "terrestre", "gordo"];
    const random = Math.floor(Math.random() * tipos.length);
    return tipos[random];
  }
  retornarInformacoes() {
    return `${this.tipo} ${this.vida}`;
  }
  gerarVida() {
    let vidaRandom = 0;
    while (vidaRandom <= 25) {
      vidaRandom = Math.floor(Math.random() * 32);
    }
    return vidaRandom;
  }
}

class Game {
  constructor(score) {
    this.score = score;
    this.turn = 1;
  }
  gerarCriaturas() {
    const criaturas = [];
    for (let indice = 0; indice <= 5; indice++) {
      criaturas.push(new Criatura());
    }
    return criaturas;
  }
  start() {
    const player = new Heroi();
    const oponentes = this.prepararOponentes();
    this.turn = 1;
    while(player.vida > 0){
      this.printarInimigos()
      const indexInimigo = prompt("Qual inimigo você deseja atacar ?: ");
      
    }
  }
  checkUpPlayerStatus() {}
  prepararOponentes() {
    let oponentes = [];
    oponentes = [...this.gerarCriaturas()];
    return oponentes;
  }
  printarInimigos(inimigos) {
    for (let indice = 0; indice <= inimigos.length; indice++) {
      const inimigo = inimigos[indice];
      console.log(`${indice} ${inimigo.retornarInformacoes()}`);
    }
  }
}

