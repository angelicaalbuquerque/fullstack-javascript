/*
Aula - substituir todos os caracteres "e" pelo caractere "i"

    let spaceship = "Helmet";
    let newSpaceship = "";

    for (let i = 0; i < spaceship.length; i++) {
      if (spaceship[i] == "e") {
        newSpaceship += "i";
      } else {
        newSpaceship += spaceship[i]; //recebe o caractere normal
      }
    }

    console.log(newSpaceship);
    
*/

// Exercício:
let spaceshipName = prompt("Nome da nave: ");
let spaceshipChosenChar = prompt("Qual caractere você deseja substituir?");
let spaceshipCharReplace = prompt("Por qual caractere deseja substituir?");
let spaceshipNewName = "";

for (let i = 0; i < spaceshipName.length; i++) {
  if (spaceshipName[i] == spaceshipChosenChar) {
    spaceshipNewName += spaceshipCharReplace;
  } else {
    spaceshipNewName += spaceshipName[i];
  }
}
console.log("O nome novo da nave é: " + spaceshipNewName);
