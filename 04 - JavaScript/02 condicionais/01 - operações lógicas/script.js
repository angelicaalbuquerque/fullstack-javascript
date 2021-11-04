let spaceship = "Elemental";
let velocity = 20;

/* Operador && */
console.log(spaceship.length == 9 && velocity > 15);
// V e V = true

console.log(velocity > 10 && velocity < 10);
// V e F = false

console.log(velocity < 17 && spaceship == "Elemental");
// F e V = false

console.log(spaceship == "Golias" && velocity > 21);
//F e F = false

/* Operador || */
console.log(spaceship.length == 9 || velocity > 15);
//V e V = true

console.log(velocity > 10 || velocity < 19);
//V e F = true

console.log(velocity < 17 || spaceship == "Elemental");
//F e V = true

console.log(spaceship == "Golias" || velocity > 21);
//F e F = false

/* Operador ! */
console.log(!(velocity > 19));
// não verdadeiro = false

console.log(!(spaceship == "Golias"));
//não falso = true

/* Expressão lógicas extras */
console.log(
  !(velocity > 25 && spaceship == "Elemental") ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15),
);
//!(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15)
//!(velocity > 25 && spaceship == "Elemental") || (V && F)
//!(velocity > 25 && spaceship == "Elemental") || F
//!(F && V) || F
//!(F) || F
//V || F
//V
