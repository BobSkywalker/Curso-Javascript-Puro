const botao = document.getElementById("botao");
const ativoValor = document.getElementById("valorAtivo");
const vpa = document.getElementById("VPA");
const lpa = document.getElementById("LPA");
const displayRes = document.getElementById("resultado");

botao.addEventListener("click", calcularGraham);

function calcularGraham(){
      const vpaValue = vpa.value;
      const lpaValue = lpa.value;
      const total = Math.sqrt(22.5 * vpaValue * lpaValue).toFixed(2);
      displayRes.innerHTML = `O  preço teto é: ${total}`;
}