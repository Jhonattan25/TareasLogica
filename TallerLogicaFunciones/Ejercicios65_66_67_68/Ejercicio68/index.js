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
  let bills = 0;
  let coins = 0;

  if (amount >= 500) {
    bills = parseInt(amount / 500);
    amount = amount - bills * 500;
    console.log(`${bills} billetes de 500 euros.`);
  }

  if (amount >= 200) {
    bills = parseInt(amount / 200);
    amount = amount - bills * 200;
    console.log(`${bills} billetes de 200 euros.`);
  }

  if (amount >= 100) {
    bills = parseInt(amount / 100);
    amount = amount - bills * 100;
    console.log(`${bills} billetes de 100 euros.`);
  }

  if (amount >= 50) {
    bills = parseInt(amount / 50);
    amount = amount - bills * 50;
    console.log(`${bills} billetes de 50 euros.`);
  }

  if (amount >= 20) {
    bills = parseInt(amount / 20);
    amount = amount - bills * 20;
    console.log(`${bills} billetes de 20 euros.`);
  }

  if (amount >= 10) {
    bills = parseInt(amount / 10);
    amount = amount - bills * 10;
    console.log(`${bills} billetes de 10 euros.`);
  }

  if (amount >= 5) {
    bills = parseInt(amount / 5);
    amount = amount - bills * 5;
    console.log(`${bills} billetes de 5 euros.`);
  }

  if (amount >= 2) {
    coins = parseInt(amount / 2);
    amount = amount - coins * 2;
    console.log(`${coins} monedas de 2 euros.`);
  }
  
  if (amount >= 1) {
    coins = parseInt(amount / 1);
    amount = amount - coins * 1;
    console.log(`${coins} moneda de 1 euro.`);
  }
}