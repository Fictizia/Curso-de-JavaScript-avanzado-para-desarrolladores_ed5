"use strict";

// Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados.

let sortNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

let numbers = [2, 7, 9, 10, 22, 3, 1, 19, 8];
console.log(sortNumbers(numbers));
