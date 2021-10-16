let velocity = 90;
let spaceship = "Elemental";

// switch com velocity
switch (velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100km/s");
    break;
  case 160:
    console.log("Sua velocidade é 160km/s");
    break;
  default:
    console.log("Velocidade não identificada");
}

//switch com velocity procurando pelo case que primeiro vai atender. Assim que ele encontra 90, vai executando direto todos os cases embaixo, até encontrar a palavra break e parar. Se não tivesse o break em 100, ele executaria o case 110, por exemplo. Ou seja: a partir do momento que encontra o primeiro case, o switch vai executar/imprimir TODOS os cases posteriores até encontrar um break.
switch (velocity) {
  case 80:
  case 90:
  case 100:
    console.log("Velocidade aceitável");
    break;
  case 110:
    console.log("Velocidade alta, mas aceitável");
    break;
  default:
    console.log("Velocidade não identificada");
}

//switch com spaceship
switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente");
    break;
  case "Raptor":
    console.log("Nava mais rápida");
    break;
  case "Enterprise":
    console.log("Nave da Frota Estelar");
    break;
  default:
    console.log("Nave comum");
}

//Switch encontrando o primeiro break após "Elemental" e imprimindo todos os casos posteriores
switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente");
  case "Elemental":
    console.log("Nave com melhor armamento");
  case "Helmet":
    console.log("Rápida ativação de escudo");
  case "Frontier":
    console.log("Nave de infantaria");
    break;
  case "Enterprise":
    console.log("Nave da frota estelar");
  default:
    console.log("Não conheço a nave");
}
