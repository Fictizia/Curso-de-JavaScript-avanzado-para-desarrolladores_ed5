
// 1. Dado un array de números enteros positivos desordenados, 
// devolver otro array con los números ordenados.

const sortNumbers = (numbers) => {
  const result = numbers.reduce(({ sortedElements, numbers }) => {
    const smallestNumber = Math.min(...numbers);
    return {
      sortedElements: [...sortedElements, smallestNumber],
      numbers: numbers.filter(number => number !== smallestNumber)
    }

  }, { sortedElements: [], numbers });

  return result.sortedElements;
}

const numbers = [4, 2, 12, 8, 6];
sortNumbers(numbers);