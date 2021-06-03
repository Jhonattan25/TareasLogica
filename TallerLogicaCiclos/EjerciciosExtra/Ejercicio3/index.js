/*
    3.Escriba un programa que pregunte una y otra vez si desea terminar el programa, siempre que se conteste exactamente N (en mayúsculas).
*/
continueProgram();
function continueProgram() {
    let flag = 'N'; 
    while(flag === 'N'){
        flag = prompt('DIGA N PARA CONTINUAR');
    }
    console.log('¡Hasta la vista!');
}