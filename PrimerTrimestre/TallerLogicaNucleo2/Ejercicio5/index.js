/*
Cree un programa que pida al usuario la fecha de su
nacimiento, almacene tal valor en una constante e imprima
un mensaje al usuario notificando el día de su cumpleaños.
Recuerde hacer

 Algoritmo mostrar_valores_cumpleaños
    DATE birthDate
    MOSTRAR "Ingrese su fecha de nacimiento"
    LEER (birthDate)
    
    Constante DATE = birthDate

    MOSTRAR "Su fecha de cumpleaños es " + DATE
    
FinAlgoritmo
*/

let birthDate;

birthDate = prompt("Ingrese su fecha de nacimiento");

const DATE = birthDate;

console.log("Su fecha de cumpleaños es", DATE);

