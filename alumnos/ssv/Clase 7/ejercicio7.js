// 7. Crear una función que utilice una expresión regular para identificar si el parametro str que recibe es una dirección MAC o no. Una dirección MAC se compone de 6 pares de caracteres hexadecimales separados por :.

const regexp = /(?:[\da-f]{2}[:]){5}[\da-f]{2}/i;


console.assert( regexp.test('re'), true );

console.assert( regexp.test('0132546789AB') , false); // sin separadores

console.assert( regexp.test('01:32:54:67:89'), false ); // 5 números, deben ser 6

console.assert( regexp.test('01:32:54:67:89:ZZ'), false ) // Las ZZ finales no son hexadecimales

