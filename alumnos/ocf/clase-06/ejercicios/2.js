// 2. Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.

const array1 = [1, 2, 3, 1, 4, 5, 9];
const array2 = [1, 3, 5, 5, 9, 10];

// #A solucionado con Set
const fncA = (arr1, arr2) => {
  return [...new Set(arr1
    .filter(x => arr2.includes(x))
  )];
}

// #B solucionado sin Set
const fncB = (...args) => {

  let resultArr = [];

  for (const num of args[0]) {
    if (args[1].includes(num)) {
      // así evito meter números repetidos en resultArr
      resultArr[num] = num;
    }
  }
  // limpio los empty
  return resultArr.filter(x => x !== undefined);
}

console.log(fncA(array1, array2));
// [ 1, 3, 5, 9 ]

console.log(fncB(array1, array2));
// [ 1, 3, 5, 9 ]