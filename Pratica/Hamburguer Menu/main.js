const botao = document.getElementById("botao");
const conteudo = document.getElementById("conteudo");

botao.addEventListener("click", () => {
  conteudo.classList.toggle("active");
});
