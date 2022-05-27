// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let base, altura, area;

base = parseFloat(prompt("Digite a base: "));
altura = parseFloat(prompt("Digite a altura: "));

area = base * altura;

alert("A área do retângulo é equivalente á: " + area + "m²");