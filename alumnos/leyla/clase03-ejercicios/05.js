// Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraMasLarga(str) {
    let aux = str.split(' ');
    let mayor = aux[0].length;
    let pos = 0;
    for (let i = 0; i < aux.length; i++) {
        if(aux[i].length > mayor) {
            mayor = aux[i].length
            pos = aux[i]
        }
    }
    return aux[pos]
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")


