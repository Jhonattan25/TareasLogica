/*
2. Cree una función que imprima los números enteros entre a y b (tomando a y b) y muestre el mayor de todos.
*/
let enterA = parseInt(prompt("Ingrese el valor para a "));
let enterB = parseInt(prompt("Ingrese el valor para b "));

let biggerNumber = showBiggerNumber(enterA, enterB);
console.log(`El numero mayor es: ${biggerNumber}`);

function showBiggerNumber(a, b){
    let bigger = a;
    console.log(`Números entre ${a} y ${b}`);   

    while(a <= b){
        console.log(`Numero: ${a}`);
        if(a > bigger){
            bigger = a;
        }
        a++;
    }
    return bigger;
}