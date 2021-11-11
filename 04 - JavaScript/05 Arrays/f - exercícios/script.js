const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

//filtrando subarrays de naves com mais de 9 tripulantes e mapeando o nome
let crewGreaterThan9 = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => {
    return spaceship[0];
  });

//numero da primeira plataforma em processo de engate
let ongoingHitchPlataform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

let hightlightedSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

let message =
  "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ");
message +=
  "\nPlataforma com processo de engate: " + (ongoingHitchPlataform + 1);
message += "\nEspaçonaves destacadas: " + hightlightedSpaceships.join(", ");

console.log(message);
