let maca, resultado;

maca = parseInt(prompt("Digite a quantidade de maçãs que foram compradas: "));

if (maca >= 12) {
  resultado = 1 * maca;
  alert("As " + maca + " maçãs deu R$" + resultado.toFixed(2));
} else {
  resultado = 1.30 * maca;
  alert("As " + maca + " maçãs deu R$" + resultado.toFixed(2));
}