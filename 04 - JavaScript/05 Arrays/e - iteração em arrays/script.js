let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"];

// ForEach
hitchedSpaceships.forEach(function (currentSpaceship, index) {
  console.log("Nave: " + currentSpaceship + "\nÍndice: " + index);
});

/* 
Nave: Deméter
Índice: 0
script.js:5 Nave: Darwin
Índice: 1
script.js:5 Nave: Supernova
Índice: 2
script.js:5 Nave: Fenix
Índice: 3
script.js:5 Nave: Puller
Índice: 4 
*/

//Map
let upcasedSpaceships = hitchedSpaceships.map(function (currentSpaceship) {
  let upcased = currentSpaceship.toUpperCase();
  return upcased;
});

console.log(upcasedSpaceships); //(5) ['DEMÉTER', 'DARWIN', 'SUPERNOVA', 'FENIX', 'PULLER']

//Filter
let with7Chars = hitchedSpaceships.filter((element) => {
  return element.length >= 7;
});
console.log(with7Chars); //(2) ['Deméter', 'Supernova']

//Find
let with6Chars = hitchedSpaceships.find((element) => {
  return element.length <= 6;
});

console.log(with6Chars); //Darwin
