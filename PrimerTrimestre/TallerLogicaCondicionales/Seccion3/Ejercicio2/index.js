/*
  2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.
*/

let productName = (prompt("Ingrese el nombre del producto"));

if(productName === "lentejas" || productName === "arroz"){
    console.log("No paga IVA");
}
if(productName === "vino" && productName === "crema"){
    console.log("Debe pagar IVA");
}