// Crea una función que reciba un string y lo devuelva en camelCase

function camelize(str) {
    let palabras = str.split(" ");
    let fraseCamelCase = palabras.splice(1).map((palabra) =>
        palabra.charAt(0).toUpperCase().concat(palabra.substring(1))
    );
    let primeraPalabra = palabras[0].toLowerCase();
  
    return primeraPalabra + fraseCamelCase.join('');
}
console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");