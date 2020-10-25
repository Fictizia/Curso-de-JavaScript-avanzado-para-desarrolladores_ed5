// Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener:

// Entre 8 y 16 caracteres
// Al menos una letra minúscula
// Al menos una letra mayúscula
// Al menos un número
// Puede contener símbolos no alfanuméricos.

function isValidPassword(pass) {
    if(!(pass.length >= 8 && pass.length <= 16)) {
        return "La contraseña debe tener entre 8 y 16 caracteres";
    }

    if(!(/[a-z]+/g.test(pass))) {
        return "La contraseña debe tener al menos una letra minúscula";
    }

    if(!(/[A-Z]+/g.test(pass))) {
        return "La contraseña debe tener al menos una letra mayúscula";
    }

    if(!(/\d+/g.test(pass))) {
        return "La contraseña debe tener al menos un número";
    }

    return "Contraseña válida";
}

console.info(isValidPassword('1234567')); // La contraseña debe tener entre 8 y 16 caracteres
console.info(isValidPassword('1234567a')); // La contraseña debe tener al menos una letra mayúscula
console.info(isValidPassword('LEYLAVIEIRAv')); // La contraseña debe tener al menos un número
console.info(isValidPassword('1234567aB')); // Contraseña válida
console.info(isValidPassword('leylavieiraV1@')); // Contraseña válida