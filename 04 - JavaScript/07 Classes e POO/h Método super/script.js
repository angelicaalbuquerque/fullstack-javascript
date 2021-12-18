class Spaceship {
  constructor(name, maxCrew, maxRecommendedValue) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedValue = maxRecommendedValue;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;

    if (this.currentVelocity > this.maxRecommendedValue) {
      alert(
        "Velocidade máxima ultrapassada!! Diminua ou provocará danos à nave",
      );
    }
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedValue); //chama o construtor da classe mãe
    this.maxLoadWeight = maxLoadWeight;
  }

  //divide a aceleração, emite menssagem e chama o speedUp
  speedUp(acceleration) {
    acceleration /= 2;
    alert("Incrementando velocidade em " + acceleration + "km/s");
    super.speedUp(acceleration);
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400);

console.log(transportSpaceship);

transportSpaceship.speedUp(210);
