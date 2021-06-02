/*
1. Cree una función que imprima los números enteros entre a y b (tomando a y b) y muestre el promedio de todos los números.
 */
let enterA = parseInt(prompt("Ingrese el valor para a "));
let enterB = parseInt(prompt("Ingrese el valor para b "));

let average2 = showIntegerNumbers(enterA, enterB);
console.log(`El promedio es: ${average2}`);

function showIntegerNumbers(a, b){
    let sum = 0;
    let average; 

    console.log(`Números entre ${a} y ${b}`);   
    for (let index = a; index <= b ; index++) {
        console.log(`${index}`);
        sum += index;
    }
    average = sum / (b - a + 1);
    return average;
}