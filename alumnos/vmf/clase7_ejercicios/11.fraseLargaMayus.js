/*11. Crear una función que lea una frase y devuelva la palabra más larga que contenga, al menos, una mayúscula.*/


function leerFrase(frase) {
    const contieneUnaMayus = /[A-Z]{1}/;
    const arrayfrase = frase.split(" ");
    let palabraLarga = "";
    for (const palabra of arrayfrase) {
        if (contieneUnaMayus.test(palabra)) {
            if (palabra.length > palabraLarga.length) {
                palabraLarga = palabra;
            }
        }
    }
    return palabraLarga;
}

leerFrase("Hola que pasa Veronica");
leerFrase("tengo Un Maravilloso Esternocleidomastoideo");

// seguro que se puede simplificar, pero ahora estoy tan rallada que no se me ocurre como.
// voy a pasar al siguiente ejercicio mientras.
