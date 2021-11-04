let hitchedSpaceships = [
  ["Elemental", 7],
  ["Helmet", 5],
  ["Golias, 5"],
  ["SuperNova", [true, false]],
];

//acessando o primeiro elemento
console.log(hitchedSpaceships[0]);

//adicionando outro array
hitchedSpaceships.push(["Phoenix", 8]);
console.log(hitchedSpaceships);

//acessando a primeira posição do 4º array
console.log(hitchedSpaceships[3][0]);

//acessando o primeiro elemento do array dentro array SuperNova
console.log(hitchedSpaceships[3][1][0]);
