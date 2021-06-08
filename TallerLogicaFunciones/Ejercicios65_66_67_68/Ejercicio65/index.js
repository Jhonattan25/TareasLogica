/*
    65. Disena un programa que, dado un numero entero, determine si este es el doble de un numero impar. (Ejemplo: 14 es el doble de 7, que es impar.)
*/
let enterNumber = parseInt(prompt("Ingrese un número"));

if (verifyDoubleNumber(enterNumber)) {
    console.log(`El número ${enterNumber} es el doble de ${enterNumber / 2}, el cual es impar`);
}else{
    console.log(`El número ${enterNumber} no es el doble de un número impar`);
}

function verifyDoubleNumber (number){
    if (isPair(number)) {
        if(!isPair(number / 2))
            return true;               
    }
    return false;
}

function isPair (number){
    if (number % 2 == 0) 
        return true;
    return false;
}