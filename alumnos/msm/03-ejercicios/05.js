// Crea una función que reciba una frase como string y devuelva la palabra más larga:

function palabraMasLarga(str) {
    let ordenaPalabras = str.split(" ").sort((a, b) => b.length - a.length);
    return ordenaPalabras[0];
  }
  console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");