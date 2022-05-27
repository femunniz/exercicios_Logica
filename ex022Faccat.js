let mes, valorHora, salarioFinal, ganhoHoraExtra, ganhoMensal;

mes = parseInt(prompt("Digite a quantidade de horas trabalhadas no mês: "));
valorHora = parseFloat(prompt("Digite o valor recebido por horas extras trabalhadas: "));

if (mes < 161) {
  salarioFinal = mes * valorHora;
  alert("O salário final corresponde a: " + salarioFinal.toFixed(2));
} else {
  ganhoHoraExtra = ((valorHora * 50 / 100) + valorHora) * (mes - 160);
  ganhoMensal = 160 * valorHora;
  salarioFinal = ganhoMensal + ganhoHoraExtra;
  alert("O salario final corresponde a: " + salarioFinal.toFixed(2));
}