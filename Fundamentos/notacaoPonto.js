console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "bola";
// obj1["nome"] = "bola2";
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("Exec.....");
  };
}

const obj2 = new Obj("Monitor");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
