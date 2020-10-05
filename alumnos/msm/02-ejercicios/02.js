"use strict";

// Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.

let isEven = (number) => (number % 2 === 0 ? true : false);

console.log(isEven(2));
console.log(isEven(11));
