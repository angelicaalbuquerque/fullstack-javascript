let spaceshipName = prompt("Nome da nave: ");
let spaceshipVelocity = 0;
let chosenOption; //começa com valor undefined

function showMenu() {
  let option;
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt(
      "O que deseja fazer?\n" +
        "1 - Acelerar a nave em 5km/s\n" +
        "2 - Desacelerar em 5km/s\n" +
        "3 - Imprimir dados de bordo\n" +
        "4 - Sair do programa\n",
    );
  }

  return option;
}

function speedUp(velocity) {
  let newVelocity = velocity + 5;
  return newVelocity;
}

function slowDown(velocity) {
  let newVelocity = velocity - 5;
  if (newVelocity < 0) {
    newVelocity = 0;
  }
  return newVelocity;
}

function printSpaceshipBoardData(name, velocity) {
  alert("Espaçonave: " + name + "\nVelocidade: " + velocity);
}

do {
  chosenOption = showMenu();

  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity);
      break;

    case "2":
      spaceshipVelocity = slowDown(spaceshipVelocity);
      break;

    case "3":
      printSpaceshipBoardData(spaceshipName, spaceshipVelocity);
      break;

    default:
      alert("Encerrando o programa de bordo");
      break;
  }
} while (chosenOption != "4");
