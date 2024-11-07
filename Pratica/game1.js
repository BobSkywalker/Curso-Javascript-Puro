function derrotarBoss(){
    const player = {
        nome: 'Bob',
        forca: 200,
        xp: 50
    }
    const boss = 360
    if (player.forca <= boss){
        console.log('Você perdeu')
    } else{
        console.log('Você ganhou')
    }
}
console.log(derrotarBoss())