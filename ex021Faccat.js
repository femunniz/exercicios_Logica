let HoraInicio, HoraFim, duracao;

HoraInicio = parseInt(prompt("Digite a hora de início do jogo: "));
HoraFim = parseInt(prompt("Digte a hora que o jogo terminou: "));

duracao = HoraFim - HoraInicio + 24;

if (duracao <0) {
  duracao = duracao + 24;
  alert("O tempo total jogado foi de: " + duracao + " horas");
} else {
  alert("O tempo total jogado foi de: " + duracao + " horas")
}