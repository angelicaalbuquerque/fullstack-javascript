let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"];
console.log(spaceshipNames); //(4) ['Elemental', 'Darwin', 'Artemis', 'Supernova']

//remover o primeiro e segundo elemento e acrescentar outros três
let removedSpaceships = spaceshipNames.splice(
  1,
  2,
  "Deméter",
  "Puller",
  "Golias",
);
console.log(spaceshipNames); //(5) ['Elemental', 'Deméter', 'Puller', 'Golias', 'Supernova']
console.log(removedSpaceships); //(2) ['Darwin', 'Artemis']

// Slice
let extractedNames = spaceshipNames.slice(1, 3);
console.log(spaceshipNames); //(5) ['Elemental', 'Deméter', 'Puller', 'Golias', 'Supernova']
console.log(extractedNames); //(2) ['Deméter', 'Puller']
