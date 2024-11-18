/*
    <main>
        <cards class="card"></cards>
        <cards class="card"></cards>
        <cards class="card"></cards>
        <cards class="card"></cards>
    </main>
*/
const botao = document.querySelector('.botao')

botao.addEventListener('click', livrosNovos)


function livrosNovos(){
    const inputTitulo = document.getElementById('titulo')
    const inputAutor = document.getElementById('autor')
    const inputPaginas = document.getElementById('paginas')

    const tituloValor = inputTitulo.value
    const autorValor = inputAutor.value
    const paginasValor = parseInt(inputPaginas.value)

    addBookToLibrary(autorValor, tituloValor, paginasValor)
    displayBooks()
}

const myLibrary = [];

function addBookToLibrary(author, title, pages) {
  const livro = {
    author,
    title,
    pages
  };

  myLibrary.push(livro);
}

addBookToLibrary("Bob", "Marley", 10);
console.log(myLibrary);

function displayBooks() {
  const container = document.getElementById("container");
    container.innerHTML = ''
  console.log(container)

  for (let indice = 0; indice <= myLibrary.length; indice++) {
    const livro = myLibrary[indice];

    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("p");
    title.classList.add("titulo");
    title.innerHTML = livro.title;
    const autor = document.createElement("p")
    autor.classList.add("autor")
    autor.innerHTML = livro.author
    const paginas = document.createElement("p")
    paginas.classList.add('paginas')
    paginas.innerHTML = livro.pages
    card.append(title);
    card.append(autor)
    card.append(paginas)
    container.append(card);
  }
}

displayBooks()

