/**
2. Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones.
*/
showMultiplicationTable3(50);

function showMultiplicationTable3(number) {
    for (let index = 0; index <= number; index = index + 3) {
        console.log(`${index}`);
    }
}