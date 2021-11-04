let spaceshipName = prompt("Qual é o nome da nave: ");
let spaceshipInvertedName = "";

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == "e") {
    break;
  }
  spaceshipInvertedName += spaceshipName[i];
}
console.log(spaceshipInvertedName);

// S u p e r n o v a   9
// 0 1 2 3 4 5 6 7 8
