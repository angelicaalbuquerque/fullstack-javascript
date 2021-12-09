class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;

    if (this.currentVelocity > this.maxRecommendedVelocity) {
      alert(
        "Velocidade máxima ultrapassada!! Diminua ou provocará danos à nave",
      );
    }
  }
}

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    alert("Recolhendo armas e parando naves de batalha");
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    alert("Recolhendo equipmanetos de amostras e parando naves de descoberta");
  }
}

let darwin = new DiscoverySpaceship("Dawin", 10, 200);
let fenix = new BattleSpaceship("Fenix", 8, 240);

console.log(darwin);
console.log(fenix);

darwin.speedUp(210);
fenix.speedUp(200);

darwin.stop();
fenix.stop();
