let time1, time2, gols1, gols2;

time1 = String(prompt("Digite o nome do primeiro time: "));
time2 = String(prompt("Digite o nome do segundo time: "));
gols1 = parseInt(prompt("Digite quantos gols o time 01 fez: "));
gols2 = parseInt(prompt("Digite quantos gols o time 02 fez: "));

if (gols1 == gols2) {
  window.alert("Os times empataram");
} else if (gols1 > gols2) {
  window.alert("O time " + time1 + " ganhou pelo placar de : " + gols1 + "X" + gols2);
} else {
  window.alert("O time " + time2 + " ganhou pelo placar de : " + gols2 + "X" + gols1);
}