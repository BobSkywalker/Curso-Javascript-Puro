const botao = document.getElementById("botao");
const conteudo = document.getElementById("container");
let isMenuOpen = false;

botao.addEventListener("click", () => {
  conteudo.classList.toggle("active");

  /*if(!isMenuOpen){ // Colocando o ! no inicio da variavel ele inverte o valor dela caso for numeros, booleanos, stingy
        conteudo.classList.toggle('active')
       conteudo.classList.remove('deactive')
        isMenuOpen = true
    } else {
        conteudo.classList.remove('active')
        conteudo.classList.toggle('deactive')
        isMenuOpen = false                                  
    }*/
});
