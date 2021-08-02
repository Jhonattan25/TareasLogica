/*
    2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos.
*/
let objectPeople = storePeople();
showObject(objectPeople);

function storePeople (){
    let document;
    let name;
    let people = {};
    for (let index = 0; index < 10; index++) {
        document = prompt("Ingrese número de documento");
        name = prompt("Ingrese nombre");
        people[document] = name;
    }
    return people;
}

function showObject(object){
    for (element in object){
        console.log(object[element]);
    }
}