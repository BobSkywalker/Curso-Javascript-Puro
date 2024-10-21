// Utilizando concact
// Serve para juntar 2 arrays concatenando elas

let valoresIniciais = [1, 4, 9, 5, 2, 6];
let valoresFinais = [10, 34, 14, 29];

let valoresTotais = valoresIniciais.concat(valoresFinais);
console.log(valoresTotais);

// Push
// Serve para adicionar itens ao final das arrays alterando a array original

let navegadores = ["google", "firefox", "edge"];
console.log(navegadores)
navegadores.push("safari", "operaGX");
console.log(navegadores);

// Pop
// Remove o ultimo item de uma array e a retorna

let programas = ['VScode', 'Discord', 'Steam']
console.log(programas)
programas.pop(); // Remove o Steam
console.log(programas)

// Shift
// Remove o primeiro item de uma array e a retorna

let arquivos = ['Videos', 'Games', 'Fotos']
console.log(arquivos)
arquivos.shift(); // Remover o Videos
console.log(arquivos)

// Unshift
// Adiciona 1 ou mais valores no inicio de uma array alterando a array original

let games = ['GTA', 'MINECRAFT', 'ROBLOX']
console.log(games)
games.unshift('CSGO', 'CSSource')
console.log(games)

// Splice
// Este método altera um array, adicionando, removendo e inserindo elementos

let cores = ['Verde', 'Roxo', 'Azul', 'Amarelo', 'Preto']
console.log(cores)
cores.splice(0, 4)
console.log(cores)

// Splice Exemplo 2

let coresDois = ["Verde", "Roxo", "Azul", "Amarelo", "Preto"];
console.log(coresDois)
coresDois.splice(3)
console.log(coresDois)

// Splice Exemplo 3 

let teclados = ['Redragon', 'Knup', 'Razer', 'Mancer']
console.log(teclados)
teclados.splice(0, 1, 'Montech', 'Gamdias')
console.log(teclados)

// Splice Exemplo 4 

let agenda = ["Eu", "tenho", "um", "compromisso", "com"];
agenda.splice(5, 0, "alguns", "clientes", "amanhã");
console.log(agenda); 