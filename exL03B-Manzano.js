let soma, contadora;

contadora = 1;
soma = 1;

while (contadora < 101) {
    document.write(contadora + " + ");
    soma = soma + contadora;
    contadora = contadora + 1;
}

document.write("A soma dos inteiros de 1 a 100 é: " + soma);