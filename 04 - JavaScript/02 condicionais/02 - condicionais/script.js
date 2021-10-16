let velocity = 90;

if (velocity < 40) {
  console.log("Velocidade baixa");
} else if (velocity <= 100) {
  console.log("Cuidado! Próximo a velocidade de risco!");
} else {
  console.log("Velocidade de risco");
}

// Operador Ternário: recomendado para comandos ou bloco de código pequeno
velocity > 100
  ? console.log("Velocidade maior que 100")
  : console.log("Velocidade menor que 100");
