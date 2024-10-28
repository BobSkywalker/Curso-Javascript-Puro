//Aray é uma forma de agrupar valores em uma forma linear

let nome = ["Lucas", "joao", "maria"];

console.log(nome[2]);

nome[2] = 10;
console.log(nome);
console.log(nome.length);

nome.push({ id: 3 }, false, null, "teste");
console.log(nome);

console.log(nome.pop(2));
delete nome[2];

console.log(typeof nome);
