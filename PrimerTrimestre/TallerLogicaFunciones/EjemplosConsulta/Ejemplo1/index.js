/**
 *  Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
 */
let circleRadio = parseFloat(prompt("Ingrese el radio de un circulo"));

let circleArea = calculateCircleArea(circleRadio);
let circlePerimeter = calculateCirclePerimeter(circleRadio, 3.14);

console.log("El area del circulo es:", circleArea);
console.log("El perimetro del circulo es:", circlePerimeter);

function calculateCircleArea(radio, pi = 3.14592){
    let area = pi * ( radio * radio);
    return area;
}

function calculateCirclePerimeter(radio, pi = 3.14592){
    let perimeter = 2 * pi * radio;
    return perimeter;
}