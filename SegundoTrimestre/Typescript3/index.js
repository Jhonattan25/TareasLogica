"use strict";
//* Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante console.log
let promise1 = new Promise((resolve, reject) => {
    resolve('Somos programadores, hacemos mover el mundo');
});
promise1.then((res) => {
    //console.log(res);
}).catch((err) => {
    console.log('ERROR:', err);
});
//* Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log
let promise2 = new Promise((resolve, reject) => {
    reject('Ha ocurrido un error desconocido');
});
promise2.then((res) => {
    console.log(res);
}).catch((err) => {
    //console.log(err);
});
//* La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la promesa con console.log. En caso de que la variable contenga un valor no válido la promesa se debe rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message), tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el reject al catch como parámetro de nombre err.
let stratum = 2;
let promise3 = new Promise((resolve, reject) => {
    if (stratum >= 1 && stratum <= 6) {
        if (stratum <= 2) {
            resolve('El usuario tiene derecho al subsidio');
        }
        else {
            resolve('El usuario no tiene derecho al subsidio');
        }
    }
    else {
        reject(new Error('Estrado no válido'));
    }
});
promise3.then((res) => {
    //  console.log(res);
}).catch((err) => {
    //  console.log('Ha ocurrido un error:', err.message);  
});
//* Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el resultado final del encadenamiento
let promise4 = new Promise((resolve, reject) => {
    resolve(2);
});
promise4.then((res) => {
    return res * 2;
}).then((res) => {
    return res * 2;
}).then((res) => {
    return res * 2;
}).then((res) => {
    res = res * 2;
    console.log('El valor final es:', res);
}).catch((err) => {
    console.log('Ha ocurrido un error:', err);
});
