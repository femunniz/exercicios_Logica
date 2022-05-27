// ----- FORMAS DE EXIBIR UMA MENSAGEM NA TELA -----

/*
alert('Oi');
console.log('Oi');
document.write('Oi');
document.getElementById('ads').innerHTML = ('Muniz');
*/

let custoFabrica, custoDistribuidor, custoImposto, custoConsumidor;

custoFabrica = parseFloat(prompt("Digite o custo de produção: "));

custoDistribuidor = custoFabrica * 28 / 100;
custoImposto = custoFabrica * 45 / 100;
custoConsumidor = (custoFabrica + custoDistribuidor + custoImposto);

alert("O valor final ao consumidor é de R$ " + custoConsumidor);