/*
    4. Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se requiere un programa donde el usuario pueda consultar el día de su cita mediante su documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el cambio solicitado ha sido exitoso. Use diccionarios.
*/

let appointmentSchudule = {}; 
let enterDocument;
let enterName;
let enterDayAppointment;
let enterHourAppointment;
let enterNumber;
do {
    enterNumber = prompt("1. para agendar cita médica  \n 2. para consultar cita médica \n 3. para cerrar el programa");
    switch (enterNumber) {
        case '1':
            enterDocument = prompt("Ingresar el número de documento");
            enterName = prompt("Ingresar nombres");
            enterDayAppointment = prompt("Ingresar día de la cita medica");
            enterHourAppointment = prompt("Ingresar la hora de la cita medica");
            schuduleMedicalAppointment(enterDocument, enterName, enterDayAppointment, enterHourAppointment);
        break;
        case '2':
            enterDocument = prompt("Ingresar el número de documento");
            checkMedicalAppointment(enterDocument);
        break;

        default:
            enterNumber = '3';
        break;
    }

} while (enterNumber !=  '3');

function schuduleMedicalAppointment(document, name, day, hour){
    appointmentSchudule[document] = [name,day,hour];
    console.log("Se agendo la cita exitosamente");
}

function checkMedicalAppointment(document){
    if (appointmentSchudule[document]) {
        console.log(`Datos de la cita medica del usuario con el documento: ${document} \n     ${appointmentSchudule[document]}`);
        
        let change = prompt("Ingrese sí, si desea cambiar el día o la hora de la cita médica");
        if (change === 'si') {
            changeMedicalAppointment(document);
        }        
    }else{
        console.log(`El usuario con el documento ${document} no tiene agendada una cita medica`);
    }
}

function changeMedicalAppointment(documet){
    enterDayAppointment = prompt("Ingresar día de la cita medica");
    enterHourAppointment = prompt("Ingresar la hora de la cita medica");
    appointmentSchudule[documet][1] = enterDayAppointment;
    appointmentSchudule[documet][2] = enterHourAppointment; 

    console.log("El cambio de la cita fue exitoso");
}