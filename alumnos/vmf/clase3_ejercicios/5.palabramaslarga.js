// 5.Crea una función que reciba una frase como string y devuelva la palabra más larga:

function palabraMasLarga(str) {
    frase = str.split(" ");
    palabraLarga = "";
    for (const palabra of frase) {
        if (palabra.length > palabraLarga.length){
            palabraLarga = palabra;
        };
    }
    return palabraLarga;
}

palabraMasLarga("mi nombre es Veronica");

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")