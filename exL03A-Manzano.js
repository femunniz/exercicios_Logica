let numero, contadora, resultado;

contadora = 1;

numero = parseInt(prompt("Digite um número e veja sua tabuada de 1 a 10: "));

while (contadora < 11) {
    resultado = numero * contadora;
    document.write(numero + " x " + contadora + " = " + resultado);
    contadora = contadora + 1;
}