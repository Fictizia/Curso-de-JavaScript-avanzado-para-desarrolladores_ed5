// Crea una función que reciba un string y lo devuelva con todas las palabras 
// con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {
    return (
        str.split(' ')
            .map(word => word[0].toUpperCase()+word.slice(1))
            .join(' ')
    )
}

console.log(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")