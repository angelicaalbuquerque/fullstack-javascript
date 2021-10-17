//Aula - substituir todos os caracteres "e" pelo caractere "i"
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

//Exercício
