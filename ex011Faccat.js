// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let salarioFixo, valorTotalVendas, valorCarrosVendidos, salarioFinal, numeroCarrosVendidos;

salarioFixo = parseFloat(prompt("Digite o valor do seu salário fixo: "));
numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
valorCarrosVendidos = parseFloat(prompt("Digite o valor ganho por cada carro vendido: "));
valorTotalVendas = parseFloat(prompt("Digite o valor de suas vendas mensais: "));

salarioFinal = (salarioFixo + numeroCarrosVendidos + valorCarrosVendidos + valorTotalVendas * 5 / 100)

alert("O salário final do vendedor é R$ " + salarioFinal);