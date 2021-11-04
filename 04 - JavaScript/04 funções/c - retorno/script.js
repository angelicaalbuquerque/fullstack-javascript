function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;
  console.log("Nova velocidade: " + newVelocity);
  return newVelocity;
}

// ignorando o retorno
speedUp(20, 100);

// usando retorno
console.log(speedUp(90, 10));

// usando retorno d função com armazenamento em variável
let velocity = 80;
let acceleration = 5;

//imprime o valor de velocity enquanto ainda é 80
console.log(velocity);

//função speedUp é chamada, somando na linha 3 e calculando a nova velocidade na linha 2
velocity = speedUp(velocity, acceleration);

// mensagem exibida com retorno de velocity sobreescrita
console.log(velocity);
