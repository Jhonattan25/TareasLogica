/*
    5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
*/

const DISCOUNT = 0.10;
let productPrice = parseFloat(prompt("Ingrese el valor de un producto"));
let finalPrice = productPrice - (productPrice * DISCOUNT);
console.log("El precio final del producto con descuento de", DISCOUNT, "es:", finalPrice);