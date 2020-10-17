// 1. Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones.

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 9, 10];
const array3 = [4, 5, 6, 7, 9];
const array4 = [8, 10];

// #A solucionado con Set y flat
const fncA = (...args) => {
  return [... new Set(args.flat())];
}

// #B solucionado con for...of
const fncB = (...args) => {
  let resultArr = [];

  for (const arr of args) {
    for (const num of arr) {
      if (!resultArr.includes(num)) {
        resultArr.push(num);
      }
    }
  }
  return resultArr;
}

console.log(fncA(array1, array2, array3, array4));
// [ 1,  2, 3, 4, 5, 9, 10, 6, 7, 8 ]

console.log(fncB(array1, array2, array3, array4));
// [ 1,  2, 3, 4, 5, 9, 10, 6, 7, 8 ]