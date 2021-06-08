/*
    66. Disena un programa que, dados dos numeros enteros, muestre por pantalla uno de estos mensajes: ((El segundo es el cuadrado exacto del primero.)), ((El segundo es menor que el cuadrado del primero.)) o ((El segundo es mayor que el cuadrado del primero.)), dependiendo de la verificacion de la condicion correspondiente al significado de  cada mensaje. 
*/
let num1 = parseInt(prompt("Ingrese número 1"));
let num2 = parseInt(prompt("Ingrese número 2"));

verifySquare(num1, num2);

function verifySquare(number1, number2){
    let square = number1 * number1;
    if (square === number2) {
        console.log(`El segundo (${number2}) es el cuadrado exacto del primero (${number1}).`);
    }else if (square > number2) {
        console.log(`El segundo (${number2}) es menor que el cuadrado del primero (${number1}).`);
    }else if(square < number2){
        console.log(`El segundo (${number2}) es mayor que el cuadrado del primero (${number1}).`);
    }
}
