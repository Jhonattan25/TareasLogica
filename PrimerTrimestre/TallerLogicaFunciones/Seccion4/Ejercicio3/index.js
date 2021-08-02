/*
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
*/
let enterNumber = parseInt(prompt("Ingrese un número"));
let flag = isDivisibleForFive(enterNumber);

if (flag) {
  console.log("El numero", enterNumber, "es divisible por 5")
}else{
  console.log("El numero", enterNumber, "no es divisible por 5")
}
function isDivisibleForFive(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}