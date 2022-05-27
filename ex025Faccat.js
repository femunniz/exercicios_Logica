let saldoAtual, saldo, debito, credito, contaCorrente;

contaCorrente = parseInt(prompt("Digite o número da sua conta: "));
saldo = parseFloat(prompt("Digite o saldo da sua conta: R$ "));
debito = parseFloat(prompt("Digite o débito da sua conta: R$ "));
credito = parseFloat(prompt("Digite o crédito da sua conta: R$ "));

saldoAtual = saldo - debito + credito;

window.alert("Para a conta informada" + contaCorrente);
window.alert("O valor do saldo atual corresponde a: R$ " + saldoAtual.toFixed(2));

if (saldoAtual >= 0) {
  window.alert("Saldo Positivo");
} else {
  window.alert("Saldo Negativo");
}
