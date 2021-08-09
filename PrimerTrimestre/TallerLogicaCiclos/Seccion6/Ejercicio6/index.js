/*
6. Cree un programa que calcule el promedio de 10 números. 
*/
let enterN = parseInt(prompt("Ingrese la cantidad de números"));
let average = calculateAverage(enterN);

console.log(`El promedio de los ${enterN} números es:  ${average}`);
function calculateAverage (n){
    let count = 0;
    let index = 1;
    while(index <= n){
        count += parseFloat(prompt(`Ingrese el número ${index}`));
        index++;
    }
    return count / n;
}