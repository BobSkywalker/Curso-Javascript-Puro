class Person {
    constructor(name){
        this.name = name;
    }

    set name(string){
        this.name 
    }

    get name(){
        return this.name
    }

    walk(){
        return `${this.name} esta andando`
    }
}

const pessoa = new Person('Pedro')
pessoa.name = 'zdo'

console.log(pessoa.walk())