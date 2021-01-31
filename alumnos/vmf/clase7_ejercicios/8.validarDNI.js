/* Ejercicio: 8. Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.*/

function validaDNI(id) {
    const dniRegex = /[0-9]{8}[-]?[A-Z]$/i;
    const nieRegex = /^[XYZ][0-9]{7}[-]?[A-Z]$/i;
    return dniRegex.test(id) || nieRegex.test(id);
}

validaDNI('04222067J');
validaDNI('X4222057-J');
