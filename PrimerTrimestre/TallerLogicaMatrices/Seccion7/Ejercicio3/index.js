/*
    3. Dado el arreglo [1,2,3,4,5,6]
    ● Iterar por todos los elementos dentro del arreglo utilizando while y        mostrarlos en pantalla.
    ● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
    ● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
    ● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
    ● Calcular el promedio de todos los elementos del arreglo
*/
let array2 = [1,2,3,4,5,6];

console.log("Ciclo while");
iterateArrayCiclyWhile(array2);

console.log("Ciclo for");
iterateArrayCiclyFor(array2)

console.log("Suma uno a cada elemento");
sumOneArray(array2.slice());

console.log("Suma uno a la copia del array");
sumaOneCopyArray(array2.slice());

console.log("Promedio de los elementos del arreglo");
calculateAverage(array2);

function iterateArrayCiclyWhile(array){
    let i = 0;
    while(i < array.length){
        console.log("Elemento: ", array[i]);
        i++;
    }
}

function iterateArrayCiclyFor(array){
    for (let index = 0; index < array.length; index++) {
        console.log("ELemento: ",  array[index]);        
    }
}

function sumOneArray(array){
    for (let index = 0; index < array.length; index++) {
        array[index] += 1; 
        console.log("ELemento: ",  array[index]);        
    }
}

function sumaOneCopyArray(array){
  let copy = array.slice();  
  for (let index = 0; index < copy.length; index++) {
      copy[index] += 1; 
      console.log("ELemento: ",  copy[index]);        
  }
}

function calculateAverage(array){
    let sum = 0;
    let average = 0;
    array.forEach(element => {
        sum += element;
    });
    average = sum / array.length;
    console.log(`El promedio de los elementos es: ${average}`);
}