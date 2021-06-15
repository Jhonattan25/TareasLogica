/*Ejercicio con indexOf */

/* El metodo indexOf sirve para saber la posicion de un elemento*/

let arrayNotes = [3.2, 5, 4, 2.5];
let arrayNames = ['Vanessa Pérez', 'Jhonattan Orjuela','Juan Camilo Vargas' ];
showNotesNames(arrayNotes, arrayNames);

let posName = namePosition(arrayNames, 'Vanessa Pérez');
let posNote = notePosition(arrayNotes, 5);

console.log(`El nombre Vanessa Pérez esta en la posicion ${posName}`);
console.log(`La nota con valor de 5 esta en la posicion ${posNote}`);

function showNotesNames(arrayNot, arrayNam){
    arrayNot.forEach(element => {
        console.log(`Las nota ingresada es: ${element}`);
    });
    arrayNam.forEach(element => {
        console.log(`Nombres: ${element}`);
    });
}

function namePosition(array, name){
    return array.indexOf(name);
}

function notePosition(array, note){
    return array.indexOf(note);
}