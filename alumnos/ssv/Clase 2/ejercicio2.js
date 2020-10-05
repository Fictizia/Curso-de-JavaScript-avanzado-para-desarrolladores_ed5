//PRIMERA OPCIÓN
// const oddOrEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

//CORRECCIÓN
const oddOrEven = (num) => {
  return num % 2 === 0;
};

console.log(oddOrEven(2)); //return true
console.log(oddOrEven(11)); //return false
