let velocity = 50;
let acceleration = 5;

do {
  console.log("Acelerando: estamos a " + velocity + "km/s");
  velocity += acceleration;
} while (velocity <= 100);
