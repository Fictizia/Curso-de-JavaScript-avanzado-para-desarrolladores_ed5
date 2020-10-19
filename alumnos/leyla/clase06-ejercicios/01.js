// Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones. Datos de prueba:
// Entrada
// const array1 = [1,2,3,4,5]
// const array2 = [1,3,5,9,10]
// const array3 = [4,5,6,7,9]
// const array3 = [8,10]

// Salida
// [1,2,3,4,5,6,7,8,9,10]

function unir(array, ...rest) {
    return new Set(array.concat(...rest));
}

const array1 = [1,2,3,4,5];
const array2 = [1,3,5,9,10];
const array3 = [4,5,6,7,9];
const array4 = [8,10];

console.info(unir(array1, array2, array3, array4));

//===============================================================
// OTRA SOLUCIÓN
// const wrapperWithoutRepeat = (...arr) =>  Array.from(new Set([...arr].flat()));
