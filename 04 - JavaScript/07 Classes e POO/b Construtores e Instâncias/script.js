// class SpacialStation {
//   constructor(name, platFormsQuantity) {
//     this.name = name;
//     this.platFormsQuantity = platFormsQuantity;
//   }
// }

// let observatory = new SpacialStation("Observatório", 40);

class Spaceship {
  constructor(name, type = "Descoberta") {
    this.name = name;
    this.type = type;
  }
}

let darwin = new Spaceship("Darwin");
let helmet = new Spaceship("Helmet", "Batalha");

console.log(darwin);
console.log(helmet);
