// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let idade, ano, mes;

ano = 365
mes = 30

idade = parseInt(prompt("Digite sua idade: "));
alert("Você possui: " + idade + " anos");
alert("Sua idade em meses é: " + idade * 12 + " Meses");
alert("Sua idade em dias é: " + idade * 365 + " Dias");