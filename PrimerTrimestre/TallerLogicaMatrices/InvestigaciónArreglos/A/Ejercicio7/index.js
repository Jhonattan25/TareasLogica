/*Ejercicio con slice() */

/* EL metodo slice sirve para crear una copía de un arreglo*/

let arrayNotes = [3.2, 4.5, 4, 2.5];
let newArrayNotes = increaseNotes(arrayNotes, 0.5);
addNote(arrayNotes, 4.5);
showNotes(newArrayNotes);

let arrayNames = ['Vanessa Pérez', 'Jhonattan Orjuela','Juan Camilo Vargas' ];


function showNotes(array){
    array.forEach(element => {
        console.log(`Las notas ingresadas son: ${element}`);
    });
}

function increaseNotes(array, increase){
    let newArray = array.slice();
    for (let index = 0; index < newArray.length; index++) {
        newArray[index] += increase;
    }
    return newArray;
}

function addNote(array, note){
    let newArray = array.slice();
    newArray.push(note);
}