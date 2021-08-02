/*Ejercicio con push */

/* EL metodo push sirve para insertar un elemento al final de un arreglo */

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
    arrayNot.push(5);
}

function addNames (arrayNames){
    arrayNames.push('Vanessa Pérez');
    arrayNames.push('Jhonattan Orjuela');
    arrayNames.push('Juan Camilo Vargas');
}