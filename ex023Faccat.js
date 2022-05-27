let nome, sexo, altura, pesoIdeal;

nome = toString(prompt("Digite o seu nome: "));
sexo = toString(prompt("Digite o seu sexo: "));
altura = parseFloat(prompt("Digite a sua altura: "));

if (sexo == "Masculino") {
  pesoIdeal = (72.7 * altura) - 58;
} else {
  pesoIdeal = (62.1 * altura) - 44.7;
}

alert("O seu peso ideal é de " + pesoIdeal + "Kg");