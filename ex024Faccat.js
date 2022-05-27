let salario, vendas, salarioFinal;

salario = parseFloat(prompt("Digite o valor do seu salário: "));
vendas = parseFloat(prompt("Digite o valor das suas vendas normais: "));

if (vendas < 1500) {
  salarioFinal = vendas / 100 * 3 + salario;
} else {
  salarioFinal = (vendas - 1500) / 100 * 5 + (1500 / 100 * 3) + salario;
}

window.alert("O seu salário final no mês é de: R$ " + salarioFinal);