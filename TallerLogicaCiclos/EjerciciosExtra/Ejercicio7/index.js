/*
7. Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan.
*/
verifyPassword();
function verifyPassword(){
    let flag = false;
    let passwor1;
    let passwor2;
    while (!flag) {
        passwor1 =  prompt("Escriba su contraseña");
        passwor2 = prompt("Escriba de nuevo su contraseña");
        if (passwor1 === passwor2) {
            flag = true;
        }else{
            console.log("Las contraseñas no coinciden. Inténtelo de nuevo");
        }
    }
    console.log("Contraseña confirmada. ¡Hasta la vista!");
}