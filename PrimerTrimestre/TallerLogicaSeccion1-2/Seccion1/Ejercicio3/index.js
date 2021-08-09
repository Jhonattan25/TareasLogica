/*
   3. Cree un programa que lea el monto de un préstamo y el plazo en meses, 
   y muestre al usuario el valor de las cuotas mensuales pagando un interés 
   fijo del 2.7% mensual.
*/

const INTEREST = 0.027;
let loan = parseFloat(prompt( "Ingrese el monto del prestamo"));
let periodMonths = parseInt(prompt ("Ingrese el plazo de prestamo"));

//monthlyFees-> cuotas mensuales
let monthlyFees = loan * INTEREST;
let totalInterest = monthlyFees * periodMonths;

console.log("El valor de las cuotas mensuales es:", monthlyFees);
console.log("El valor total de los interes es:", totalInterest);