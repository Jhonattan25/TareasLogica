/*
    6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
*/


let quantity  = parseFloat(prompt("Ingrese una cantidad"));
let porcentage = parseFloat(prompt("Ingrese un porcentaje"));

let result = quantity * (porcentage/100);

console.log('El', porcentage, '% de', quantity, 'es:', result);