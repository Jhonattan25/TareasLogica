/*
    2. Escriba un programa que pregunte una y otra vez si desea terminar el programa, salvo si se contesta exactamente SI (en mayúsculas y sin tilde).
*/
endProgram();
function endProgram (){
    let flag = 'no'; 
    while(flag !== 'SI'){
        flag = prompt('DIGA SI PARA TERMINAR');
    }
    console.log('¡Hasta la vista!');
}