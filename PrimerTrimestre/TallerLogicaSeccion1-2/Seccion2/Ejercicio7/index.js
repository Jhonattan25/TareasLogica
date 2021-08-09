/**
 * 7. Cree un programa que tome un número real e imprima su valor absoluto.
 */
var number = parseFloat(prompt("Ingrese un numero real"));

//Libreria Math.abs()
//number = Math.abs(number);

if(number < 0){
    number = -1 * number;
}

console.log("El numero en valor absoluto es:", number);