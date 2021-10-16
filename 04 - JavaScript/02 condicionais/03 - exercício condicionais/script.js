let nomePiloto = prompt("Olá, piloto! Qual é o seu nome? ");

let velocity = 0;

let newVelocity = prompt(
  "Qual a velocidade que você gostaria de acelerar a nave, " + nomePiloto + "?",
);
let confirmVelocity = confirm(
  "Estamos indo para a velocidade " + newVelocity + "km/s, ok?",
);

if (confirmVelocity) {
  velocity = newVelocity;
}

if (velocity < 0) {
  console.log("Nave está parada. Considere partir e aumentar a velocidade.");
} else if (velocity < 40) {
  console.log("Você está devagar! Podemos aumentar mais a velocidade.");
} else if (velocity >= 40 && velocity < 80) {
  console.log("Parece uma boa velocidade para manter.");
} else if (velocity >= 80 && velocity <= 100) {
  console.log("Velocidade alta. Considere diminuir.");
} else if (velocity >= 100) {
  console.log("Velocidade perigosa. Controle automático forçado.");
}

alert(
  "O piloto " + nomePiloto + " está em uma velocidade " + velocity + "km/s",
);
