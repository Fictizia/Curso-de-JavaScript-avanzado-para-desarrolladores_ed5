/*
6 Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es la letra de la intro de la serie Batman de los 60. Dicha letra, de dificultad manificestat, dice lo siguiente: Na na na na na na na na na na na na na na na na... ¡BATMAN!. Debe ser case insensitive
*/

const regext = /^(na ){15}na... ¡BATMAN!$/gi
console.assert(regext.test ('Na na na na na na na na na na na na na na na na... ¡BATMAN!'), true);
