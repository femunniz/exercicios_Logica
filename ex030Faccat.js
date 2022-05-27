let n1, n2, n3;

n1 = parseInt(prompt("Digite o primeiro número: "));
n2 = parseInt(prompt("Digite o segundo número: "));
n3 = parseInt(prompt("Digite o terceiro número: "));

if (n1 < n2 & n2 < n3) {
    window.alert(n1 + "," + n2 + "," + n3);
} else if (n1 < n2 & n2 > n3 & n3 > n1) {
    window.alert(n1 + "," + n3 + "," + n2);
} else if (n1 > n2 & n2 < n3 & n1 < n3) {
    window.alert(n2 + "," + n1 + "," + n3);
} else if (n1 < n2 & n1 > n3) {
    window.alert(n3 + "," + n1 + "," + n2);
} else if (n2 < n1 & n3 > n2) {
    window.alert(n2 + "," + n3 + "," + n1);
} else {
    window.alert(n3 + "," + n2 + "," + n1);
}