let distanceLightYears = prompt("Qual é a distância em anos luz?");

let chosenOption = prompt(
  "Para qual unidade deseja converter? \nDigite o número da opção desejada: \n1 - Parsec (pc) \n2 - Unidade astronômica (AU) \n3 - Quilômetros (km)",
);

let chosenUnity;
let convertedDistance;

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec";
    convertedDistance = distanceLightYears * 0.306601;
    break;
  case "2":
    chosenUnity = "Unidade Astronômica";
    convertedDistance = distanceLightYears * 63241.1;
    break;
  case "3":
    chosenUnity = "Quilômetros";
    convertedDistance = distanceLightYears * 9.5 * Math.pow(10, 12);
    break;
  default:
    chosenUnity = "Unidade Não Identificada";
    convertedDistance = "Conversão fora do escopo";
    break;
}

alert(
  "Distância em anos luz: " +
    distanceLightYears +
    "\n" +
    "Unidade convertida: " +
    chosenUnity +
    ": " +
    convertedDistance,
);
