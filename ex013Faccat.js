let nota1, nota2, nota3, media;

nota1 = parseFloat(prompt("Digite a nota 01: "));
nota2 = parseFloat(prompt("Digite a nota 02: "));
nota3 = parseFloat(prompt("Digite a nota 03: "));

media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

alert("A sua média final é: " + media);