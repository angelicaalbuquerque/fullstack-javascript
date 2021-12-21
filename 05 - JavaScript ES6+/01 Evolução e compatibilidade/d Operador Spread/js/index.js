let spaceships = ["Colossus", "Ártemis", "Fenix"];
console.log(spaceships); //imprime como array
console.log(...spaceships); //imprime três strings distintas, desempacotando o array.

let newSpaceships = [...spaceships, "Puller"];
console.log(newSpaceships); //imprime array com os 3 de spaceships +  "Puller", considerando elemento a elemento:  ['Colossus', 'Ártemis', 'Fenix', 'Puller']

let newSpaceships2 = [spaceships, "Puller"];
console.log(newSpaceships2); //considera o array + um elemento: [Array(3), 'Puller']
