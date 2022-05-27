let valor;

valor = parseInt(prompt("DIGITE UM VALOR: "));

if (valor < 0) {
  window.alert("O NÚMERO É NEGATIVO!");
} else if (valor == 0) {
  window.alert("O NÚMERO É ZERO!");
} else {
  window.alert("O NÚMERO É POSITIVO!");
}