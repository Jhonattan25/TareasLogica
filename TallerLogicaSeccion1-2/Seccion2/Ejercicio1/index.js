/**
 *  1. Cree un programa que tome la base y la altura de un triángulo e imprima su área. 
 */

let base = parseFloat(prompt("Ingrese la base del triangulo"));
let height = parseFloat(prompt("Ingrese la altura del triangulo"));

let area= (base * height) / 2;

console.log("El area del triangulo con base", base, "y altura", height, "es:"  , area);