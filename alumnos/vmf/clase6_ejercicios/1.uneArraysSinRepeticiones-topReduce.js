// Crear una función que reciba varios arrays de números y devuelva la
// unión de todos los arrays sin repeticiones. Datos de prueba:

const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

function joinTheArrays(...args) { // rest
    const miSetArray = [...new Set(args.reduce((acu, element) => [...acu, ...element]))]; // spread
    console.log(miSetArray);
}

joinTheArrays(array1, array2, array3, array4);

/* Nota: No confundir rest con spread */

