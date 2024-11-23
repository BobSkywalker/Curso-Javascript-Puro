// let e const

{
  var a = 2;
  let b = 3;

  console.log(b);
}
console.log(a);

// Template String

const produto = "iPad";
console.log(`${produto} é caro!`); // Não possivel se usar string normal = '' ou ""

// Destructuring

const [l, e, ...tras] = "Cod3r"

console.log(l, e, ...tras)

const [x, y] = [1, 2]
console.log(x, y)