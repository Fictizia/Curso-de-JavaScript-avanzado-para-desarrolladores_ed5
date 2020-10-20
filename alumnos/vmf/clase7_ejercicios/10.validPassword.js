/*10. Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener:
Entre 8 y 16 caracteres
Al menos una letra minúscula
Al menos una letra mayúscula
Al menos un número
Puede contener símbolos no alfanuméricos.*/

function validaPassword(pass) {
    const size = /[A-z0-9]{8,15}/ig;
    const passRegex = /[A-z0-9]{8,15}/g;
    const alfa = /[^A-Za-z0-9]/g;
    return size.test(pass) && passRegex.test(pass) && alfa.test(pass);
}

validaPassword("Veri55@@")

// Me estoy volviendo loca... ni idea.
// he intentado de todo, he mirado hasta stackoverflow y he visto el resultado del regex. pero no quiero copiar!
// mejor que me lo expliques si no termino de sacarlo :)

