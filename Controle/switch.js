const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de Honra");
    //break;
    case 8:
    case 7:
      console.log("Quadro de Honra");
    // break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperacao");
    // break
    case 3, 2, 1:
      console.log("Reprovado");
    default:
      console.log("nota invalida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(7);
imprimirResultado(6);
imprimirResultado(4);
imprimirResultado(2);
