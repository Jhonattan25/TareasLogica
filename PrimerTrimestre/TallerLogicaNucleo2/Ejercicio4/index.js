/*
Cree un programa que pida al usuario su edad, domicilio y
estado civil, a continuación, confirme al usuario los valores
introducidos por éste.
*/

/*
 Algoritmo mostrar_valores_usuario
    Entero age
    Cadena address
    Cadena civilStatus

    MOSTRAR "Ingrese su edad"
        age = LEER (age)
    MOSTRAR "Ingrese domicilio"
        address = LEER (address)
    MOSTRAR "Ingresar estado civil"
        civilStatus = LEER(civilStatus)
        
    MOSTRAR "La edad ingresada es: ", age
    MOSTRAR "la direccion ingresada es: ",  address
    MOSTRAR "El estado civil ingresado es:" , civilStatus
FinAlgoritmo
*/


let age = parseInt(prompt("Ingrese la edad"));
let address = prompt("Ingrese dirección");
let civilStatus= prompt("Ingrese estado civil");
console.log("La edad es:", age);
console.log("El domicilio es:", address);
console.log("El estado civil  es:", civilStatus);




