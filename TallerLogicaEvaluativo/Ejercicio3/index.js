/*
    3. Dado el siguiente arreglo:
    let  arreglo= [1,2,3,4,5,6,7,8,9,10];  
    a)Usando ciclo for recorra el arreglo  imprimiendo cada uno de sus elementos.
    b)Usando forEach recorra el arreglo  imprimiendo cadauno de sus elementos.
*/

let  array2= [1,2,3,4,5,6,7,8,9,10];  
console.log("Recorrer arreglo con ciclo for");
printCiclyFor(array2);

console.log("Recorrer arreglo con ciclo forEach");
printCiclyForEach(array2);


function printCiclyFor(array){
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
function printCiclyForEach(array){
    array.forEach(element => {
        console.log(element);    
    });
}
