/*
   Cree una función que tenga por parámetro un arreglo de números y muestre el mayor y el menor de ellos 
*/
let array2 = [10, 0, 24, 5];
showMajorMinorNumber(array2);

function showMajorMinorNumber(array){
    let major = array[0];
    let minor = array[0];

    array.forEach(element => {
       if (element > major) {
           major = element;
       }else if(element < minor){
           minor = element;
       }
    })

    console.log(`El número mayor es: ${major}`);
    console.log(`El número menor es: ${minor}`);
}