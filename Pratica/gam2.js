class boss{
    constructor(vida, dano){
        this.vida = vida
        this.dano = dano
    }
    vidas(){
        return this.vida
    }
    receberDano(dano){
        this.vida = this.vida - dano
    }
    atacar(dano){
        this.dano = dano
    }
}

class hero{
    constructor(vida, dano){
        this.vida = vida
        this.dano = dano
    }
    atacar(dano){
        this.dano = dano
    }
    receberDano(dano){
        this.vida = this.vida - dano
    }
    vidas(){
        this.vida
    }
}

const jogador = new hero(0, 300)

const vilao = new boss(500, 100)

function game(){
    /*vilao.receberDano(jogador.dano);
    if (vilao.vida <= 0){
        console.log('Venci')
    } else{
        console.log('Perdi')
    }*/
   jogador.receberDano(vilao.dano)
   if(jogador.vida <= 0){
    console.log('vitoria')
   }
}
game()
