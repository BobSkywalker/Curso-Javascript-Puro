
// Assim que o forEach Funciona
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ["Agata", "Lorenzo", "Daniel", "Marcos"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
});
