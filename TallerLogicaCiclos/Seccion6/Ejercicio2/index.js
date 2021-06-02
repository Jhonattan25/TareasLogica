/*
2. Cree un programa que calcula la suma de los primeros n números naturales. 
*/
let enterN = parseInt(prompt("Ingrese n"));
let sum2 = caculateSum(enterN);
console.log(`La suma de los primeros ${enterN} numeros naturales es: ${sum2}`);

function caculateSum(n) {
    let sum = 0;
    let count = 1;
    while(count <= n){
        sum += count;
        count++;
    }
    return sum;
}