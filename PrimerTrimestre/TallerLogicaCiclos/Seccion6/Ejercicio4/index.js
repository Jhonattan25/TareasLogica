/*
4. Cree un programa que muestre los números impares entre 1 y n. 
*/
let enterN = parseInt(prompt("Ingrese n"));
showOddNumbers(enterN);

function showOddNumbers (n){
    let count = 1;
    while(count <= n){
        if (count % 2 !== 0) {
            console.log(`El número ${count} es impar`);            
        }
        count++;
    }
}