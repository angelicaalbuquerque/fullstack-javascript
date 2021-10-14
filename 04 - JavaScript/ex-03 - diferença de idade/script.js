let olderPersonName = prompt("Qual é o nome da pessoa mais velha?");
let olderPersonAge = prompt("Qual a idade da pessoa mais velha?");

let youngerPersonName = prompt("Qual é o nome da pessoa mais nova?");
let youngerPersonAge = prompt("Qual a idade da pessoa mais nova?");

let ageDifference = olderPersonAge - youngerPersonAge;

alert(
  "Pessoa mais velha: " +
    olderPersonName +
    "\nIdade pessoa mais velha: " +
    olderPersonAge +
    "\nPessoa mais nova: " +
    youngerPersonName +
    "\nDiferença de idade: " +
    ageDifference,
);
