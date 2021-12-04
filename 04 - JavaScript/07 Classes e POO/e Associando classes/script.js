class Captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

// classe que vai interagir com a de cima, com constutor que recebe dados do capitão
class Spaceship {
  constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captain(captainName, captainAge, captainFlightHours);
  }
}

let spaceship = new Spaceship("Artemis", 13, "Will Gray", 45, 15000);

console.log(spaceship);
