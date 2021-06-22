/*
    8. En una empresa se requiere un sistema de informaciónque registre sus nuevos usuarios. Cada vezque un usuario se registra debe introducir los siguientesdatos: documento, nombres, apellidos, edad,peso, estatura. Cree un sistema de información quereciba los datos de registro de cada cliente porteclado, luego de realizado el registro el sistemadebe mostrar al usuario el mensaje “Registro exitoso”.Siel usuario desea consultar su registro debe poderhacerlo  a través de su documento.
*/
let users = {};
let enterDocument;
let enterName;
let enterLastName;
let enterAge;
let enterWeight;
let enterHeight;
let enterNumber;

do {
    enterNumber = prompt("1. para registrar usuarios \n2. para consultar usuario \n3. cerrar el programa");

    switch (enterNumber) {
        case '1':
            enterDocument = prompt("Ingrese número de documento");
            enterName = prompt("Ingrese nombre");
            enterLastName = prompt("Ingrese apellido");
            enterAge = prompt("Ingrese edad");
            enterWeight = prompt("Ingrese peso");
            enterHeight = prompt("Ingrese estatura");
            
            addUsers(enterDocument, enterName, enterLastName, enterAge, enterWeight, enterHeight);
            break;
        case '2':
            enterDocument = prompt("Ingrese número de documento para consultar datos");
            consultInformation(enterDocument);
            break;
        case '3':
            alert("GRACIAS POR UTILIZAR EL SISTEMA"); 
            break;
        default: 
            alert("Ingrese un número válido");
            break;
    }

} while (enterNumber != '3');

function addUsers(document,name, lastName, age, weight,height){
    users[document] = {nombre:name, apellido:lastName, edad: age, peso:weight, estatura:height};
    alert("Registro Exitoso");
}

function consultInformation(document){
    if (users[document]) {
        console.log("Datos del usuario: ");
        for (const key in users[document]) {
            console.log(`${key}: ${users[document][key]}`);   
        }
    }else{
        alert("El documento ingresado no existe");
    }
}