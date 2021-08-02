/*
1 Cree un programa que muestre los números naturales de 1 a n. Use ciclo while 
*/
let enterN = parseInt(prompt("Ingrese n"));
showNaturalNumbers(enterN);

function showNaturalNumbers(n) {
    let count = 1;
    while(count <= n){
        console.log(count);
        count++;
    }
}