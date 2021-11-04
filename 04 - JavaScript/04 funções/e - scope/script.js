// Let - global scope

let spaceshipName = "Supernova";

function changeSpaceshipName() {
  spaceshipName = "Elemental";
}

console.log(spaceshipName);
changeSpaceshipName();
console.log(spaceshipName);

// Let - fora de estrutura

function startSpaceshipVelocity() {
  let spaceshipVelocity = 0;
}

let spaceshipVelocity = 200;

startSpaceshipVelocity();
console.log(spaceshipVelocity);

//
// function setSpaceshipDetails() {
//   let velocity = 50;
//   if (velocity == 50) {
//     velocity = 60;
//     var spaceshipName = "Elemental";
//     let spaceshipType = "Discovery";
//   }

//   console.log(velocity); // dentro do escopo local, acessado pela função, então atualizou o valor de 50 para 60
//   console.log(spaceshipName); //podemos acessar dentro do escopo mais elevado
//   console.log(spaceshipType); //Erro de referência, pois essa variável só pertence ao escopo do if
// }

// setSpaceshipDetails();

function setSpaceshipDetails() {
  console.log(spaceshipName);
  console.log(spaceshipType);
  var spaceshipName = "Elemental";
  let spaceshipType = "Discovery";
  console.log(spaceshipName);
  console.log(spaceshipType);
}

setSpaceshipDetails();
