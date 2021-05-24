/*
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let angle1 = parseInt(prompt("Ingrese angulo 1 del triangulo"));
let angle2 = parseInt(prompt("Ingrese angulo 2 del triangulo"));
let angle3 = parseInt(prompt("Ingrese angulo 3 del triangulo"));

let sum = angle1 + angle2 + angle3;
if (sum === 180) {
  console.log("Los ángulos corresponden a un triángulo");
} else {
  console.log("Los ángulos no corresponden a un triángulo");
}

/*con switch*/
switch (sum) {
  case 180:
    console.log("Los ángulos corresponden a un triángulo");
    break;
  default:
    console.log("Los ángulos no corresponden a un triángulo");
    break;
}