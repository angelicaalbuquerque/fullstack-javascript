alert("Bem-vindo! A seguir, pediremos que informe alguns dados.");

let userName = prompt("Qual é o seu nome?");

let age = prompt("Qual é a sua idade?");

let ageConfirmation = confirm(
  "Por favor, clique em 'ok' para confirmar se sua idade é " + age + " anos",
);

alert(
  "Seu nome é " +
    userName +
    " \nSua idade é " +
    age +
    " anos " +
    "\nConfirmação de idade: " +
    ageConfirmation,
);
