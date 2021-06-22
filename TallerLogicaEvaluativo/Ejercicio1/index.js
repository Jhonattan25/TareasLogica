let age2 = parseInt(prompt("Ingrese edad"));
validateAge(age2);

function validateAge(age){
   
    switch (age) {
        case 15:
            console.log("Tiene 15");            
            break;
        case 20:
            console.log("Tiene 20");            
            break;
        case 30:
            console.log("Tiene 30");
            break;
        default:
            console.log("Introduzca una edad válida");
            break;
    }
}