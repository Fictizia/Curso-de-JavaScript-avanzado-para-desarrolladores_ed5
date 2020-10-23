// Crear una función que lea una frase y devuelva la palabra más larga que contenga, al menos, una mayúscula.

function longestMayusWord(str) {
    const words = str.split(" ");
    const wordsMayus = words.filter(word => /[A-Z]+/g.test(word));

    if (wordsMayus.length > 0) {
        return wordsMayus.sort(function (a, b) {
            return b.length - a.length;
        })[0];
    } else {
        return "No hay ninguna palabra con mayúscula";
    }
}

console.info(longestMayusWord("Erase una vez en un lugar de la Mancha cuyo nombre no Recuerdo")); // Recuerdo

