// Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.

function getNumber() {
  var number = prompt('');
  if (number % 2 == 0) {
    console.log('par');
    return true;
  } else {
    console.log('impar')
    return false;
  }
}
getNumber();