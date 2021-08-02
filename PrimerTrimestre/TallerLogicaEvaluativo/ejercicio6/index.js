/*
    6. Dada la siguiente cadena “Programar es algo genial,todos deberían intentarlo, atrévete!” genere elsiguiente arreglo [“Programar es algo genial”, “todosdeberían intentarlo”, “atrévete!”] usando el métodosplit. 
*/

let string2 = "Programar es algo genial,todos deberían intentarlo, atrévete!"
generateArray(string2);

function generateArray(string){
    let array = string.split(',');
    console.log(array);
}