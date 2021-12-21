// function greetCrew(message, names) {
//   names.forEach((name) => console.log(`${message}, ${name}`));
// }

// greetCrew("Seja bem-vinde", ["Angélica", "Carol", "Ivan"]);

//simplificação com Rest Param:
function greetCrew(message, ...names) {
  console.log(names); //printado como array
  names.forEach((name) => console.log(`${message}, ${name}`));
}

greetCrew("Seja bem-vinde", "Angélica", "Carol", "Ivan");
//printado como parâmetros À parte
