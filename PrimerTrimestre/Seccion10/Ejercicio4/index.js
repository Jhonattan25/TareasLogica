/*
    4. Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se requiere un programa donde el usuario pueda consultar el día de su cita mediante su documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el cambio solicitado ha sido exitoso. Use diccionarios.
*/
let appointmentSchedule = {}; 
let enterDocument;
let enterName;
let enterDayAppointment;
let enterHourAppointment;
let enterNumber;
do {
    enterNumber = prompt("1. Para agendar cita médica  \n2. Para consultar cita médica \n3. Para cerrar el programa");
    switch (enterNumber) {
        case '1':
            enterDocument = prompt("Ingresar el número de documento");
            enterName = prompt("Ingresar nombres");
            enterDayAppointment = prompt("Ingresar día de la cita medica");
            enterHourAppointment = prompt("Ingresar la hora de la cita medica");
            scheduleMedicalAppointment(enterDocument, enterName, enterDayAppointment, enterHourAppointment);
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

function scheduleMedicalAppointment(document, name, day, hour){
    appointmentSchedule[document] = [name, day, hour];
    console.log("Se agendo la cita exitosamente");
}

function checkMedicalAppointment(document){
    if (appointmentSchedule[document]) {
        console.log(`Datos de la cita medica del usuario con el documento ${document}:\n     ${appointmentSchedule[document].join(', ')}`);
        
        let change = prompt("Ingrese si, para cambiar el día y la hora de la cita médica");
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
    appointmentSchedule[documet][1] = enterDayAppointment;
    appointmentSchedule[documet][2] = enterHourAppointment; 

    console.log("El cambio de la cita fue exitoso");
}