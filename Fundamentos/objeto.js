// Primeira forma

const prod1 = {};
prod1.nome = "Celular Ultra mega";
prod1.preço = 4999;
prod1["Desconto Legal"] = 0.5; // Evitar atributos com espaço

console.log(prod1);

// Segunda forma

const prod2 = {
  nome: "Camisa polo",
  preço: 79.9,
};

console.log(prod2);

// JSON

('{ "nome": "Camisa polo", "preço": 79.90 }');
