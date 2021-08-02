/*Ejercicio con unshift */

/* El metodo unshift sirve para insertar un elemento al inicio de un arreglo */

let arrayNotes = [3.2, 5, 4, 2.5];
let arrayNames = [];
addNotes(arrayNotes);
addNames(arrayNames);
showNotesNames(arrayNotes, arrayNames);

function showNotesNames(arrayNot, arrayNam){
    arrayNot.forEach(element => {
        console.log(`Las nota ingresada es: ${element}`);
    });
    arrayNam.forEach(element => {
        console.log(`Nombres: ${element}`);
    });
}

function addNotes(arrayNot){
    arrayNot.unshift(5);
}

function addNames (arrayNames){
    arrayNames.unshift('Vanessa Pérez');
    arrayNames.unshift('Jhonattan Orjuela');
    arrayNames.unshift('Juan Camilo Vargas');
}