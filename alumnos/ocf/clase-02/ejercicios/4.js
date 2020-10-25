/*
# Ejercicio 4:
Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos.
*/

const fnc = (di, li) => {
  let divisors = [];
  
  for(let i = li; i >= 0; i--) {
    divisors.push(di * i);
  }
  
  //console.log(divisors);
  return divisors.find(x => x < li);
}

fnc(7, 30);