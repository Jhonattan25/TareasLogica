/*
7. Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan.
*/
app();

function app(){
    let flag = false;
    let password1;
    let password2;
    while (!flag) {
        password1 =  prompt("Escriba su contraseña");
        password2 = prompt("Escriba de nuevo su contraseña");
        if ( verifyPassword(password1, password2) ) {
            flag = true;
        }else{
            console.log("Las contraseñas no coinciden. Inténtelo de nuevo");
        }
    }
    console.log("Contraseña confirmada. ¡Hasta la vista!");
}

function verifyPassword(pass1, pass2){
    return pass1 === pass2;
}