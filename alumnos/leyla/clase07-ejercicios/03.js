// Crear una función que recibe un pin y diga si es válido o no. Un pin contiene 4 dígitos numéricos.
function esPinValido(pin) {
    return /^\d{4}$/i.test(pin);
}

console.info(esPinValido('1234')); // true
console.info(esPinValido('123A')); // false
console.info(esPinValido('b23A')); // false
console.info(esPinValido('ABDC2432')); // false