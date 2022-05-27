let n1, n2;

n1 = parseInt(prompt("Digite o primeiro número: "));
n2 = parseInt(prompt("Digite o segundo número: "));

if (n1 == n2) {
  window.alert("Os números digitados são iguais!");
} else if (n1 > n2) {
  window.alert("O primeiro número é maior!");
} else {
  window.alert("O segundo número é maior!");
}