// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let eleitores, brancos, nulos, validos;

eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
brancos = parseInt(prompt("Digite a quantidade de votos em branco: "));
nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
validos = parseInt(prompt("Digite a quantidade de votos validos: "));

if (brancos <0) {
  alert("Não houve votos em branco !");
} else {
  alert("A quantidade de votos em brancos é: " + 100 * brancos / eleitores + "%");
}

if (nulos <0) {
  alert("Não houve votos nulos !");
} else {
  alert("A quantidade de votos nulos é: " + 100 * nulos / eleitores + "%");
}

if (validos <0) {
  alert("Não houve votos validos !");
} else {
  alert("A quantidade de votos validos é: " + 100 * validos / eleitores + "%");
}
