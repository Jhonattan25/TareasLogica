// Cree una función con un paraḿetro opcional tipo boolean,uno por defecto tipo string, y uno obligatorio detipo number. Haga el llamado a la función.
function showInformation(age:number, study?:boolean, nambe:string="Maria"){
    if(study){
        console.log(`${nambe} tiene ${age} y estudia programación`);  
    }else{
        console.log(`${nambe} tiene ${age} y no estudia programación`);  
    }
}

// showInformation(18);

// Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el llamado a la función.
let sum = function(number1:number, number2:number){
    return number1 + number2;
};

//let result = sum(2, 8);
//console.log('El resultado de la suma es:', result);

// Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el mensaje “HOLA ADSI”
let messageTimer = setTimeout(function(){
        console.log('HOLA ADSI');
    }, 5000);

// Cree una función flecha sin argumentos que imprima “Hola ADSI”
let simpleArrowMessage = () => console.log('Hola ADSI');
//simpleArrowMessage();

// Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el parámetro y omita la palabra reservada return.
let userAge = (age:number) => `La edad ingresada es: ${age} años`;
//console.log(userAge(20));

// Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros,  no use la palabra reservada return.
let multiplication = (number1:number, number2:number) => number1 * number2;
// let result = multiplication(2, 8);
// console.log('El resultado de la multiplicación es:', result);

// Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice la variable módulo que contendrá el módulo de los dos números y la otra donde se retorna la variable módulo. Use paréntesis para agrupar los parámetros,use llaves para agrupar las dos instrucciones.
let module2 = (number1:number, number2:number) => {
    let resultModule = number1 % number2;
    return resultModule; 
};
//let result = module2(10, 3);
//console.log('El modulo es:', result);