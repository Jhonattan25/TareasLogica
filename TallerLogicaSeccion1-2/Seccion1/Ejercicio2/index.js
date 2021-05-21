/*
    2. Cree un programa que lea dos números y muestre su producto, su cociente, su suma y su resta.
*/


let number1 = parseFloat(prompt("Ingrese numero 1"));
let number2 = parseFloat(prompt("Ingrese numero 2"));

let multiplication = number1 * number2;
let division = number1 / number2;
let sum = number1 + number2;
let subtraction = number1 - number2;

console.log("La multipliaicion de", number1, " y", number2, " es:", multiplication);
console.log("La division de", number1, "y", number2, "es:", division);
console.log("La suma de", number1, "y", number2, "es:", sum);
console.log("La resta de", number1, "y", number2, "es:", subtraction);