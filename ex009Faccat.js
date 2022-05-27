// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let salarioAtual, reajuste, salarioNovo;

salarioAtual = parseFloat(prompt("Digite o valor do seu salário: "));
reajuste = parseFloat(prompt("Digite o valor do reajuste salarial: "));

salarioNovo = salarioAtual / 100 * reajuste

alert("O valor do seu novo salário é: " + (salarioAtual+salarioNovo).toFixed(2) + " reais, parabéns!");