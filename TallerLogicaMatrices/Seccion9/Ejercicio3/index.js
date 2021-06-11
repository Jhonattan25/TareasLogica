/*
    Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado. 
*/
let array2 = [1, 2, 4, 5];
let sum2 = sumSquares(array2);
console.log(`La suma de los cuadrados es: ${sum2}`);

function sumSquares(array){
    let sum = 0;
    array.forEach(element => {
        sum += element * element;
    })
    return sum;
}