/*Ejercicio con join() */

/* EL metodo join sirve para convertir un arreglo en una cadena*/

let array = ['Hola', 'Mundo']; 
let array2 = ['viento', 'agua', 'lluvia', 'fuego']; 
let convertArray = convertArrayString(array);
console.log(convertArray);
let convertArray2 = convertArrayString2(array2);
console.log(convertArray2);

function convertArrayString(array){
    return array.join(" ");
} 

function convertArrayString2(array){
    return array.join(",");
}

