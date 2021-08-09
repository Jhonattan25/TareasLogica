/*
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.

*/
let enterNumber = parseInt(prompt("Ingrese un número"));
let flag = isEvenNumber(enterNumber);

if(flag){
  console.log("El número", enterNumber, "es par");
}else{
  console.log("El número", enterNumber, "es impar");
}

function isEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false
}