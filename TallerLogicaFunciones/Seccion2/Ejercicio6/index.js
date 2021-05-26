/*
    6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
*/
let quantity1  = parseFloat(prompt("Ingrese una cantidad"));
let percentage1 = parseFloat(prompt("Ingrese un porcentaje"));

let quantityPercentage = calculateQuantityPercentage(quantity1, percentage1);
console.log('El', percentage1, '% de', quantity1, 'es:', quantityPercentage);

function calculateQuantityPercentage(quantity, percentage){
    let result = quantity * (percentage/100);
    return result;
}