// 1. Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones. Datos de prueba:

// Entrada
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

// Salida
// [1,2,3,4,5,6,7,8,9,10]

function unArrayOrdenado(...arrays) {
  const setDeLosArrays = new Set([...arrays.flat()]);
  const arrayFinal = Array.from(setDeLosArrays).sort(function(a, b){return a-b});
  return arrayFinal;
}

console.log(unArrayOrdenado(array1, array2, array3, array4));