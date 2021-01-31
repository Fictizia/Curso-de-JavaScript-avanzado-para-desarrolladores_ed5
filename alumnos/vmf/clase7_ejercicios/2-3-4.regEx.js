/*
2. Crear una función que recibe un string y devuelva si contiene o no una vocal.
*/

function contieneVocal(vocales) {
    const regex = /[aeiou]/i;
    return `it's ${regex.test(vocales)}`;
}

contieneVocal("veronica");

/*
3. Crear una función que recibe un pin y diga si es válido o no. Un pin contiene 4 dígitos numéricos.
*/
function validaPin(pin) {
    return /[0-9][0-9][0-9][0-9]/.test(pin);
}

validaPin(1234);

/*
4. Crear una función que recibe un número hexadecimal y compruebe si es válido o no. Un número hexadecimal puede contener dígitos numéricos o letras de la a a la f. No debe ser sensible a mayúsculas.
*/

function validaHex(n) {
    return /[0-9a-f]/i.test(n);
}

validaHex("f4034");