class Spaceship {
  //método construtor definido dentro da classe
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }

  //método normal definido dentro da classe
  speedUp(acceleration) {
    this.velocity += acceleration;
  }
}

let artemis = new Spaceship("Artemis");
console.log(artemis);

artemis.speedUp(10);
console.log(artemis);
artemis.speedUp(15);
console.log(artemis);
