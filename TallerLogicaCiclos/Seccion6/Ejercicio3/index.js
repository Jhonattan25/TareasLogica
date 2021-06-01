/*
3. Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50. 
*/
let enterN = parseInt(prompt("Ingrese n"));
showMultiplicationTable(enterN);

function showMultiplicationTable(n) {
    let count = 0;
    while(count < n){
        count = count + 10;
        console.log(`${count}`);
    }
}