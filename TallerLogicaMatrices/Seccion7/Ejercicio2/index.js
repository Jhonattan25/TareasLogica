/*
    2. Cree un programa que implemente un arreglo de 10 elementos(los dígitos), ordenados de menor a mayor e imprima cada uno de ellos en el mismo orden en el que se encuentran en el arreglo. Luego, invierta el orden de todos los elementos del arreglo, haciendo que el último pase a ser el primero, el penúltimo pase a ser el segundo, así sucesivamente, e imprima nuevamente cada elemento en el mismo orden en el que ahora se encuentran en el arreglo.
*/
let array2 = [0,1,2,3, 4, 5, 6, 7, 8, 9];
printArray(array2);
console.log("---Arreglo invertido---");
let reverseArray2 = reverseArray(array2);
printArray(reverseArray2);

function printArray(array){
    array.forEach(element => {
        console.log("Elemento: ", element);
    })
}

function reverseArray(array){
    let newArray = [];
    for(i = array.length-1; i >= 0; i--){
        newArray.push(array[i]); 
    }
    return newArray;
}