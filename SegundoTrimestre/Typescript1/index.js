"use strict";
// Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por registrarte”. Este template debe usar dos variables, nombres y apellidos
var firstName = 'Paula';
var lastName = 'Pérez';
//console.log( `Bienvenida ${firstName} ${lastName} a nuestro sitio web, gracias por registrarte`);
// Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.
var arrayNumbers = [1, 2, 3, 4, 5];
for (var i = 0; i < arrayNumbers.length; i++) {
    //console.log(arrayNumbers[i]);
}
// Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
var arrayStrings = ['Vanessa', 'Juan', 'Jhonattan', 'Jose', 'Otoniel'];
for (var i = 0; i < arrayStrings.length; i++) {
    //console.log(arrayStrings[i]);
}
// Recorra cada array creado usando for-of e imprimiendo cada uno de sus elementos
for (var _i = 0, arrayNumbers_1 = arrayNumbers; _i < arrayNumbers_1.length; _i++) {
    var number = arrayNumbers_1[_i];
    //console.log(number);
}
for (var _a = 0, arrayStrings_1 = arrayStrings; _a < arrayStrings_1.length; _a++) {
    var string = arrayStrings_1[_a];
    //console.log(string);
}
//  cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.Implemente ejemplos prácticos.
//console.log(arrayNumbers);
arrayNumbers.push(10);
//console.log(arrayNumbers);
arrayNumbers[5] = 9;
//console.log(arrayNumbers);
arrayNumbers.pop();
//console.log(arrayNumbers);
// Una variable tipo objeto cuyos valores sean los días de la semana
// Una variable tipo objeto cuyos valores sean los números del 0 al 9
// Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores
var daysWeek = {
    Monday: 'Lunes',
    Tuesday: 'Martes',
    Wednesday: 'Miercoles',
    Thursday: 'Jueves',
    Friday: 'Viernes',
    Saturday: 'Sabado',
    Sunday: 'Domingo'
};
var numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
};
for (var key in daysWeek) {
    //console.log(daysWeek[key]);
}
for (var key in numbers) {
    //console.log(numbers[key]);
}
// eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente ejemplos prácticos.
var numbers2 = {
    zero: 0,
    one: 1,
    two: 2,
};
//console.log(numbers2);
delete numbers2.zero;
//console.log(numbers2);
numbers2['three'] = 3;
//console.log(numbers2);
numbers2['two'] = 20;
//console.log(numbers2);
// Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos.
for (var i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        // console.log(i); // Pares
    }
}
var name2 = "Juan";
var j = 0;
var cont = 0;
while (name2.length >= j) {
    if (name2.charAt(j) == "a" || name2.charAt(j) == 'e' || name2.charAt(j) == 'i' ||
        name2.charAt(j) == 'o' || name2.charAt(j) == 'u') {
        cont++;
    }
    j++;
}
//console.log(`El numero de vocales es ${cont}`);
