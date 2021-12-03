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

// Parte II: mapeando

let spacialStation = {
  name: "Fox",
  platFormsQuantity: 10,
  "new name": "Estelar",
  true: false,
  2: "Descoberta",
};

// console.log(spacialStation.2);
//Uncaught SyntaxError: missing ) after argument list -- não consegue acessar assim porque o JS entende como número

console.log(spacialStation[2]);
//jeito correto de acessar
