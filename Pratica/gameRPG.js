// Game RPG

class heroi{
    contructor(vida, dano) {
        this.vida
        this.dano
    }
    health(vida){
        this.vida = 25
    }
    espada(dano){
        this.dano = 9
        this.health = this.dano - this.health
    }
    escudo(vida){
        this.vida
    }
    recuperarVida(vida){
        this.health = this.health + Math.random(9, 16)
    }

}

class boss{
    constructor(vida, dano){
        this.vida
        this.dano
    }
    health(vida){
        this.vida = 50
    }
    chute(dano){
        this.dano = 5
        this.health = this.dano - this.health
    }
    ataque(dano){
        this.dano = 10
        this.health = this.dano - this.health
    }
    shadow(vida, dano){
        heroi.espada = 0
    }
}