/*
    5. Dado el siguiente arreglo [ “Colombia”, “es”, “un”,“país”, “extraordinario” ], imprima en consola el mensaje “Colombia es un país extraordinario” usando el método join.
*/

let array2 = [ 'Colombia', 'es', 'un','país', 'extraordinario' ];
printMessage(array2);

function printMessage(array){
   let message = array.join(' ');
   console.log(message);
}