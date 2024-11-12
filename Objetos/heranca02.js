// Cadeia de Prótotipo

Object.prototype.atributo0 = '0' //Não faça isso em casa

const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B'}
const filho = {__proto__: pai, atributo3: 'C'}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const speedForce = {
    velAtual: 200,
    velMax: 230,
    acelerarMais(delta){
        if (this.velAtual + delta < this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const mercurio = {
    liga: 'Marvel',
    velMax: 324 //Shadowing ou Reescrita
}

const kidFlash = {
    liga: 'Dc',
    status(){
        `${this.liga}: ${super.status()}`
    }
}

Object.setPrototypeOf(kidFlash, speedForce)
Object.setPrototypeOf(mercurio, speedForce)


mercurio.acelerarMais(100)
console.log(mercurio.status())

kidFlash.acelerarMais(200)
console.log(kidFlash.status())