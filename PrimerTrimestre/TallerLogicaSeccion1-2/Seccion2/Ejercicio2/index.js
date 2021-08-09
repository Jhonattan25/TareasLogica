/**
 * 2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
 */

const PI = 3.14592;
let radio = parseFloat(prompt("Ingrese el radio de un circulo"));

let area = PI * ( radio * radio);
let perimeter = 2 * PI * radio;

console.log("El area del circulo es:", area);
console.log("El perimetro del circulo es:", perimeter);