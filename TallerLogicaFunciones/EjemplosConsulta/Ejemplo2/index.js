/*
    Cree un programa que tome el precio de un producto e imprima su precio final 
    al consumidor con un IVA de 19%.
*/
let productPrice = parseFloat(prompt("Ingrese el valor de un producto"));
let finalProductPrice = calculateFinalProductPrice(productPrice); 

console.log("El precio final del producto con un IVA de", 0.19, "es:", finalProductPrice); 

function calculateFinalProductPrice(price, iva = 0.19){
    let finalPrice = price + (price * iva);
    return finalPrice;
}