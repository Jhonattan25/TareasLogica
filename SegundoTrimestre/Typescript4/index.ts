//* 1.Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál es el resultado de la impresión? ¿Un valor numérico ? ¿Una promesa ? 
async function squareNumber(number:number){
    return number * number;
}
// console.log(squareNumber(4));

//* 2.Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado obtiene? ¿Una promesa?, ¿ un entero ?
function result(){
    return new Promise((resolve, reject)=>{
        function pending(){
            resolve(8);
        }
        setTimeout(pending, 6000);
    });
}
//console.log(result());

//* 3.Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función “resultado” definida anteriormente, de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”, luego, que eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿Una promesa?, ¿ un entero ? 
async function asynchronousSquare(){
    let result2:any = await result();
    result2 = result2 * result2;

    console.log(result2);
}
asynchronousSquare();