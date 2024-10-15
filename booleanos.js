let isAtivo = false;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo);
console.log(!!isAtivo);

//Booleanos Verdadeiros

console.log("Booleanos Verdadeiros");

console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//Booleanos Falsos

console.log("Booleanos Falsos");

console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

//Para finalizar

console.log("Para finalizar");

console.log(!!("" || null || 0 || " "));

let nome = "";

console.log(nome || "Desconhecido"); // Forma caracteristicar de ter um valor padrao de uma variavel
