/**
 * 7. Cree un programa que tome un número real e imprima su valor absoluto.
 */

//Libreria Math.abs()
//number = Math.abs(number);
let numberEvaluate = parseFloat(prompt("Ingrese un numero real"));
let numberEvaluated = calculateAbsoluteValue(numberEvaluate);

console.log("El numero en valor absoluto es:", numberEvaluated);

function calculateAbsoluteValue(number) {
    if(number < 0){
        number = -1 * number;
    }
    return number;
}