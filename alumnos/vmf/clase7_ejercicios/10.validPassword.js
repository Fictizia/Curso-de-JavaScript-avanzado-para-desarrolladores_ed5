/*10. Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener:
Entre 8 y 16 caracteres
Al menos una letra minúscula
Al menos una letra mayúscula
Al menos un número
Puede contener símbolos no alfanuméricos.*/

function validaPass(pass) {
    if (pass.length < 8 || pass.length > 16) {
        return false;
    }
    return /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[a-z]/.test(pass);
}

validaPass("Veri55@@");