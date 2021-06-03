/*
    5. Escriba un programa que pregunte una y otra vez si desea continuar con el programa, siempre que se conteste S o s (en mayúsculas o en minúsculas).
*/
continueProgram();
function continueProgram (){
    let flag = 'S'; 
    while(flag === 'S' || flag === 's' ){
        flag = prompt('DIGA S O s PARA CONTINUAR');
    }
    console.log('¡Hasta la vista!');
}