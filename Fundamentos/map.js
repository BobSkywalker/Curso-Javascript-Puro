let numeros = [1, 2, 3, 4, 5, 6, 7];
let newArr = numeros.map(multiplicar);

function multiplicar(a) {
  return a * 2;
}

console.log(newArr);
