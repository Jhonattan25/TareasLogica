/*
    4. Dado el siguiente diccionario:
    let persona= {edad:20,peso:75,nombres:"Pedro",apellidos:"Pérez Pérez"};

    Usando for in itere sobre las claves del objeto imprimiendo sus respectivos valores.Cambie el valor de la clave peso por 77 usando forma1 (arreglo.clave)Cambie el valor de la clave edad por 21 usando  forma2 (diccionario[clave])Elimine la clave apellidos
*/

let person2= {edad:20,peso:75,nombres:"Pedro",apellidos:"Pérez Pérez"};
console.log("mostrar datos");
showDataPerson(person2);

console.log("Cambiar datos");
changeData(person2);

console.log("Eliminar apellidos");
deleteLastName(person2);

function showDataPerson(person){
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

function changeData(person){
    person.peso = 77;
    person['edad'] = 21;
    showDataPerson(person);
}

function deleteLastName(person){
    delete person.apellidos;
    showDataPerson(person);
}





