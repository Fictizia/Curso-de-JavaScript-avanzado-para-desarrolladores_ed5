// Crea una función que reciba una frase como string y 
// devuelva la palabra más larga:

function palabraMasLarga(str) {
    return str.split(' ').sort((a, b) =>   b.length-a.length)[0]
}

console.log(palabraMasLarga("Erase una vez que se era") === "Erase")

// creo que me he rayado lo más grande...