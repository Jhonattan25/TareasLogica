/*
    1. Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de tal manera que la función retorne la longitud(número de elementos) del arreglo.
*/
let array2 = [1,2,3,4];
let lengthA = lengthArray(array2);
console.log(`La longitud del arreglo es: ${lengthA}`);

function lengthArray(array){
    let count = 0;
    array.forEach(element => {
        count++;
    });
    return count;
}