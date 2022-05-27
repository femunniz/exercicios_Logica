let numero1, numero2;

numero1 = parseFloat(prompt("Digite um número: "));
numero2 = parseFloat(prompt("Digite outro número: "));

if (numero1 > numero2) {
  alert("A ordem crescente dos números digitados é: " + numero2 + "," + numero1);
} else {
  alert("A ordem crescente dos números digitados é: " + numero1 + "," + numero2);
}