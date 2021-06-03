/*
    1. Escriba un programa que pregunte una y otra vez si desea continuar con el programa, siempre que se conteste exactamente sí (en minúsculas y con tilde).
*/
continueProgram();
function continueProgram (){
    let flag = 'sí'; 
    while(flag === 'sí'){
        flag = prompt('DIGA sí PARA CONTINUAR');
    }
    console.log('¡Hasta la vista!');
}