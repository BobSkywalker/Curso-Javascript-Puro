// Arrow function

const soma = (a, b) => a + b;

console.log(soma(1, 4));

// Arrow function (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametros Default

function log(texto = "Node") {
  console.log(texto);
}

log();
log('Sou mais forte')

// Operador Rest

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 6, 3, 7))