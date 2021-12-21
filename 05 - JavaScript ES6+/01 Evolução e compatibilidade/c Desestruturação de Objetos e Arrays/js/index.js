let spaceships = ["Colossus", "Ártemis", "Fênix"];

let [colossus, artemis] = spaceships;
// let colossus = spaceships[0];
// let artemis = spaceships[1];

function printSpaceships([colossus, artemis, fenix, puller]) {
  console.log(colossus, artemis, fenix, puller);
}

printSpaceships(spaceships);
//cada elemento do array spaceships vai ser mapeado para uma variável definida em printSpaceships. Como não existe o elemento respectivo a puller, imprime undefined.
