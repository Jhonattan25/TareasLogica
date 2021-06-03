/*
    9. Escriba un programa que mejore la simulación de la hucha del ejercicio anterior, no permitiendo que se escriban cantidades negativas.
*/
simulateHucha();
function simulateHucha() {
    let amount = parseFloat(prompt("¿Cuántos euros quiere ahorrar?"));
    let hucha = 0;
    let money;

    while (hucha < amount || amount < 0) {
        if (amount > 0) {
            money = parseFloat(prompt("¿Cuántos euros quiere meter en la hucha?"));
            if (money >= 0) {
                hucha += money;
            } else {
                console.log("Por favor, escriba una cantidad positiva.");
            }
        }else {
            amount = parseFloat(prompt("Por favor, escriba una cantidad de euros ahorrar positiva."));
        }
    }
    console.log(`¡Objetivo conseguido! Ha ahorrado usted ${hucha} euros.`);
}