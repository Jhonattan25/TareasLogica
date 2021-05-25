/**
 * 2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
 */

const PI = 3.14592;
let circleRadio = parseFloat(prompt("Ingrese el radio de un circulo"));

let circleArea = calculateCircleArea(circleRadio);
let circlePerimeter = calculateCirclePerimeter(circleRadio);

console.log("El area del circulo es:", circleArea);
console.log("El perimetro del circulo es:", circlePerimeter);

function calculateCircleArea(radio){
    let area = PI * ( radio * radio);
    return area;
}

function calculateCirclePerimeter(radio){
    let perimeter = 2 * PI * radio;
    return perimeter;
}