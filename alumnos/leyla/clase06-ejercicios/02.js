// Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.
// Entrada
// const array1 = [1,2,3,1,4,5,9]
// const array2 = [1,3,5,5,9,10]

// Salida
// [1,3,5,9]

const array1 = [1,2,3,1,4,5,9];
const array2 = [1,3,5,5,9,10];

function interseccion(array1, array2) {
    let aux = array1.filter(elem => array2.includes(elem));
    return new Set(aux);
}

console.info(interseccion(array1, array2));
