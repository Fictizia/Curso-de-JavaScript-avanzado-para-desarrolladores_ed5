/*
# Ejercicio 1:
Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados.
*/

const sortNumbers = (arr) => {
  
  let arrCopy = [...arr];
  let resultArr = [];
  
  for(let number of arrCopy) {
    resultArr[number] = number;
  }
  
  return resultArr.filter(x => x !== undefined);
}

sortNumbers([10, 99, 6, 119, 0, 1, 30, 12, 25, 3]);
