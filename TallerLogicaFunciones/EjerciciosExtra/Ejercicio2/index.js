/*
2. Cree una función que imprima los números enteros entre a y b (tomando a y b) y muestre el mayor de todos.
*/

let enterA = parseInt(prompt("Ingrese el valor para a "));
let enterB = parseInt(prompt("Ingrese el valor para b "));

showBiggerNumber(enterA, enterB);

function showBiggerNumber(a, b){
    console.log(`Números entre ${a} y ${b}`);   
    for (let index = a; index <= b ; index++) {
        console.log(`${index}`);
    }
    console.log(`El numero mayor es: ${b}`);
}