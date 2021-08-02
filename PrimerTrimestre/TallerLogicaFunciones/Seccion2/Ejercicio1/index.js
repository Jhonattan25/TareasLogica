/**
 *  1. Cree un programa que tome la base y la altura de un triángulo e imprima su área. 
 */

let triangleBase = parseFloat(prompt("Ingrese la base del triangulo"));
let triangleHeight = parseFloat(prompt("Ingrese la altura del triangulo"));

let triangleArea = calculateTriangleArea(triangleBase, triangleHeight);

console.log("El area del triangulo con base", triangleBase, "y altura", triangleHeight, "es:", triangleArea);

function calculateTriangleArea(base, height){
    let area = (base * height) / 2;
    return area;
}