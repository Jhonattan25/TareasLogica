/*
3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones. 
*/
let enterNumberEstudents = parseInt(prompt("Ingrese el número de estudiantes"));
showAverage(enterNumberEstudents);

function showAverage(numberEstudents) {
    let score1;
    let score2;
    let score3;
    let average;
    for (let index = 1; index <= numberEstudents; index++) {
        score1 = parseFloat(prompt(`Ingrese nota 1 del estudiante ${index}`));
        score2 = parseFloat(prompt(`Ingrese nota 2 del estudiante ${index}`)); 
        score3 = parseFloat(prompt(`Ingrese nota 3 del estudiante ${index}`)); 
        average = calculateGrades(score1, score2, score3);

        console.log(`El promedio de las notas del estudiante ${index} es: ${average}`);
    }
}

function calculateGrades(score1, score2, score3) {
    let sum = score1 + score2 + score3;
    let average = sum / 3;
    return average;
}