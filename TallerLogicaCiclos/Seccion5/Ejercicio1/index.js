/*
1. Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use ciclo for. Use funciones. 
*/
numbersUpward(100);
numbersFalling(100);

function numbersUpward(number) {
    for (let index = 0; index <= number; index++) {
        console.log(`${index}`);
    }
}

function numbersFalling(number) {
    for (let index = number; index >= 0; index--) {
        console.log(`${index}`);
    }
}