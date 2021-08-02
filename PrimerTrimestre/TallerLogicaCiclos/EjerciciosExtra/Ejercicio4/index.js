/*
    4.Escriba un programa que pregunte una y otra vez si desea continuar el programa, salvo si se contesta exactamente no (en minúsculas).
*/
endProgram();
function endProgram (){
    let flag = 'si'; 
    while(flag !== 'no'){
        flag = prompt('DIGA no PARA TERMINAR');
    }
    console.log('¡Hasta la vista!');
}