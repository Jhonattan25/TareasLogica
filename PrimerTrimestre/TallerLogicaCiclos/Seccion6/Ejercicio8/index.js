/*
8. Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
*/
let enterN = parseFloat(prompt("Ingrese n"));
let sumSquares = calculateSumSquares(enterN);
console.log(`La suma de los cuadrados entre los numeros 1 y ${enterN} es: ${sumSquares}`);

function calculateSumSquares(n) {
    let count = 1;
    let sum = 0;
    while(count <= n){
        sum += count * count;
        count++;
    }
    return sum;
}