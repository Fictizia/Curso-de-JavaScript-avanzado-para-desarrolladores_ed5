// Crear una función que recibe un string y devuelva si contiene o no una vocal.
function hayVocal(str) {
    return /[aeiou]/i.test(str);
}

console.info(hayVocal('Esto es una frase')); // true
console.info(hayVocal('lrm psm dlr st')); // false