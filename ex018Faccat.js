let nascimento, votar, anoAtual;

nascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
anoAtual = parseInt(prompt("Digite o ano atual: "));

votar = anoAtual - nascimento;

if (votar > 18) {
  alert("Você está hábito para votar");
} else {
  alert("Você ainda não possui idade suficiente");
}