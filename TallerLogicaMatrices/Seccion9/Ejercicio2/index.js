/*
    2. Dado los siguientes arreglos arreglo1 = [ [“A”, “B”, “C”], [“D”, “E”, “F”], [“G”, “H”, “I”] ] y arreglo2 = [ [“J”, “K”, “L”], [“M”, “N”, “O”], [“P”, “Q”, “R”] ] , use ciclos para intercambiar los elementos de los arreglos. 
*/
let ar1 = [ ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']] ;
let ar2 = [ ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']];

exchangeArrays(ar1, ar2);

function exchangeArrays(array1, array2){
    let length = array1[0].length;

    console.log("Arreglos iniciales");
    console.log(`Arreglo 1 = ${array1}`);
    console.log(`Arreglo 2 = ${array2}`);

    for (let index = 0; index < array1.length; index++) {
        for (let index2 = 0; index2 < length; index2++) {
            array1[index].push(array2[index][index2]);
            array2[index].push(array1[index][index2]);
        }        
        array1[index].splice(0, length);
        array2[index].splice(0, length);
    }
    console.log("Arreglos intercambiados");
    console.log(`Arreglo 1 = ${array1}`);
    console.log(`Arreglo 2 = ${array2}`);
}