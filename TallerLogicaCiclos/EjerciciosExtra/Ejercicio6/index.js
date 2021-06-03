/*
    6. Escriba un programa que pregunte una y otra vez si desea terminar el programa, salvo si se contesta S o s (en mayúsculas o en minúsculas).
*/
endProgram();
function endProgram (){
    let flag = 'no'; 
    while(flag !== 'S' && flag !== 's' ){
        flag = prompt('DIGA S O s PARA TERMINAR');
    }
    console.log('¡Hasta la vista!');
}