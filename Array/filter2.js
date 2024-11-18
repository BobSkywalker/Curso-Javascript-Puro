Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let indice = 0; indice < this.length; indice++){
        if(callback(this[indice], indice, this)){
            newArray.push(this[indice])
        }
    }
    return newArray
}

const processadores = [
  { nome: "I5 10400F", preco: 1000, novo: true },
  { nome: "I3 10110F", preco: 670, novo: false },
  { nome: "I7 9700", preco: 1800, novo: true },
  { nome: "I9 12900KF", preco: 3000, novo: false },
];

const processadoresCaros = (processadores) => processadores.preco >= 1000;
const processadoresBaratos = (processadores) => processadores.preco <= 700;
const processadoresNovos = (processadores) => (processadores.novo = true);

console.log(processadores.filter2(processadoresCaros));
console.log(processadores.filter2(processadoresBaratos));
console.log(processadores.filter2(processadoresNovos));
