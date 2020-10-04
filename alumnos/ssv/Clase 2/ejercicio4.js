const valueAndLimit = (value, limit) => {
  let result;
  for (let i = limit; i > 0; i--) {
    if (i % value === 0) {
      result = i;
      break;
    }
  }
  return result;
};

console.log(valueAndLimit(3, 10)); //Return 9
console.log(valueAndLimit(2, 25)); //Return 24
