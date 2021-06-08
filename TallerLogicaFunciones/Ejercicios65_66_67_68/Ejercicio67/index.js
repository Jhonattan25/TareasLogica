/*
    67. Un capital de C euros a un interes del x por cien anual durante n años se convierte en C · (1+x/100)n euros. Disena
    un programa JavaScript que solicite la cantidad C y el interes x y calcule el capital final solo si x es una cantidad positiva
*/

let cap = parseFloat(prompt("Ingrese Capital"));
let int = parseFloat(prompt("Ingrese Interes"));
let per = parseInt(prompt("ingrese periodo de tiempo"));

let finCapital = calculateFinalCapital(cap, int, per);

console.log(`El capital final es: ${finCapital}`);

function calculateFinalCapital (capital, interest, n){
    let finalCapital = 0;
    if (interest >= 0) {
        finalCapital = capital * ((1 + interest/100) ** n);
        return finalCapital;
    }else{
        console.log(`El interes ingresado ${interest} debe ser un valor positivo`);
    }
}
