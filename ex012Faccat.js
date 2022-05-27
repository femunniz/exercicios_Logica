let celsius, fahrenheit

fahrenheit = parseFloat(prompt("Digite a temperatura em °F: "));
celsius = (5 * fahrenheit - 160) / 9;

alert("A temperatura em °C corresponde a: " + celsius.toFixed(2));