const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botao = document.getElementById("botao");
const displayIMC = document.getElementById("valorIMC");
const displayClassificacao = document.getElementById("classificacaoDisplay");

botao.addEventListener("click", efetuarCalculo);

function efetuarCalculo() {
  const pesoValue = peso.value;
  const alturaValue = altura.value;
  const total = pesoValue / (alturaValue * alturaValue);
  modificarDisplay(total);
}

function modificarDisplay(total) {
  const { texto, textColor } = determinarClassificacao(total);
  displayClassificacao.innerHTML = texto;
  displayClassificacao.style.color = textColor;
  displayIMC.style.color = "white";
  displayIMC.innerHTML = `Seu IMC é: ${parseFloat(total).toFixed(2)}`;
}

function determinarClassificacao(total) {
  if (total <= 18.5) {
    return {
      texto: "Abaixo do peso normal",
      textColor: "Yellow",
    };
  }
  if (total >= 18.5 && total <= 24.9) {
    return {
      texto: "Peso normal",
      textColor: "Green",
    };
  }
  if (total >= 25 && total <= 29.9) {
    return {
      texto: "Excesso de peso",
      textColor: "Orange",
    };
  }
  if (total >= 30 && total <= 34.9) {
    return {
      texto: "Obesidade Classe 1",
      textColor: "#dc2f02",
    };
  }
  if (total >= 35 && total <= 39.9) {
    return {
      texto: "Obesidade Classe 2",
      textColor: "#6a040f",
    };
  }
  if (total >= 40) {
    return {
      texto: "Obesidade Classe 3",
      textColor: "#370617",
    };
  }
}
