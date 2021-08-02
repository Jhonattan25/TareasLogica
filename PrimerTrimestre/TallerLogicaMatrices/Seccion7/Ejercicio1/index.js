/*
    1. Cree un programa que implemente un arreglo de cuatro elementos(números del 0 al 3) e imprima cada uno en líneas diferentes.
*/
let array2 = [0,1,2,3];
printArray(array2);

function printArray(array){
    array.forEach(element => {
        console.log("Elemento: ", element);
    })
}