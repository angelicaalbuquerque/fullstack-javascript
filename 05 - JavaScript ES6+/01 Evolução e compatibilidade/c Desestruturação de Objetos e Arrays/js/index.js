let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false,
};

let { name: spaceshipName, crewQuantity } = spaceship;
// let spaceshipName = spaceship.name;
// let crewQuantity = spaceship.crewQuantity;

console.log(spaceshipName, crewQuantity);
