function segredoDeJustica(){
    const chaveDoCofre = 1234
    
    return function abrirCofreSemRevelarChave(chaveSuposta){
        console.log("usando a chave inserida")
        if(chaveSuposta === chaveDoCofre){
           console.log("cofre aberto")
        }
    }
  }

  const funcaoQueAbreCofre = segredoDeJustica()

funcaoQueAbreCofre(4567)
// n vai console logar