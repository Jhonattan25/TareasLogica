/*
    1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro 
    de tantos años como este indique. Por ejemplo, si el usuario tiene 20 años y quiere saber cuántos 
    años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
*/

let age = parseInt( prompt("Ingrese la edad actual"));
let years = parseInt(prompt("Ingrese los años en los que quiere saber su edad futura")) ;

let futureAge = age + years;

console.log("Su edad dentro de", years, "años es: ", futureAge , "años");