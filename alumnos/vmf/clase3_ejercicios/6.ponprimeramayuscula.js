/* 6. Crea una función que reciba un string y lo devuelva con todas las palabras
con su primera letra mayúscula. */

function ponPrimeraMayuscula(str) {
    const frase = str.split(" ");
    let resultado = "";
    for (const palabra of frase) {
        resultado += palabra[0].toUpperCase() + palabra.substr(1) + " ";
    }
    return resultado;
}

ponPrimeraMayuscula("Quiero todas las palabras en mayúsculas");

/* console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre
no quiero acordarme") === "En Un Lugar De La Mancha De
Cuyo Nombre No Quiero Acordarme") */