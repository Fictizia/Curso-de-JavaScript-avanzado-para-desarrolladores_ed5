// Crear una función que reciba un divisor y un límite y devuelva el mayor número divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos. devolver el número menor estricto que el límite que al dividirlo entre el divisor, el resto sea cero

function getMax(divisor, limit) {
  for (let i = limit; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

console.log(getMax(5, 12));
console.log(getMax(3, 25));
