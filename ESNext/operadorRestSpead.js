// Operador ... rest(Juntar)/ Spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12345.678 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["Joao", "Pedro", "Vitoria"];
const grupoFinal = ["Blabla", "OBAOBA", ...grupoA];
console.log(grupoFinal);
