/*
    2. Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por consola
*/

let number1 = parseInt(prompt("Ingrese Número 1"));
let number2 = parseInt(prompt("Ingrese Número 2"));
let higher = biggerNumber(number1, number2);
console.log(`El número mayor es: ${higher}`);

function biggerNumber(num1, num2){
    if (num1 > num2) {
        return num1;
    }else{
        return num2;
    }
}
