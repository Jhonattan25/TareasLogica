/*
4. Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales también se debe mostrar al usuario.
*/

let number1 = parseInt(prompt("Ingrese numero 1"));
let number2 = parseInt(prompt("Ingrese numero 2"));
let number3 = parseInt(prompt("Ingrese numero 3"));


if(number1 > number2 && number1 > number3){
  console.log("El numero mayor es el numero 1 = ", number1);
}
if(number2 > number1 && number2 > number3){
  console.log("El numero mayor es el numero 2 = ", number2);
}
if(number3 > number1 && number3 > number2){
  console.log("El numero mayor es el numero 3 = ", number3);
}
if(number1 === number2 && number1 === number3){
  console.log("Los numeros son iguales");
}


