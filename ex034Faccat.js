let x, y, z;

x = parseInt(prompt("Digite o valor de X: "));
y = parseInt(prompt("Digite o valor de Y: "));

z = (x * y) + 5;

if (z <= 0) {
  window.alert("O resultado foi: " + z + " ,é menor que 0");
} else if (z <= 100) {
  window.alert("O resultado foi: " + z + " ,é maior que 0 e menor que 100");
} else {
  window.alert("O resultado foi: " + z + " ,é maior que 100");
}