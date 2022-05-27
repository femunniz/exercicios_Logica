let n1, n2, n3;

n1 = parseInt(prompt("Digite o primeiro número: "));
n2 = parseInt(prompt("Digite o segundo número: "));
n3 = parseInt(prompt("Digite o terceiro número: "));

if (n1 > n2 & n1 > n3) {
  window.alert("O maior número digitado entre os três é: " + n1);
} else if (n2 > n3) {
  window.alert("O maior número digitado entre os três é: " + n2);
} else {
  window.alert("O maior número digitado entre os três é: " + n3);
}