/*
3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.
*/
let enterA = parseInt(prompt("Ingrese el valor para a "));
let enterB = parseInt(prompt("Ingrese el valor para b "));
showMiddlePoint(enterA, enterB);

function showMiddlePoint(a, b){
    let sum = 0;

    for (let index = a; index <= b ; index++) {
        sum += index;
    }
    middlePoint = sum / 2;
    console.log(`El punto medio entre ${a} y ${b} es: ${middlePoint}`);  
}