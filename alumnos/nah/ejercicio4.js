/*
4- Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos. 
*/

let div = 6;
let lim = 12;

const checkData = (divisor, limit) => {
  if (divisor >= limit) {
    throw new Error("The divisor must be less than the limit");
  } else if (
    Number.isInteger(divisor) ||
    Number.isInteger(limit) ||
    divisor <= 0 ||
    limit <= 0
  ) {
    throw new Error("The divisor or the limit must be a positive integer");
  }
};

const searchMaxDivisor = (divisor, limit) => {
  checkData(divisor, limit);
  for (let i = limit - 1; i >= 1; i--) {
    if (Number.isInteger(i / divisor)) {
      return i;
    }
  }
};

searchMaxDivisor(div, lim);
