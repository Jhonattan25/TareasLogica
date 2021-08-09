/*
    3. Cree un programa que tome el lado de un cubo e imprima su volumen. 
*/

let cubeSide = parseFloat(prompt("Ingrese el lado del cubo"));
let cubeVolume = calculateCubeVolume(cubeSide);

console.log("El volumen del cubo es:", cubeVolume);

function calculateCubeVolume(side) {
    let volume = side * side * side;
    return volume;
}