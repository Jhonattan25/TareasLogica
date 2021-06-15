/*Ejercicio con splice() */

/* EL metodo splice sirve para eliminar un elemento de un arreglo segun la posicion indicada*/

let arrayNotes = [3.2, 5, 4, 2.5];
let arrayNames = ['Vanessa Pérez', 'Jhonattan Orjuela','Juan Camilo Vargas' ];
showNotesNames(arrayNotes, arrayNames);

deleteNamePosition(arrayNames, 1);
deleteNotePosition(arrayNotes, 2);

showNotesNames(arrayNotes, arrayNames);

function showNotesNames(arrayNot, arrayNam){
    arrayNot.forEach(element => {
        console.log(`Las nota ingresada es: ${element}`);
    });
    arrayNam.forEach(element => {
        console.log(`Nombres: ${element}`);
    });
}

function deleteNamePosition(array, pos){
    array.splice(pos, 1);
}

function deleteNotePosition(array, pos){
    array.splice(pos, 1);
}