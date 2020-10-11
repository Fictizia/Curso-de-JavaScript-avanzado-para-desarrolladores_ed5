// Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {
    let aux = str.split(' ');
    let nueva = "";
    let palabra = "";
    for(let i = 0; i < aux.length; i++) {
        palabra = aux[i].charAt(0).toUpperCase() + aux[i].slice(1);
        nueva += palabra + ' ';
    }
    return nueva.trim();
}

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")