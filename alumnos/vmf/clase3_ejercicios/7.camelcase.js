// 7.Crea una función que reciba un string y lo devuelva en camelCase

function camelize(str) {
    let frase = str.split(" ");
    let mayus = "";
    let resultado = "";
    for (const palabra of frase) {
        mayus += palabra[0].toUpperCase() + palabra.substr(1);
    }
    return resultado += mayus[0].toLowerCase() + mayus.substr(1);
}

camelize("Hola a todos que tal");

// console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");