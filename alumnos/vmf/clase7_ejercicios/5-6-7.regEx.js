/*5. Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es una albóndiga. Tener en cuenta que (al igual que la RAE) hay que contemplar almóndiga. Debe ser case insensitive.*/

function esAlbondiga(str) {
    return /al(m|b)óndiga/i.test(str);
}

esAlbondiga(str);

/*6. Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es la letra de la intro de la serie Batman de los 60. Dicha letra, de dificultad manificestat, dice lo siguiente: Na na na na na na na na na na na na na na na na... ¡BATMAN!. Debe ser case insensitive.*/

function batmanSong(str) {
    const itsdasong = /([n][a][ ]){15}... ¡BATMAN!/i;
    return itsdasong.test(str);
}
batmanSong("Na na na na na na na na na na na na na na na na ... ¡BATMAN!");

/*7. Crear una función que utilice una expresión regular para identificar si el parametro str que recibe es una dirección MAC o no. Una dirección MAC se compone de 6 pares de caracteres hexadecimales separados por :.*/

function direccionMac(str) {
    const macRegex = /([0-9a-f]{2}[:]){5}([0-9a-f]{2})$/i;
    return macRegex.test(str);
}

direccionMac('01:32:54:67:89:AB') // true
direccionMac('0132546789AB') // false
direccionMac('01:32:54:67:89') // false
direccionMac('01:32:54:67:89:ZZ') // false
