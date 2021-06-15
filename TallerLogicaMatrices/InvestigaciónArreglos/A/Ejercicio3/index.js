/*Ejercicio con pop */

/* El metodo pop sirve para eliminar el ultimo elemento de un arreglo */

let arrayNotes = [3.2, 5, 4, 2.5];
let arrayNames = [];
addNotes(arrayNotes);
addNames(arrayNames);
showNotesNames(arrayNotes, arrayNames);
deletNamesNotes(arrayNames, arrayNotes);
console.log("Arreglos con elementos eliminados");
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

function deletNamesNotes(arrayNames, arrayNotes ){
    arrayNames.pop();
    arrayNotes.pop();
}