// callback > promise > async/await

const fileSystem = require("fs"); // Ler e escrever arquivos

/* Abaixo sao sincronas
console.log(1);
console.log(2);
console.log(3);
*/

console.log(1);
/*
// Callback naobugada :D
fileSystem.readFile('./int1.txt', (err, contents) => {
    fileSystem.readFile('./int2.txt', (err2, contents2) => {
        console.log(err2, String(contents2))
        console.log(err, String(contents))
    })
})
    */

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fileSystem.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

/*promise
readFile("./int1.txt").then((contents) => {
  console.log(String(contents));
  return readFile("./int2.txt")
  .then((contents) => {
    console.log(String(contents));
  });
});
*/

//Async await - açucar sintatico em cima da promise

const init = async () => {
    const contents = await readFile('./int1.txt')
    const contents2 = await readFile('./int2.txt')
    console.log(String(contents))
    console.log(String(contents2))
}

const init2 = async () => {
    try{
    const contents = await readFile('./int1.txt')
    const contents2 = await readFile('./int22.txt')
    console.log(String(contents))
    console.log(String(contents2))
    } catch(err){
        console.log(err)
    }
}




console.log("init", init())

console.log("init2", init2())

console.log(2);

console.log(3);
