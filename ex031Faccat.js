let valorA, valorB, valorC;

valorA = parseInt(prompt("Digite o primeiro valor: "));
valorB = parseInt(prompt("Digite o segundo valor: "));
valorC = parseInt(prompt("Digite o terceiro valor: "));

if (valorA < valorB + valorC & valorB < valorA + valorC & valorC < valorA + valorB) {
    window.alert("Com esses valores é possivel fazer um triângulo");
} else {
    window.alert("Com esses valores não é possivel fazer um triângulo");
}