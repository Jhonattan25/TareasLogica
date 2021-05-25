/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/
let enterNumber = parseInt(prompt("Ingrese un número que este en el siguiente rango [1-15]"));

if (enterNumber >= 1 && enterNumber <= 15) {
  let flag = isPrimeNumber(enterNumber);
  if (flag) {
    console.log("El numero", enterNumber, "es primo");
  }else{
    console.log("El numero", enterNumber, "no es primo");
  }
}else{
  console.log("El numero", enterNumber, "no es valido");
}

function isPrimeNumber(number) {
    if (number === 2 || number === 3 || number === 5 || number === 7 || number === 11 || number === 13) {
      return true;
    }
    return false;
}





