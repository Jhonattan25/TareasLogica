/*
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/
let angleOne = parseInt(prompt("Ingrese angulo 1 del triangulo"));
let angleTwo = parseInt(prompt("Ingrese angulo 2 del triangulo"));
let angleThree = parseInt(prompt("Ingrese angulo 3 del triangulo"));
let flag = defineTriangle(angleOne, angleTwo, angleThree);

if(flag){
  console.log("Los ángulos corresponden a un triángulo");
}else{
  console.log("Los ángulos no corresponden a un triángulo");
}

function defineTriangle(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  if (sum === 180) {
    return true;
  }
  return false;
}