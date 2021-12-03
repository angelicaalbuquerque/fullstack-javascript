let spaceship = {
  name: "Supernova",
  type: "Batalha",
  crew: ["Cap. Silva", "Ana Júlia", "Thiago"],
};

spaceship.crew.push("Ten. Fernanda");
console.log(spaceship.crew);

//criando uma lista de objetos
let spaceshipsList = [
  { name: "Elemental", crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 18 },
  { name: "Fenix", crewQuantity: 6 },
];

console.log(spaceshipsList[0].name);
console.log(spaceshipsList[2].crewQuantity);

// para cada iteração da lista de naves, essa variável spaceshipData vai receber esse objeto
spaceshipsList.forEach((spaceshipData) => {
  console.log(
    spaceshipData.name + " tem " + spaceshipData.crewQuantity + " tripulantes.",
  );
});

//objeto dentro de objeto
let spaceshipDetails = {
  name: "Golias",
  maxCrew: 20,
  captain: {
    name: "Hugo Trent",
    age: 37,
  },
};

console.log(spaceshipDetails.captain.name);
