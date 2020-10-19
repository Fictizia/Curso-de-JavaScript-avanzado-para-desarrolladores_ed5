// Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es la letra de la intro de la serie Batman de los 60. Dicha letra, de dificultad manificestat, dice lo siguiente: Na na na na na na na na na na na na na na na na... ¡BATMAN!. Debe ser case insensitive.

function isBatmanIntro(str) {
    return /^((na\s?){16}([.][.][.]\s¡BATMAN!){1})$/i.test(str);
}

console.info(isBatmanIntro('Na na na na na na na na na na na na na na na na... ¡BATMAN!'));