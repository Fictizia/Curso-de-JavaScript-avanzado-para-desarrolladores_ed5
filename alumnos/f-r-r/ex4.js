//4- Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por divisor menor que limite.(limit excluded)
// Ambos valores serán siempre enteros positivos.
function maximoDivisible (divisor, limite) {
    for(let i = limite - 1;  i > 0; i--) {
      if (i % divisor === 0) {
        return i;
      }
    }
  }

  console.log(maximoDivisible(3, 6));