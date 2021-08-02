/*
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.

*/

let number = parseInt(prompt("Ingrese un número"));

if (number % 2 === 0) {
  console.log("El número", number, "es par");
} else {
  console.log("El número", number, "es impar");
}

/*Switch*/
switch (number % 2) {
  case 0:
    console.log("El número", number, "es par");
    break;
  default:
    console.log("El número", number, "es impar");
    break;
}
