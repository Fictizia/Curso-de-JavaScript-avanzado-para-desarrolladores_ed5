// Crear una función que recibe un número hexadecimal y compruebe si es válido o no. Un número hexadecimal puede contener dígitos numéricos o letras de la a a la f. No debe ser sensible a mayúsculas.

function esHexadecimal(num) {
    return /^([a-f]|\d){6}$/i.test(num);
}

console.info(esHexadecimal('EAEAEA')); // true
console.info(esHexadecimal('00FF00')); // true
console.info(esHexadecimal('000000')); // true
console.info(esHexadecimal('X00000')); // false
console.info(esHexadecimal('EAEAEAEA')); // false