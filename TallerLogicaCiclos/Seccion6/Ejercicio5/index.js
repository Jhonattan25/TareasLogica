/*
5. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.
*/
exitProgram();

function exitProgram() {
    let s = "N";
    while(s !== "S"){
        s = prompt('Si desea salir, ingrese la letra "S"');
    }
}