/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let number = parseInt(prompt("Ingrese un número"));

if (number >= 1 && number <= 15) {
  if (number === 2 || number === 3 || number === 5 || number === 7 || number === 11 || number === 13) {
    console.log("El número", number, "es primo");
  }else{
    console.log("El número", number, "no es primo");
  }
}

/*Switch*/
if (number >= 1 && number <= 15) {
  switch (number) {
    case 2:
      console.log("El número", number, "es primo");
      break;
    case 3:
      console.log("El número", number, "es primo");
      break;
    case 5:
      console.log("El número", number, "es primo");
      break;
    case 7:
      console.log("El número", number, "es primo");
      break;
    case 11:
      console.log("El número", number, "es primo");
      break;
    case 13:
      console.log("El número", number, "es primo");
      break;
    default:
      console.log("El número", number, "no es primo");
      break;
  }
}

