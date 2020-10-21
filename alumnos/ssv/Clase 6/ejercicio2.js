//2. Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.
// Entrada
const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

// Salida
// [1,3,5,9]


function intersecciónDeArrays(arr1, arr2) {
    const arrToSet = new Set(arr1);
    const finalSet = new Set();
    const intersecciones = arr2.map(number => {
      if(arrToSet.has(number)){
        finalSet.add(number)
      }
    })
    return  [...finalSet]
}

  console.log(intersecciónDeArrays(array1, array2));