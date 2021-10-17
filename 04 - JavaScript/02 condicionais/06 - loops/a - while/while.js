let warpCount = 0; //warp é um termo para dobra
let chosenOption = "";

let spaceship = prompt("Digite o nome da nave: ");

chosenOption = prompt("Deseja entrar em dobra espacial? \n1 - Sim \n 2 - Não ");

while (chosenOption == "1") {
  warpCount += 1;
  chosenOption = prompt(
    "Deseja realizar a próxima dobra? \n1 - Sim \n 2 - Não",
  );
}

alert("Nave : " + spaceship + "\nQuantidade de dobras: " + warpCount);
