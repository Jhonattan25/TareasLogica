/*
    7. Dado el siguiente arreglo [1, 2, 3, 4, 500, 420,-100] elimine el elemento de índice 4 usando splice,elimine el último elemento usando pop, agregue elelemento 520 usando push. Finalmente, haga una copia “independiente del arreglo” usando slice
*/
let array2 = [1, 2, 3, 4, 500, 420,-100]; 
removeItem(array2);
addItem(array2);
copyArray(array2);

function removeItem(array){
    console.log("array original", array);
    array.splice(4, 1);
    console.log("Se elimina el elemento 4", array);
    array.pop();
    console.log("Se elimina el ultimo elemento", array);
}

function addItem(array){
    array.push(520);
    console.log("Se agrega elemento 520", array);
}

function copyArray(array){
    let copy = array.slice();
    console.log("Copia del arreglo original", copy);
}