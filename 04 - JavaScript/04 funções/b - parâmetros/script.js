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

greetPilot("Angélica");
