/*
    1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.
*/
let nameProduct = prompt("Ingrese el nombre del producto del cual quiere saber el valor: \n Shampoo \n Crema dental \n Papel higienico \n Cepillo dental \n Desodorante ");
showProductPrice(nameProduct);

function showProductPrice(name){
    let products = {
        'Shampoo': 14000,
        'Crema dental': 3000,
        'Papel higienico': 4000,
        'Cepillo dental': 3500,
        'Desodorante': 5000
    };

    console.log(`El precio del producto ${name} es: ${products[name]}`);
}