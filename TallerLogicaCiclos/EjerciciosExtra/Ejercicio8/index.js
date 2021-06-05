/*
    8. Escriba un programa que simule una hucha. El programa solicitará primero una cantidad, que será la cantidad de dinero que queremos ahorrar. A continuación, el programa solicitará una y otra vez las cantidades que se irán ahorrando, hasta que el total ahorrado iguale o supere al objetivo. El programa no comprobará que las cantidades sean positivas.
*/

let amountEntered = parseFloat(prompt("¿Cuántos euros quiere ahorrar?"));
simulateHucha(amountEntered);

function simulateHucha(amount){
    let hucha = 0; 
    while (hucha < amount) {
        hucha += parseFloat(prompt("¿Cuántos euros quiere meter en la hucha?"));
    }
    console.log(`¡Objetivo conseguido! Ha ahorrado usted ${hucha} euros.`);
}