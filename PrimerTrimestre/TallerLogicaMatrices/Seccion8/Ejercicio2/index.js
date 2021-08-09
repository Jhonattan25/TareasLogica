/*
   2. Programe una función que permita encontrar el número menor contenido en una matriz recibida como parámetro.

*/
let array2 = [[1,2,3], [4,5,6], [7,8,9]];
findMinorNumber(array2);

function findMinorNumber(array){
    let minor = array[0][0];
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[0].length; j++) {
            if (minor > array[index][j]) {
                minor = array[index][j];
            }
        }
    }
    console.log("Número menor es: ", minor);        
}