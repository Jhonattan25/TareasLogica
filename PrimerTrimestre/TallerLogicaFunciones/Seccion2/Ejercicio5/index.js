/*
    5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
*/
const DISCOUNT = 0.10;
let productPrice = parseFloat(prompt("Ingrese el valor de un producto"));
let finalProductoPrice = calculateFinalProductPrice(productPrice);

console.log("El precio final del producto con descuento de", DISCOUNT, "es:", finalProductoPrice);

function calculateFinalProductPrice(price){
    let finalPrice = price - (price * DISCOUNT);
    return finalPrice;
}