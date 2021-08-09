"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//* 1.Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál es el resultado de la impresión? ¿Un valor numérico ? ¿Una promesa ? 
function squareNumber(number) {
    return __awaiter(this, void 0, void 0, function* () {
        return number * number;
    });
}
// console.log(squareNumber(4));
//* 2.Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado obtiene? ¿Una promesa?, ¿ un entero ?
function result() {
    return new Promise((resolve, reject) => {
        function pending() {
            resolve(8);
        }
        setTimeout(pending, 6000);
    });
}
//console.log(result());
//* 3.Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función “resultado” definida anteriormente, de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”, luego, que eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿Una promesa?, ¿ un entero ? 
function asynchronousSquare() {
    return __awaiter(this, void 0, void 0, function* () {
        let result2 = yield result();
        result2 = result2 * result2;
        console.log(result2);
    });
}
asynchronousSquare();
