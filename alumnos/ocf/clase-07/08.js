// 8. Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.

// DNI: 8 números + ? guión + letra mayúscula
// NIE: X, Y o Z + 7 números + ? guión + letra mayúscula

const fnc = nif => {
    const regex = /^\d{8}-?[A-Z]$|^[XYZ]\d{7}-?[A-Z]$/;
    const checkRegex = nif.match(regex) ? true : false;
    console.log(checkRegex);
}

// DNI
fnc('54938742N');   // true
fnc('54900094-A');  // true
fnc('5490004-');    // false
fnc('493842N');     // false
fnc('5490004');     // false
fnc('549000004999');  // false
fnc('5490AA004999B'); // false

// NIE
fnc('Y1234567X');   // true
fnc('X1234567-V');  // true
fnc('1234567X');    // false
fnc('X1234567');    // false
fnc('Y123456007X'); // false
fnc('X12345617-V'); // false