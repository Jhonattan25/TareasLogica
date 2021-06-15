/*Ejercicio con foreach */

/* El metodo forEach sirve para recorrer un arreglo pasando por cada elemento*/

let arrayNotes = [3.2, 5, 4, 2.5];
showNotes(arrayNotes);
let averageNotes = calculateAverage(arrayNotes);
console.log(`El promedio de las notas es: ${averageNotes}`);

function showNotes(array){
    array.forEach(element => {
        console.log(`Las notas ingresadas son: ${element}`);
    });
}
function calculateAverage(array){
    let sum = 0;
    let average = 0;
    array.forEach(element => {
        sum += element;
    });

    average = sum / array.length;
    return average;
}