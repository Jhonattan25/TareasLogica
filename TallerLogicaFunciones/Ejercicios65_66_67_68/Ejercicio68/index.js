/*
    68. Realiza un programa que calcule el desglose en billetes y monedas de una cantidad exacta de euros. Hay billetes de  500, 200, 100, 50, 20, 10 y 5 ¤ y monedas de 2 y 1 ¤.
    Por ejemplo, si deseamos conocer el desglose de 434 ¤, el programa mostrara por pantalla el siguiente resultado:
    
    2 billetes de 200 euros.
    1 billete de 20 euros.
    1 billete de 10 euros.
    2 monedas de 2 euros.
*/
let enterAmount = parseInt(prompt("Ingrese cantidad de euros"));
calulateBreakdowonBillsCoins(enterAmount);

function calulateBreakdowonBillsCoins(amount) {
  let bills500 = 0;
  let bills200 = 0;
  let bills100 = 0;
  let bills50 = 0;
  let bills20 = 0;
  let bills10 = 0;
  let bills5 = 0;
  let coins2 = 0;
  let coins1 = 0;

  if (amount >= 500) {
    bills500 = parseInt(amount / 500);
    amount = amount - bills500 * 500;
    console.log(`${bills500} billetes de 500 euros.`);
  }

  if (amount >= 200) {
    bills200 = parseInt(amount / 200);
    amount = amount - bills200 * 200;
    console.log(`${bills200} billetes de 200 euros.`);
  }

  if (amount >= 100) {
    bills100 = parseInt(amount / 100);
    amount = amount - bills100 * 100;
    console.log(`${bills100} billetes de 100 euros.`);
  }

  if (amount >= 50) {
    bills50 = parseInt(amount / 50);
    amount = amount - bills50 * 50;
    console.log(`${bills50} billetes de 50 euros.`);
  }

  if (amount >= 20) {
    bills20 = parseInt(amount / 20);
    amount = amount - bills20 * 20;
    console.log(`${bills20} billetes de 20 euros.`);
  }

  if (amount >= 10) {
    bills10 = parseInt(amount / 10);
    amount = amount - bills10 * 10;
    console.log(`${bills10} billetes de 10 euros.`);
  }

  if (amount >= 5) {
    bills5 = parseInt(amount / 5);
    amount = amount - bills5 * 5;
    console.log(`${bills5} billetes de 5 euros.`);
  }

  if (amount >= 2) {
    coins2 = parseInt(amount / 2);
    amount = amount - coins2 * 2;
    console.log(`${coins2} monedas de 2 euros.`);
  }
  
  if (amount >= 1) {
    coins1 = parseInt(amount / 1);
    amount = amount - coins1 * 1;
    console.log(`${coins1} moneda de 1 euro.`);
  }
}