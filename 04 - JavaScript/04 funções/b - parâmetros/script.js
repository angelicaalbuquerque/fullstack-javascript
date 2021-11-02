// Parâmetros

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;
  console.log("Nova velocidade: " + newVelocity);
}

speedUp(60, 10);
speedUp(40, 20);
speedUp(20, 30);

// Parâmetros com valor padrão

function greetPilot(name = "Piloto(a)", message = "Olá") {
  alert(message + ", " + name);
}

greetPilot("Angélica"); //"Olá, Angélica"

// Armadilhas de Parâmetros
// 1 - Quando chamamos uma função sem parâmetro necessário: undefined

function helloPilot(namePilot, messagePilot = "Olá") {
  console.log(messagePilot, ", " + namePilot);
}

helloPilot();

// 2 - Ordem dos parâmetros

function spaceshipSpeedUp(
  spaceshipVelocity,
  unit = "km/s",
  spaceshipAcceleration,
) {
  let newSpaceshipVelocity = spaceshipVelocity + spaceshipAcceleration;
  console.log("Nova velocidade: " + newSpaceshipVelocity);
}

spaceshipSpeedUp(50, 20); //"Nova velocidade: NaN"
