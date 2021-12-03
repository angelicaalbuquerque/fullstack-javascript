let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Batalha",
};

//chamada a campos específicos do objeto
console.log(spaceship.type);
console.log(spaceship["name"]);

// atribuição de mais dois valores
spaceship.isHitched = false;
spaceship["shieldLevel"] = 100;

console.log(spaceship);
