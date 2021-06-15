/*Ejercicio con split() */

/* EL metodo split sirve para convertir una cadena en un arreglo*/

let string2 = 'Hola Mundo';
let string3 = '1234567';
let convertArray = convertStringArray(string2);
console.log(convertArray);
let convertArray2 = convertStringArray2(string3);
console.log(convertArray2);

function convertStringArray(string){
    return string.split(' ');
}
 
function convertStringArray2(string){
    return string.split('');
}