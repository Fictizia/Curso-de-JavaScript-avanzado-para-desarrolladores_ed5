const arrayOfNumbers = [9, 82, 67, 19, 918, 6, 91];
const anotherArray = [10, 6, 1, 89, 6, 0, 89, 10, 10, -9];

// const orderedArrayOfNumbers = arrayOfNumbers.sort(function (a, b) {
//   return a - b;
// }); ESTO NO NOS DEJA FRAN :(

const orderArray = (array) => {
  const newArray = [];
  newArray.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray.length === 1) {
        if (array[i] > newArray[j]) {
          newArray.splice(j + 1, 0, array[i]);
        } else {
          newArray.splice(0, 0, array[i]);
        }
        break;
      } else {
        if (
          array[i] === newArray[j] ||
          (array[i] > newArray[j] && array[i] < newArray[j + 1])
        ) {
          newArray.splice(j + 1, 0, array[i]);
          break;
        } else if (array[i] > newArray[newArray.length - 1]) {
          newArray.push(array[i]);
          break;
        } else if (array[i] < newArray[0]) {
          newArray.splice(0, 0, array[i]);
          break;
        }
      }
    }
  }
  return newArray;
};

console.log(orderArray(arrayOfNumbers));
console.log(orderArray(anotherArray));
