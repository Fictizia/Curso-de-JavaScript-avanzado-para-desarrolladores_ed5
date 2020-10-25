// 4. Crear una función que recibe un número hexadecimal y compruebe si es válido o no. Un número hexadecimal puede contener dígitos numéricos o letras de la a a la f. No debe ser sensible a mayúsculas.

// Mucha info justo a continuación del ejercicio:
// https://github.com/Fictizia/Curso-de-JavaScript-avanzado-para-desarrolladores_ed5/blob/master/teoria/clase7.md

const fnc = hexa => {
    const regex = /([a-f0-9]){6}|([a-f0-9]){3}/i;
    const checkHexa = hexa.match(regex) ? true : false;
    console.log(checkHexa);
}

fnc('f0A');