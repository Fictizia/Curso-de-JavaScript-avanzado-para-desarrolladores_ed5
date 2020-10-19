// Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.

function validarDocumento(num) {
    // DNI -- /^((\d){8}-?([A-Z]))$/g;
    // NIE -- /^(([X-Z]){1}(\d){7}-?([A-Z]){1})$/g;

    const regex = /^((\d){8}-?([A-Z]))|(([X-Z]){1}(\d){7}-?([A-Z]){1})$/g;
    return regex.test(num);
}

console.info(validarDocumento('Y8237411K')); // true
console.info(validarDocumento('Y8237411-K')); // true
console.info(validarDocumento('Y8237411-KA')); // false
console.info(validarDocumento('A8237411-K')); // false
console.info(validarDocumento('X8253711-K')); // true
console.info(validarDocumento('XS253711-K')); // false

console.info(validarDocumento('54721106N')); // true
console.info(validarDocumento('54721106-N')); // true
console.info(validarDocumento('5454721106N')); // false
console.info(validarDocumento('5454721106-N')); // false