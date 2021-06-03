/*
    10. Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan, con un límite de tres peticiones.
*/
verifyPassword();
function verifyPassword() {
    let flag = false;
    let passwor1;
    let passwor2;
    let count = 0;

    while (!flag && count < 3) {
        passwor1 = prompt("Escriba su contraseña");
        passwor2 = prompt("Escriba de nuevo su contraseña");
        if (passwor1 === passwor2) {
            flag = true;
        } else {
            count++;
            console.log("Las contraseñas no coinciden. Inténtelo de nuevo.");
        }
    }

    if (count === 3) {
        console.log("Lo siento, no ha confirmado la contraseña. ¡Hasta la vista!");
    } else {
        console.log("Contraseña confirmada. ¡Hasta la vista!");
    }
}