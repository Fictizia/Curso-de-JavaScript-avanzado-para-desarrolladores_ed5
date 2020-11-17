//1. Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones. Datos de prueba:
// Entrada
const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 3, 5, 9, 10]
const array3 = [4, 5, 6, 7, 9]
const array3 = [8, 10]

// Salida
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getArray() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 3, 5, 9, 10];
  const array3 = [4, 5, 6, 7, 9];
  //const miSumaDeArrays = new Set([1, 2, 3, 4, 5], [1, 3, 5, 9, 10], [4, 5, 6, 7, 9], [8, 10]);
  const miSumaDeArrays = new Set(array1, array2, array3, ...rest);
  for (let miNuevoSet of miSumaDeArrays) {
    console.log(miNuevoSet);
  }
  //const miSumaDeArrays = 

}
getArray();


const wrapperWithoutRepeat = (...arr) => Array.from(new Set([...arr].flat()));
From Óscar Corbalán Fernández to Everyone: 09: 43 PM
const interseccion = (arr1, arr2) => {
  return [...new Set(arr1.filter(x => arr2.includes(x)))];
}

interseccion([1, 2, 3, 1, 4, 5, 9], [1, 3, 5, 5, 9, 10]);