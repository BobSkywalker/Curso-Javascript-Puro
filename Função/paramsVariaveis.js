function menos() {
  let menos = 0;
  for (i in arguments) {
    menos -= arguments[i];
  }
  return menos;
}

console.log(menos());
console.log(menos(1));
console.log(menos(1, 1, 2.2, 3.3));
console.log(menos("a", "b", "c"));
