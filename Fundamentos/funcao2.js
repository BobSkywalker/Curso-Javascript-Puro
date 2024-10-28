// Armazenando uma funçãi em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(6, 5);

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 7));

// Retorno implicito

const subtracao = (a, b) => a - b;

console.log(subtracao(5, 10));

const imprimir2 = (a) => console.log(a);
imprimir2("Teste");
