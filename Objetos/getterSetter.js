// Codigo nao funciona nao sei o porque 

const sequencia = {
  _valor: 1, // Convenção
  get valor() {
    return this.valor++;
  },
  set valor(valor) {
    if (valor > this.valor) {
      this.valor = valor;
    }
  },
};
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1