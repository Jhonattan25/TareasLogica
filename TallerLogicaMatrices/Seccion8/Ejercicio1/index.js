/*
    1. Dado el siguiente arreglo [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]:

    -Iterar por todos los elementos del arreglo utilizando while y mostrarlos en pantalla.

    -Iterar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.

    -Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1. Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal cual se piden.

    -Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo
*/

let array2 = [[1,2,3], [4,5,6], [7,8,9]];

console.log("Ciclo while");
iterateArrayCiclyWhile(array2);

console.log("Ciclo for");
iterateArrayCiclyFor(array2)

console.log("Suma uno a cada elemento");
sumOneArray(array2);

console.log("Promedio de los elementos del arreglo");
calculateAverage(array2);

function iterateArrayCiclyWhile(array){
    let i = 0;
    let j = 0;
    while(i < array.length){
        while (j < array[0].length) {
            console.log("Elemento: ", array[i][j]);
            j++;
        }
        i++;
        j = 0;
    }
}

function iterateArrayCiclyFor(array){
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[0].length; j++) {
            console.log("ELemento: ",  array[index][j]);        
        }
    }
}

function sumOneArray(array){
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push([]);
        for (let j = 0; j < array[0].length; j++) {
            newArray[index].push(array[index][j] + 1);
            console.log("ELemento: ",  newArray[index][j]);        
        }        
    }
}

function calculateAverage(array){
    let sum = 0;
    let average = 0;
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[0].length; j++) {
            sum += array[index][j];        
        }        
    }
    average = sum / (array.length * array[0].length);
    console.log(`promedio = ${average}`);
}